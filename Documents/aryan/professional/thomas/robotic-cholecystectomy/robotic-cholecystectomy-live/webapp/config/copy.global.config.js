module.exports = {
  copyWorkbox: {
  src: ['/usr/lib/node_modules/workbox-sw/build/workbox-sw.js', 
        '/usr/lib/node_modules/workbox-core/build/workbox-core.prod.js', 
        '/usr/lib/node_modules/workbox-precaching/build/workbox-precaching.prod.js'],
	dest: '{{WWW}}/workbox-3.6.3'
  }
}
