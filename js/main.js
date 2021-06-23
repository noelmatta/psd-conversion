// const myJS = {

// }
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
filterProject = (e) => {
  const searchTerm = e.dataset.name;
  const projects = document.querySelectorAll('.project');
  const navListClass = e.parentNode.parentNode.parentNode.classList[0];
  const navList = document.querySelectorAll('.' + navListClass + ' ul li');
  const results = [];

  navList.forEach((listItem) => {
    listItem.classList.remove('active');
  })

  e.parentNode.classList.add('active');

  if (searchTerm !== 'all') {
    projectData.map((query) => {
      query.categories.map((subQuery) => {
        if (subQuery == searchTerm) {
          results.push(query.id);
        }
      })
    })
    projects.forEach((project) => {
      project.classList.remove('active');
    })
    results.map((result) => {
      document.querySelector('#' + result).classList.add('active');
    })
  } else {
    projects.forEach((project) => {
      project.classList.add('active');
    })
  }
}



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

// Event Listeners

document.querySelectorAll('.testimonial-container .arrow').forEach(direction => {
  direction.addEventListener('click', (e) => {
    prevNextSlide(e.target.classList[1], '.testimonial-content');
  })
})

document.querySelectorAll('.testimonial-thumbnail, .gallery-thumbnail').forEach(thumb => {
  thumb.addEventListener('click', (e) => {
    setActive(e.target.parentNode);
  })
})

document.querySelectorAll('.project-filters li').forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    filterProject(e.target);
  })
})

document.querySelectorAll('.accordion-toggle').forEach(accordion => {
  accordion.addEventListener('click', (e) => {
    toggleAccordion(e.target);
  })
})

// myJS.init();