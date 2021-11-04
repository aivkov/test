import Swiper from "swiper";
import {$window} from "../constants";

export default class SwiperSlider {
  constructor(el, options = {
    loop: false,
    speed: 200,
    slidesPerView: 'auto'
  }) {
    this.$t = el;
    this.container = $(this.$t).find('.swiper-container:not(.not-watch)');
    this.item = $(this.$t).find('.swiper-slide:not(.not-watch)');
    this.activeLine = $(this.$t).find('.tabs__active-line');
    this.options = options;
    this.getWidthAllItem();
    this.checkWidth();
    this.resize();
  }

  init() {
    this.swiper = new Swiper( this.container, this.options );
    myLazyLoad.update();
  }

  getWidthAllItem() {
    this.allWidthItem = 0;
    this.$tWidth = $(this.container).width();

    this.item.each( (i, el) => {
      this.allWidthItem += $(el).outerWidth(true);
    })
  }

  checkWidth() {
    if(this.$tWidth  <= this.allWidthItem) {
      if(!$(this.container).hasClass('swiper-container-initialized')){
        this.init();
        if(this.activeLine.length) {
          this.activeLine.hide();
        }
      }
    }else{
      if($(this.container).hasClass('swiper-container-initialized')){
        this.swiper.destroy();
        if(this.activeLine.length) {
          this.activeLine.show();
        }
      }
    }
  }

  resize() {
    $window.on('resize', () => {
      this.getWidthAllItem();
      this.checkWidth();
    })
  }
}
