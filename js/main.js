
// Functions
prevNextSlide = (selection, slideType) => {

  const slides = Array.from(document.querySelectorAll(slideType));

  const activeSlide = document.querySelector(`${slideType}.active`);
  let activeIndex = slides.indexOf(activeSlide);

  (selection === 'prev') ?
    (activeIndex == 0) ?
      activeIndex = slides.length - 1 : activeIndex-- :
    (activeIndex == slides.length - 1) ?
      activeIndex = 0 : activeIndex++;  

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeIndex].classList.add('active');
}

setActive = (selected) => {  

  const thumbClass = '.' + selected.classList[0];
  const thumbs = Array.from(document.querySelectorAll(thumbClass));
  
  const sliderType = '.' + document.querySelector(thumbClass).parentNode.id;
  const slides = Array.from(document.querySelectorAll(sliderType));
  const sliderID = '.' + selected.dataset.name;

  thumbs.forEach((thumb) => {
    thumb.classList.remove('active');
  });  
  
  selected.classList.add('active');

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  document.querySelector(sliderID+sliderType).classList.add('active');
  
}

