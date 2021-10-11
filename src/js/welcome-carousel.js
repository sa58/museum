function registerWelcomeCarousel() {
  let items = document.querySelectorAll('.carousel__item');
  let currentItem = 0;
  let isEnabled = true;

  let bullets = document.querySelectorAll('.carousel-item');
  let num = document.querySelector('.welcome__num');

  bullets.forEach(el => {
    el.addEventListener('click', (e) => {
      let needed = +e.target.dataset.slide;

      num.textContent = `0${needed + 1}`

      bullets[currentItem].classList.remove('carousel-item_active');
      bullets[needed].classList.add('carousel-item_active');

      if(e.target.dataset.slide >= currentItem) {
        nextItem(needed - 1)
      } else {
        previousItem(needed + 1)
      }
    })
  })

  function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
  }

  function hideItem(direction) {
    bullets[currentItem].classList.remove('carousel-item_active');

    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {

      this.classList.remove('active', direction);
    });
  }

  function showItem(direction) {

    bullets[currentItem].classList.add('carousel-item_active');
    num.textContent = `0${currentItem + 1}`

    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {

      items[currentItem].classList.remove('next', direction);
      items[currentItem].classList.add('active');
      isEnabled = true;
    });
  }

  function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
  }

  function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
  }

  document.querySelector('.arrow_left').addEventListener('click', function() {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

  document.querySelector('.arrow_right').addEventListener('click', function() {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });


  // TODO: from webinar

  const swipedetect = (el) => {
    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let elapsedTime = 0;
  
    let threshold = 150;
    let restraint = 100;
    let allowedTime = 500;
  
    surface.addEventListener('mousedown', function(e){
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    }, false);
  
    surface.addEventListener('mouseup', function(e){
      distX = e.pageX - startX;
      distY = e.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime){
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
          if ((distX > 0)) {
            if (isEnabled) {
              previousItem(currentItem);
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
          }
        }
      }
      e.preventDefault();
    }, false);
  
    surface.addEventListener('touchstart', function(e){
      if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
        if (e.target.classList.contains('left')) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
        var touchobj = e.changedTouches[0];
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    }, false);
  
    surface.addEventListener('touchmove', function(e){
        e.preventDefault();
    }, false);
  
    surface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX;
        distY = touchobj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime){
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                if ((distX > 0)) {
                  if (isEnabled) {
                    previousItem(currentItem);
                  }
                } else {
                  if (isEnabled) {
                    nextItem(currentItem);
                  }
                }
            }
        }
        e.preventDefault();
    }, false);
  }

  var el = document.querySelector('.welcome__carousel');
  swipedetect(el);
}

export {registerWelcomeCarousel}
