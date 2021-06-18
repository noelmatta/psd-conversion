const projectData = [
  {
    id: 'project-1',
    categories: ['logo', 'business', 'branding']
  },
  {
    id: 'project-2',
    categories: ['business', 'photography']
  },
  {
    id: 'project-3',
    categories: ['logo', 'graphic', 'photography']
  },
  {
    id: 'project-4',
    categories: ['typography', 'branding', 'business']
  },
  {
    id: 'project-5',
    categories: ['graphic']
  },
  {
    id: 'project-6',
    categories: ['typography', 'logo', 'photography']
  }
]
// Functions
filterProject = (category) => {
  
  // const results = projectData.filter(query => {
  //   query.categories.forEach(nestedQuery => {
  //     nestedQuery.includes(category) ? ;
      
  //   })
    
  // })
  
}


// var check_orders = orders.filter(order => (order.name === "John Appleseed"));
// console.log(check_orders);

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

toggleAccordion = (e) => {
  const currentAccordion = '.' + e.parentNode.classList[0];
  const accordions = Array.from(document.querySelectorAll(currentAccordion));

  accordions.forEach((accordion) => {
    accordion.classList.remove('open');
    accordion.classList.add('closed');
  })
  e.parentNode.classList.remove('closed');
  e.parentNode.classList.add('open');
}