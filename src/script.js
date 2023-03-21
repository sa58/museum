import {registerCustomVideoPlayer} from './js/custom-video.js';
import {registerAside} from './js/aside.js';
import {registerMap} from './js/map.js';
import {registerModal} from './js/modal.js';
import {registerGallery} from './js/gallery.js';
import {registerExploreSlider} from './js/explore-slider.js';
import {registerWelcomeCarousel} from './js/welcome-carousel.js';
import {registerTicketsBase} from './js/tickets-base.js';
import {registerFormValidation} from './js/form-validation.js';
import {registerModalForm} from './js/modal-form.js';
import {registerVideoCarousel} from './js/video-carousel.js';

registerCustomVideoPlayer();
registerAside();
registerMap();
registerModal();
registerGallery();
registerExploreSlider();
registerWelcomeCarousel();
registerTicketsBase();
registerFormValidation();
registerModalForm();
registerVideoCarousel();

console.log(`
(-2) - если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно
(-2) - валидатор проверяет только цифры
(-8) - галерея не анимирована
Возможно что-то еще есть...

Итого: 140 - 148
`)
