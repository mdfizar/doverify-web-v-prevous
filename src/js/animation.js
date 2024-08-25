// scrollanimation fade up 
function scrollAnimation(func, wait) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function handleScroll() {
  const fadeUp = document.querySelectorAll('.animation');

  fadeUp.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the element is inside the viewport
      if (
          elementPosition.top < viewportHeight
      ) {
          element.classList.add('inview');
      }
  });
}
window.addEventListener('scroll', scrollAnimation(handleScroll));
window.addEventListener('load', handleScroll);

// scrollAnimation fade left 
function scrollAnimationLeft(func, wait) {
  let timeout;
  return function(...args) {
    timeout = setTimeout(() =>func.apply(this, args), wait);
  };
}
 function handleScrollLeft() {
  const fadeLeft = document.querySelectorAll(".fade-left");

  fadeLeft.forEach(element => {
    const elementPosition = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // check if the element inside the viewport 
    if(elementPosition.top < viewportHeight) {
        element.classList.add("fade-left-view")
    }

  });
 }
 window.addEventListener('scroll',scrollAnimationLeft(handleScrollLeft));
 window.addEventListener('load', handleScrollLeft);

 // scrollAnimation fade right 
function scrollAnimationRight(func, wait) {
  let timeout;
  return function(...args) {
    timeout = setTimeout(() =>func.apply(this, args), wait);
  };
}
 function handleScrollRight() {
  const fadeLeft = document.querySelectorAll(".fade-right");

  fadeLeft.forEach(element => {
    const elementPosition = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // check if the element inside the viewport 
    if(elementPosition.top < viewportHeight) {
        element.classList.add("fade-right-view")
    }

  });
 }
 window.addEventListener('scroll',scrollAnimationRight(handleScrollRight));
 window.addEventListener('load', handleScrollRight);

// fadezoom animation  
function scrollAnimationZoom(func, wait) {
  let timeout;
  return function(...args) {
    timeout = setTimeout(() =>func.apply(this, args), wait);
  };
}
 function handleZoom() {
  const fadeZoom = document.querySelectorAll(".fade-zoom");

  fadeZoom.forEach(element => {
    const elementPosition = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    if (elementPosition.top < viewportHeight) {
        var icon = element.querySelector("i");
        icon.classList.add("fade-zoom-view");
    }
  });
 }
 window.addEventListener('scroll',scrollAnimationZoom(handleZoom));
 window.addEventListener('load', handleZoom);

