// Service worker de Coco Beach Staff: hace que la app abra sin internet.
// - Páginas: red primero, si falla usa la copia guardada.
// - Archivos con hash (/staff/assets/*), iconos y fuentes: copia guardada primero.
const CACHE = 'coco-staff-v1'
const SHELL = ['/staff/', '/staff/admin/', '/staff/manifest.webmanifest', '/staff/icons/icon-192.png', '/staff/logo-h-dark.png']

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

// La página nos manda la lista de archivos que ya cargó para guardarlos.
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'cache-urls') {
    caches.open(CACHE).then((c) => Promise.all(e.data.urls.map((u) => c.add(u).catch(() => {}))))
  }
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  const sameOrigin = url.origin === self.location.origin
  const isFont = url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')
  if (!sameOrigin && !isFont) return // Supabase y demás: siempre directo a la red
  if (sameOrigin && !url.pathname.startsWith('/staff/')) return

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put(req, copy))
          return res
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match(url.pathname.startsWith('/staff/admin') ? '/staff/admin/' : '/staff/')),
        ),
    )
    return
  }

  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok || res.type === 'opaque') {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(req, copy))
          }
          return res
        }),
    ),
  )
})
