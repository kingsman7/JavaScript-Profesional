import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ad from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
  el: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ad()
  ] });

const playButton:HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton:HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

//serviceWorker para trabajar offlien y dejar las respuestas de las peticiones en cache
//if para verificar si el navegador trabaje con sw. y si trabaja registar el archivo

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}