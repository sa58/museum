const progress = document.querySelector('.range');
const progress1 = document.querySelector('.video__volume');

progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

progress1.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})
// , [2.3333, 48.8602], [2.3397, 48.8607], [], []
L.mapbox.accessToken = 'pk.eyJ1IjoibGFuMzk0NTY2MyIsImEiOiJja3UwYThsYWQyM3AzMnJxdDh5cDhwMGRnIn0.QZJ4Y2w_sHI2JnimfEqD6g';
var map = L.mapbox.map('map')
    .setView([48.86091, 2.3364], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));
    
    L.marker([48.86091, 2.3364]).addTo(map);
    L.marker([48.8602, 2.3333]).addTo(map);
    L.marker([48.8607, 2.3397]).addTo(map);
    L.marker([48.8619, 2.3330]).addTo(map);
    L.marker([48.8625, 2.3365]).addTo(map);


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
  // modalDonate.classList.add('hidden');
  makeDonateModal.classList.add('hidden');
});

modalIconClose.addEventListener('click', () => {
  document.body.classList.remove('not-scrollable');
  cover.classList.add('hidden');
  // modalDonate.classList.add('hidden');
  makeDonateModal.classList.add('hidden');
});




// ------------------------------

const pictureInnerContainer = document.querySelector('.picture-inner-container');

const links = [
  `assets/img/galery/galery1.jpg`,
  `assets/img/galery/galery2.jpg`,
  `assets/img/galery/galery3.jpg`,
  `assets/img/galery/galery4.jpg`,
  `assets/img/galery/galery5.jpg`,
  `assets/img/galery/galery6.jpg`,
  `assets/img/galery/galery7.jpg`,
  `assets/img/galery/galery8.jpg`,
  `assets/img/galery/galery9.jpg`,
  `assets/img/galery/galery10.jpg`,
  `assets/img/galery/galery11.jpg`,
  `assets/img/galery/galery12.jpg`,
  `assets/img/galery/galery13.jpg`,
  `assets/img/galery/galery14.jpg`,
  `assets/img/galery/galery15.jpg`
]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

let x = shuffle(links)

x.forEach(el => {
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
