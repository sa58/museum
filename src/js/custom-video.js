 // https://stackoverflow.com/questions/15164942/stop-embedded-youtube-iframe/30358006

function registerCustomVideoPlayer() {
  const btnPlayBase = document.querySelector(".video__btn_big");
  const btnPlaySmall = document.querySelector(".video__btn_pause");
  const video = document.querySelector(".player");
  const btnFull = document.querySelector(".video__btn_full");
  const volume = document.querySelector(".video__volume");
  const progress = document.querySelector('.range');
  const frame = document.querySelector('.video__mock');
  const btnVolume = document.querySelector('.video__btn_volume');

  const speed = document.querySelector('.video__speed');

  const iframes = document.querySelectorAll('.swiper-wrapper iframe');
  // iframes.forEach(el => {
  //   console.log(el)
  //   el.document.addEventListener('click', (e) => {
  //     console.log(e.target.dataset.item)
  //   })
  // })
  // document.querySelectorAll('iframe').forEach(function(el) {
  //   el.contentWindow.postMessage(
  //     '{"event":"command","func":"pauseVideo","args":""}',
  //     '*')
  // });



  

  video.addEventListener('click', togglePlayVideo);
  btnPlayBase.addEventListener('click', togglePlayVideo);
  btnPlaySmall.addEventListener('click', togglePlay1);
  btnFull.addEventListener('click', setFullSize);
  volume.addEventListener('change', handleRangeUpdate)
  video.addEventListener('timeupdate', handleProgress);
  progress.addEventListener('click', scrub);

  let tempVolume = 0;
  let poster = video.poster;


  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(e.code === 'Space') {
      togglePlayVideo();
    }

    if(e.code === 'KeyM') {
      // TODO
      if(btnVolume.classList.contains('video__btn_mute')) {
        btnVolume.classList.toggle('video__btn_mute');
        video.volume = tempVolume;

        const val = tempVolume * 100;

        volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${val}%, #c4c4c4 ${val}%, #c4c4c4 100%)`;
        volume.value = tempVolume;
      } else {
        btnVolume.classList.toggle('video__btn_mute');
        tempVolume = video.volume;

        video.volume = 0;
        volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #c4c4c4 ${0}%, #c4c4c4 100%)`;
        volume.value = 0;
      }
    }

    if(e.code === 'KeyF') {
      setFullSize();
    }

    if(e.code === 'Comma') {
      if (e.shiftKey) speedUp();
    }

    if(e.code === 'Period') {
      if (e.shiftKey) speedDown();
    }

  });

  function speedUp() {
    video.playbackRate += 0.25;
    if(video.playbackRate >= 2) {
      video.playbackRate = 2
    }

    showSpeed(video.playbackRate);
  }

  function speedDown() {
    video.playbackRate -= 0.25;

    console.log(video.playbackRate)
    if(video.playbackRate <= 0.25) {
      video.playbackRate = 0.25
    }

    showSpeed(video.playbackRate);
  }

  function showSpeed(playbackRate) {
    speed.textContent = playbackRate;
    speed.style.visibility = 'visible';

    setTimeout(() => {
      speed.style.visibility = 'hidden';
    }, 1500)
  }

  function setDefaultVolume() {
    const val = volume.value * 100;
    volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${val}%, #c4c4c4 ${val}%, #c4c4c4 100%)`;

    video.volume = volume.value;
  }

  progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
  })

  btnVolume.addEventListener('click', function() {
    if(this.classList.contains('video__btn_mute')) {
      this.classList.toggle('video__btn_mute');
      video.volume = tempVolume;

      const val = tempVolume * 100;

      volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${val}%, #c4c4c4 ${val}%, #c4c4c4 100%)`;
      volume.value = tempVolume;


    } else {
      this.classList.toggle('video__btn_mute');
      tempVolume = video.volume;

      video.volume = 0;

      
      volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #c4c4c4 ${0}%, #c4c4c4 100%)`;
      volume.value = 0
    }

  })

  volume.addEventListener('input', function() {
    const value = this.value * 100;

    if(value === 0) {
      btnVolume.classList.add('video__btn_mute');
    } else {
      btnVolume.classList.remove('video__btn_mute');
    }

    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
  })

  function handleRangeUpdate(e) {
    video.volume = this.value;
  }

  function setFullSize() {
    if(document.fullscreenElement !== frame) {
      if(frame.requestFullscreen) {
        frame.requestFullscreen();
      } else {
        frame.webkitRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }

  function togglePlay1(e) {
    e.stopPropagation();
    console.log(video.paused)

    if(video.paused) {
      btnPlayBase.classList.add('btn_hidden');
      btnPlaySmall.classList.add('video__btn_pausep');

      video.play();

    } else {

      btnPlayBase.classList.remove('btn_hidden');
      btnPlaySmall.classList.remove('video__btn_pausep');

      video.pause();
    }
  }

  function togglePlayVideo(e) {
    if(e) {
      e.stopPropagation();
    }
    
    if(video.paused) {
      btnPlayBase.classList.add('btn_hidden');
      btnPlaySmall.classList.add('video__btn_pausep');

      video.play();
    } else {
      btnPlayBase.classList.remove('btn_hidden');
      btnPlaySmall.classList.remove('video__btn_pausep');

      video.pause();
    }
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function handleProgress() {
    if(video.currentTime === 0) {
      if(video.poster !== poster) {
        poster = video.poster;
        btnPlayBase.classList.remove('btn_hidden');
        btnPlaySmall.classList.remove('video__btn_pausep');
      }

      video.currentTime = 0;
      progress.value = 0;
      progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #c4c4c4 ${0}%, #c4c4c4 100%)`

    } else {
      const percent = (video.currentTime / video.duration) * 100;

      if(percent === 100) {
        console.log(btnPlayBase.classList)
        btnPlayBase.classList.remove('btn_hidden');
        btnPlaySmall.classList.remove('video__btn_pausep');
      } else {
        progress.value = percent;
        progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #c4c4c4 ${percent}%, #c4c4c4 100%)`
      }
    }
  }

  setDefaultVolume();
}

export {registerCustomVideoPlayer}
