 const VERSION = 'v1';
// paso 1 crear el pre-cahe. selft es el this de los SW
//con el event.waitUntil espera hasta que el pre-cache se instale o carge
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

/* paso 3 cada ves que corre una peticion hay que ir al cache a ver si esta la respuesta */

self.addEventListener('fetch', event => {
  /* primero se extrae la peticion */
  const request = event.request;
  // solo se trabaja con gets si no es get no guardes cache
  if (request.method !== 'GET') {
    return;
  }
  // buscar en cache
  //se busca con un responde con. y se responde con una respuesta cacheada
  event.respondWith(cachedResponse(request));
  //catch and network. buscar en cache luego ir a network y despues actualizar el cache
  // actualizar el cache
  event.waitUntil(updateCache(request));
});

/*  paso 2 funcion del precache. para trabajar con cache se trabaja con un api del DOM 
que se llama cache. bien hay DOM.
Ya lo que hay que hacer es abrir un cache en espesifico */
async function precache() {
  const cache = await caches.open(VERSION);
  /* al tener la instancia de cache se agragan los recursos */
  return cache.addAll([
    //ejemplo
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.ts',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ]);
}
//paso 3.1 respuesta cacheada. a esa respuesta cacheada se le pasa el request
async function cachedResponse(request) {
  /* primero optener la cache */
  const cache = await caches.open(VERSION);
  /* segundo ver si hace mach con lo que se tiene */
  const response = await cache.match(request);
  //en caso de que response sea undefined hay que responder con lo que de la red
  //es decir busca en el cache y se el response no hay nada entonces retorna lo que viene nuevo
  return response || fetch(request);
}
//paso 3.2 actualizar cache
async function updateCache(request) {
  const cache = await caches.open(VERSION);
  //buscar una copia actualizada
  const response = await fetch(request);
  //resgresa el nuevo contenido del cache donde con el key request actualizas el response
  return cache.put(request, response);
} 