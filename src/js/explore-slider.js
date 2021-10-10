function registerExploreSlider() {
  const slider = document.querySelector(".restore__example input");
  const img = document.querySelector(".before");
  const dragLine = document.querySelector(".slider-line");

  slider.oninput = ()=>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
  }
}

export {registerExploreSlider}
