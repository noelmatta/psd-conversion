// Global variables
const testimonials = Array.from(document.querySelectorAll('.testimonial-content'));
const testHeadshots = Array.from(document.querySelectorAll('.headshot'));

// Functions
changeTestimonial = (direction) => {
  const activeTestimonial = document.querySelector('.testimonial-content.active');
  let activeIndex = testimonials.indexOf(activeTestimonial);

  (direction === 'prev') ?
    (activeIndex == 0) ?
      activeIndex = testimonials.length - 1 : activeIndex-- :
    (activeIndex == testimonials.length - 1) ?
      activeIndex = 0 : activeIndex++;  

  testimonials.forEach((testimonial) => {
    testimonial.classList.remove('active');
  });

  testimonials[activeIndex].classList.add('active');
}

