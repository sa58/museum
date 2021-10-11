import {registerCustomVideoPlayer} from './custom-video.js';

function registerVideoCarousel() {
  let currentItem = 0;
  let video = document.querySelector('video');


  let videoCarousel = new Swiper('.swiper-container', {
    breakpoints: {
      slidesPerView: 1,
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 42
      }
    },
    loop: true,
    navigation: {
      prevEl: '.jorney-counter__arrow_left',
      nextEl: '.jorney-counter__arrow_right',
    },
    pagination: {
      el: '.jorney-counter',
      clickable: true,
      bulletClass: 'journey-item',
      bulletActiveClass: 'journey-item_active',
      type: 'bullets'
    }
  });

  videoCarousel.on('transitionEnd', function(e) {



    if(currentItem !== videoCarousel.realIndex) {
      
      currentItem = videoCarousel.realIndex;
      console.log('*** mySwiper.realIndex', videoCarousel.realIndex);
      video.poster = `./assets/video/poster${videoCarousel.realIndex}.jpg`;
      video.src = `./assets/video/video${videoCarousel.realIndex}.mp4`;

      // registerCustomVideoPlayer();
    }
    
  });
}

export {registerVideoCarousel}
