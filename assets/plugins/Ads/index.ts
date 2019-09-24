import MediaPLayer from '../../MediaPlayer'
import Ads, { Ad } from './Ads'


class AdsPlugin {
  private ads: Ads;
  private player: MediaPLayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;
  private adsContainer: HTMLElement;
  
  constructor(){
    this.ads = Ads.getInstance()
    this.adsContainer = document.createElement('div')
    this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this)
  }
  run(player:MediaPLayer){
    this.player = player;
    this.player.containerMain.appendChild(this.adsContainer)
    this.media = this.player.media
    this.media.addEventListener('timeupdate', this.handlerTimeUpdate)
  }

  private handlerTimeUpdate (){
    const currentTime = Math.floor(this.media.currentTime)
    if(currentTime % 5 === 0 ) {
      this.renderAd()
    }
  }

  private renderAd () {
    if(this.currentAd){
      return;
    }
    const ad = this.ads.getAd()
    this.currentAd = ad
    this.adsContainer.innerHTML =`
    <div class="ads">
      <a href="${this.currentAd.url}" class="ads__link" target="_blank">
        <img src="${this.currentAd.imageUrl}" alt="" class="ads__img">
        <div class="ads__info">
          <h5 class="ads__title">${this.currentAd.title}</h5>
          <p class="ads__body">${this.currentAd.body}</p>
        </div>
      </a>
    </div>
    `

    setTimeout(()=>{
      this.currentAd = null
      this.adsContainer.innerHTML = ''
    },2000)

  }
}

export default AdsPlugin