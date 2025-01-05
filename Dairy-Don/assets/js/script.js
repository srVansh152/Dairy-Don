//tailwind css 
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'], // Add Baloo font family
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '375px', // Define custom xs breakpoint
      },
      colors: {
        primary: '#b1099e', // Magenta color from image
        secondery: '#664c63',
        pink: {
          50: '#fef2f8',
          100: '#fde8f3',
          600: '#ec4899',
          800: '#9d174d',
        }
      }
    },
  },
};


// header 
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

// //slider of home page
let swiper1;

function initSwiper() {
  swiper1 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' inline-block rounded-full w-2.5 h-2.5 bg-[#b1099e] mr-2"></span>';
      }
    }
  });
}

function destroySwiper() {
  if (swiper1) {
    swiper1.destroy(true, true);
    swiper1 = null;
  }
}

function handleScreenSize() {
  if (window.innerWidth < 1024) {
    if (!swiper1) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  handleScreenSize(); // Initialize on load

  window.addEventListener('resize', handleScreenSize);
});

// Initialize Swiper for Section 4
const section4Swiper = new Swiper('#swiperSection4', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1, // Single active slide
  spaceBetween: 30, // Space between the slides
  effect: "slide", // Use slide effect for no rotation
  slideShadows: false, // Disable slide shadows
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' inline-block rounded-full w-2.5 h-2.5 bg-[#b1099e] mr-2"></span>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3, // Show 3 slides for larger screens
      centeredSlides: true,
    },
  },
  on: {
    slideChange: function () {
      // Reset opacity for all slides
      this.slides.forEach(slide => {
        slide.style.opacity = '0.3'; // Default opacity for background slides
      });
      // Set opacity of the active slide
      const activeSlide = this.slides[this.activeIndex];
      activeSlide.style.opacity = '1'; // Active slide is fully visible
    },
  },
});
