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
    img.classList.add('item')
    img.src = el;
    img.alt = `galery1`;
    pictureInnerContainer.append(img);
  })
}

export { registerGallery }
