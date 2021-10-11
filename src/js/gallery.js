function registerGallery() {
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
    img.classList.add('item');

    img.classList.add('item_indented');
    img.src = el;
    img.alt = `galery1`;
    pictureInnerContainer.append(img);
  })



  // function debounce(func, wait = 20, immediate = true) {
  //   var timeout;
  //   return function() {
  //     var context = this, args = arguments;
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  // const sliderImages = document.querySelectorAll('.item_indented');

  // function checkSlide() {
  //   sliderImages.forEach(sliderImage => {
  //     console.log(sliderImage)

  //     // half way through the image
  //     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
  //     // bottom of the image
  //     const imageBottom = sliderImage.offsetTop + sliderImage.height;
  //     const isHalfShown = slideInAt > sliderImage.offsetTop;
  //     const isNotScrolledPast = window.scrollY < imageBottom;
  //     if (isNotScrolledPast) {
  //       sliderImage.classList.add('active');
  //     } else {
  //       sliderImage.classList.remove('active');
  //     }
  //   });
  // }

  // window.addEventListener('scroll', debounce(checkSlide));


}

export { registerGallery }
