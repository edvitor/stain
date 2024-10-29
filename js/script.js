window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
      elements: '#portfolio a.portfolio-box'
  });

})


  $('.slider-nav').slick({
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></i></button>',
    // focusOnSelect: true,
    responsive: [
        {
            breakpoint: 993,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: true,
              centerPadding: '30px'
            }
          }
      ]
  });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipe: false,
    touchMove: false,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1401,
            settings: {
              slidesToShow: 2,
              dots: false,
              arrows: false,
            }
          },
        
        {
            breakpoint: 993,
            settings: {
              slidesToShow: 1,
              dots: false,
              arrows: false,
            }
          }
      ]
  });