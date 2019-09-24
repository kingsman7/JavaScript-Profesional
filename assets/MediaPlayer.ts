class MediaPlayer {
  media: HTMLMediaElement;
  containerMain: HTMLElement;
  plugins: Array<any>;
  
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }
  initPlayer(): any {
    this.containerMain = document.createElement('div')
    this.containerMain.style.position ='relative'
    this.media.parentNode.insertBefore(this.containerMain, this.media);
    this.containerMain.appendChild(this.media)
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
}







export default MediaPlayer;