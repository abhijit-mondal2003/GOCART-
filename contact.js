document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
  
    menuIcon.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  });

  //   background
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
  