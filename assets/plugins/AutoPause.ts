import MediaPlayer from '../MediaPlayer';

class AutoPause {

  private threshold:number
  player: MediaPlayer;

  constructor() { 
    this.threshold = 0.25
    this.handlerIntersection= this.handlerIntersection.bind(this)
    this.handlerVisivilityChange= this.handlerVisivilityChange.bind(this)
  }
  run(player) {
    this.player = player
    
    const observer = new IntersectionObserver(this.handlerIntersection, { threshold: this.threshold })

    observer.observe(this.player.media)

    document.addEventListener("visibilitychange", this.handlerVisivilityChange)
  }

  private handlerIntersection(entries:IntersectionObserverEntry[]) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold
    isVisible ? this.player.play() : this.player.pause()
  }

  private handlerVisivilityChange () {
    let state = document.visibilityState
    const isVisible = document.visibilityState === "visible"
    if(isVisible){
      console.log("visible")
      this.player.play()
    } else{
      console.log("non visible")
      this.player.pause()
    }
  }
      
}

export default AutoPause