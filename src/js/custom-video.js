function registerCustomVideoPlayer() {
  const btnPlayBase = document.querySelector(".video__btn_big");
  const btnPlaySmall = document.querySelector(".video__btn_pause");
  const video = document.querySelector(".player");
  const btnFull = document.querySelector(".video__btn_full");
  const volume = document.querySelector(".video__volume");
  const progress = document.querySelector('.range');
  const frame = document.querySelector('.video__mock');
  const btnVolume = document.querySelector('.video__btn_volume');

  video.addEventListener('click', togglePlay);
  btnPlayBase.addEventListener('click', togglePlay);
  btnPlaySmall.addEventListener('click', togglePlay1);
  btnFull.addEventListener('click', setFullSize);
  volume.addEventListener('change', handleRangeUpdate)
  video.addEventListener('timeupdate', handleProgress);
  progress.addEventListener('click', scrub);

  let tempVolume = 0;

  function setDefaultVolume() {
    const val = volume.value * 100;
    volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${val}%, #c4c4c4 ${val}%, #c4c4c4 100%)`;

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

    console.log(volume, volume.value)

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
    btnPlaySmall.classList.toggle('video__btn_pausep');

    if(!video.paused) {
      video.pause();
      btnPlayBase.classList.toggle('btn_hidden');
    } else {
      btnPlayBase.classList.toggle('btn_hidden');
      video.play();
    }
  }

  function togglePlay(e) {
    btnPlayBase.classList.toggle('btn_hidden');
    btnPlaySmall.classList.toggle('video__btn_pausep');

    if(video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;

    if(percent === 100) {
      btnPlayBase.classList.toggle('btn_hidden');
      btnPlaySmall.classList.toggle('video__btn_pausep');
    } else {
      progress.value = percent;
      progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #c4c4c4 ${percent}%, #c4c4c4 100%)`
    }
  }

  setDefaultVolume();
}

export {registerCustomVideoPlayer}
