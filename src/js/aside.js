function registerAside() {
  let burger = document.querySelector('.burger');
  let aside = document.querySelector('.aside');
  let asideitem = document.querySelector('.aside__name');

  let arr = ['.welcome__href', '.welcome__more', '.welcome__title'];

  let wallElements = arr.map(el => document.querySelector(el));

  const toogleWallAside = () => {
    wallElements.forEach(el => {
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
}

export { registerAside }
