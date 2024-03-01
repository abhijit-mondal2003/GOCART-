
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '1';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 700); 
  });
  const preloader = document.getElementById('preloader');
  preloader.style.animation = 'changeColor 500ms infinite alternate'; // Adjust the duration as needed
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
});

// explore now
document.querySelector('.explore-btn').addEventListener('click', function() {
   window.location.href = 'front.html';
  alert('Redirecting to  Product Section Page...');
});
// learn more
document.querySelector('.learn-more-btn').addEventListener('click', function() {
  window.location.href = 'about.html';
 alert('Redirecting to  about us Section Page...');
});
// starfield
// document.addEventListener('DOMContentLoaded', function() {
// const starfield = document.querySelector('.starfield');

// for (let i = 0; i < 100; i++) {
//   const star = document.createElement('div');
//   star.className = 'star';
//   star.style.left = `${Math.random() * 100}%`;
//   star.style.top = `${Math.random() * 100}%`;
//   star.style.animationDelay = `${Math.random() * 5}s`;
//   star.style.animationDuration = `${Math.random() * 2 + 1}s`;
//   starfield.appendChild(star);
// }
// });
document.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 100;
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = Math.random() * 2 - 1;
      this.vy = Math.random() * 2 - 1;
      this.radius = Math.random() * 2;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.x < 0 || this.x > canvas.width) {
        this.vx *= -1;
      }
  
      if (this.y < 0 || this.y > canvas.height) {
        this.vy *= -1;
      }
    }
  
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fill();
    }
  }
  
  function init() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
  }
  
  init();
  animate();
  });
  


// new style
document.addEventListener('DOMContentLoaded', function() {
  // Sample futuristic card data
  const futuristicCardsData = [
    { image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/q/j/-original-imagybz8gbfsaevs.jpeg?q=70&crop=false', description: 'OPPO F25 Pro 5G (Lava Red, 128 GB)  (8 GB RAM)' },
    { image: 'https://m.media-amazon.com/images/I/61NDPRXm9XL._AC_UL640_FMwebp_QL65_.jpg', description: 'boAt Nirvana Ion TWS Earbuds with 120 HRS Playback(24hrs/Charge), Crystal Bionic Sound with Dual EQ Modes, Quad Mics ENx™ Technology, Low Latency(60ms), in Ear Detection(Charcoal Black)' },
    { image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/x/m/v/-original-imagnydghgvy9huf.jpeg?q=70&crop=false', description: 'Nothing Ear (2) with Dual chamber sound, Hi-res audio, Smart ANC and Dual connection Bluetooth Headset  (White, True Wireless)' },
  ];

  // Reference to the futuristic cards container
  const futuristicCardsContainer = document.querySelector('.futuristic-cards');

  // Dynamically populate futuristic cards
  futuristicCardsData.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('futuristic-card');
    
    card.innerHTML = `
    <div class="futuristic-card-inner">
      <div class="futuristic-card-face futuristic-card-front">
        <img class="futuristic-card-image" src="${cardData.image}" alt="Futuristic Image">
      </div>
      <div class="futuristic-card-face futuristic-card-back">
        <p class="futuristic-card-description">${cardData.description}</p>
      </div>
    </div>
  `;

    futuristicCardsContainer.appendChild(card);
    card.addEventListener('mouseenter', function () {
      toggleCard(card);
    });

    card.addEventListener('mouseleave', function () {
      toggleCard(card);
    });
  });
  function toggleCard(card) {
    const cardInner = card.querySelector('.futuristic-card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
  }

  setInterval(function () {
    const cards = document.querySelectorAll('.futuristic-card');
    cards.forEach((card, index) => {
      setTimeout(() => toggleCard(card), index * 500); // Delay the flip for a staggered effect
    });
  }, 5000);
});







document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    
    var aboutSection = document.querySelector('.about-section');
  
    // Add 'active' class to trigger fade-in animation on scroll
    window.addEventListener('scroll', function() {
      var position = aboutSection.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
  
      if (position < screenHeight * 0.75) {
        aboutSection.classList.add('active');
      }
    });
  });
  

  // faq--------
  document.addEventListener('DOMContentLoaded', function() {
    var faqContent = document.querySelector('.faq-content');
  
    // Add click event listener to each question
    faqContent.addEventListener('click', function(event) {
      var faqItem = event.target.closest('.faq-item');
      
      if (faqItem) {
        // Close all other answers
        document.querySelectorAll('.faq-item').forEach(function(item) {
          if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
          }
        });
  
        // Toggle the 'active' class to show/hide the answer
        faqItem.classList.toggle('active');
  
        // Smooth scroll to the clicked question
        var scrollToOptions = {
          top: faqItem.offsetTop - faqContent.offsetTop,
          behavior: 'smooth'
        };
        faqContent.scrollTo(scrollToOptions);
      }
    });
  });

  // contact us
document.addEventListener('DOMContentLoaded', function () {
  var contactSection = document.querySelector('.contact-section');
  var contactForm = document.getElementById('contact-form');

  // Smooth scroll to the contact section on page load
  // window.onload = function() {
  //   var scrollToOptions = {
  //     top: contactSection.offsetTop,
  //     behavior: 'smooth'
  //   };
  //   window.scrollTo(scrollToOptions);
  // };

  // Form Submission (Add your backend logic here)
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., AJAX request)
    alert('Message sent successfully!');
  });
});


  // footer
  document.addEventListener('DOMContentLoaded', function() {
    var subscribeForm = document.getElementById('subscribe-form');
  
    // Subscribe Form Submission (Add your backend logic here)
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your form submission logic here (e.g., AJAX request)
      alert('Subscribed successfully!');
    });
  });
