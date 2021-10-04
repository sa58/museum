console.log(`1024 (4) Блок header
1024 (4) Секция Welcome
1024 (4) Секция Visiting
1024 (4) Секция Explore
1024 (4) Секция Video
1024 (4 - 1) Секция Gallery - нет тени, некорректный отступ
1024 (4) Секция Tickets
1024 (4) Форма покупки билетов
1024 (4) Секция Contacts
1024 (4) Блок footer
----------------------------------
768 (4) Блок header
768 (4) Секция Welcome
768 (4) Секция Visiting
768 (4) Секция Explore
768 (4) Секция Video
768 (4) Секция Gallery
768 (4) Секция Tickets
768 (4) Форма покупки билетов
768 (4) Секция Contacts
768 (4) Блок footer
----------------------------------
420 (4) Блок header
420 (4) Секция Welcome
420 (4) Секция Visiting
420 (4) Секция Explore
420 (4) Секция Video
420 (4) Секция Gallery
420 (4) Секция Tickets
420 (4) Форма покупки билетов
420 (4) Секция Contacts
420 (4) Блок footer
----------------------------------
(6) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки
----------------------------------
адаптивная и респонсивная
----------------------------------
(0) слайдера в секции Welcome
(2) слайдера сравнения изображений в секции Explore
(2) кастомного видеоплеера в секции Video
(0) слайдера в секции Video
(2) YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого
(2) галереи изображений и изображений в ней
(2) карты
----------------------------------
(2) при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку
(2) ссылки в меню работают, обеспечивая плавную прокрутку по якорям
(2) при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается
(6) вёрстка меню соответствует макету на всех проверяемых разрешениях
----------------------------------
(0) Оптимизация скорости загрузки страницы
----------------------------------
Итого 147`)
// ------------------------------

let burger = document.querySelector('.burger');
let aside = document.querySelector('.aside');
let asideitem = document.querySelector('.aside__name');

let arr = ['.welcome__href', '.welcome__more', '.welcome__title'];

let wallElements = arr.map(el => document.querySelector(el));

const toogleWallAside = () => {
  wallElements.forEach(el => {
    console.log(el)
    el.classList.toggle('hidden');
  })
}

burger.addEventListener('click', toggleAside);
document.addEventListener('click', toggleAside2);

function toggleAside2(e) {
  let parent = e.target.closest('.aside');
  let parent1 = e.target.closest('.aside__item');

  if((parent1 != null || parent === null) && aside.classList.contains('open')) {
    burger.classList.toggle('open');
    aside.classList.toggle('open');
    toogleWallAside()
  }
}

function toggleAside(e) {
  e.preventDefault();
  e.stopPropagation();

  toogleWallAside();
  this.classList.toggle('open');
  aside.classList.toggle('open');
}

const progress = document.querySelector('.range');
const progress1 = document.querySelector('.video__volume');

const updateProgress = e => {
  let w = document.documentElement.clientWidth

  if(w === 1024) {
    progress.value = 40;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${40}%, #c4c4c4 ${40}%, #c4c4c4 100%)`

    progress1.value = 38;
    progress1.style.background = `linear-gradient(to right, #710707 0%, #710707 ${38}%, #c4c4c4 ${38}%, #c4c4c4 100%)`
  }

  if(w === 768) {
    progress1.value = 31;
    progress1.style.background = `linear-gradient(to right, #710707 0%, #710707 ${31}%, #c4c4c4 ${31}%, #c4c4c4 100%)`

    progress.value = 39;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${39}%, #c4c4c4 ${39}%, #c4c4c4 100%)`
  }

  if(w === 420) {
    progress1.value = 40;
    progress1.style.background = `linear-gradient(to right, #710707 0%, #710707 ${40}%, #c4c4c4 ${40}%, #c4c4c4 100%)`
  }
};

window.addEventListener("load", updateProgress);
window.addEventListener("resize", updateProgress);

progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

progress1.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

// L.mapbox.accessToken = 'pk.eyJ1IjoibGFuMzk0NTY2MyIsImEiOiJja3UwYThsYWQyM3AzMnJxdDh5cDhwMGRnIn0.QZJ4Y2w_sHI2JnimfEqD6g';
// var map = L.mapbox.map('map')
//     .setView([48.86091, 2.3364], 16)
//     .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));
    
//     L.marker([48.86091, 2.3364]).addTo(map);
//     L.marker([48.8602, 2.3333]).addTo(map);
//     L.marker([48.8607, 2.3397]).addTo(map);
//     L.marker([48.8619, 2.3330]).addTo(map);
//     L.marker([48.8625, 2.3365]).addTo(map);

// --------------------

const cover = document.getElementById('cover');
const modalIconClose = document.querySelector('.book__btn_close');
const btnDonateForVol = document.querySelector('.tickets__btn');
const makeDonateModal = document.querySelector('.book__modal');

btnDonateForVol.addEventListener('click', showDonateModal);

function showDonateModal() {
  document.body.classList.add('not-scrollable');
  cover.classList.remove('hidden');
  makeDonateModal.classList.remove('hidden');
}

cover.addEventListener('click', () => {
  document.body.classList.remove('not-scrollable');
  cover.classList.add('hidden');
  makeDonateModal.classList.add('hidden');
});

modalIconClose.addEventListener('click', () => {
  document.body.classList.remove('not-scrollable');
  cover.classList.add('hidden');
  makeDonateModal.classList.add('hidden');
});

const pictureInnerContainer = document.querySelector('.picture-inner-container');

const links = [
  `./assets/img/galery/galery1.jpg`,
  `./assets/img/galery/galery2.jpg`,
  `./assets/img/galery/galery3.jpg`,
  `./assets/img/galery/galery4.jpg`,
  `./assets/img/galery/galery5.jpg`,
  `./assets/img/galery/galery6.jpg`,
  `./assets/img/galery/galery7.jpg`,
  `./assets/img/galery/galery8.jpg`,
  `./assets/img/galery/galery9.jpg`,
  `./assets/img/galery/galery10.jpg`,
  `./assets/img/galery/galery11.jpg`,
  `./assets/img/galery/galery12.jpg`,
  `./assets/img/galery/galery13.jpg`,
  `./assets/img/galery/galery14.jpg`,
  `./assets/img/galery/galery15.jpg`
]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const imgs = shuffle(links);

imgs.forEach(el => {
  const img = document.createElement('img');
  img.classList.add('item')
  img.src = el;
  img.alt = `galery1`;
  pictureInnerContainer.append(img);
})

// ------------------------------

// var imageContainer = document.querySelector("#top-image");
// var image = imageContainer.querySelector("img");
// var range = document.querySelector("#range-input");

// range.oninput = function() {
//   imageContainer.style.width = this.value + "%";
// }
