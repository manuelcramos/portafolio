
  const audio = document.getElementById('musicaFondo');
  const volumenControl = document.getElementById('volumen');
  const botonMusica = document.getElementById('botonMusica');

  volumenControl.addEventListener('input', () => {
    audio.volume = volumenControl.value;
  });

  botonMusica.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      botonMusica.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      botonMusica.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("titulo-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.titulo-scroll').forEach(titulo => {
      observer.observe(titulo);
    });
  });

  function abrirModalYoutube(url) {
    document.getElementById('youtubeFrame').src = url;
    document.getElementById('modalVideo').style.display = 'block';
  }

  function cerrarModal() {
    document.getElementById('modalVideo').style.display = 'none';
    document.getElementById('youtubeFrame').src = '';
  }

  // --- Efecto de nieve ---
const canvasNieve = document.getElementById('nieve');
if (canvasNieve) {
  const ctxNieve = canvasNieve.getContext('2d');
  let widthN = window.innerWidth;
  let heightN = window.innerHeight;
  canvasNieve.width = widthN;
  canvasNieve.height = heightN;

  class CopoNieve {
    constructor() {
      this.x = Math.random() * widthN;
      this.y = Math.random() * heightN;
      this.size = Math.random() * 2 + 2;
      this.speedY = Math.random() * 0.8 + 0.5;
      this.speedX = Math.random() * 0.7 + 0.5;
      this.opacity = Math.random() * 0.7 + 0.3;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y > heightN) {
        this.y = -this.size;
        this.x = Math.random() * widthN;
      }
      if (this.x > widthN) this.x = 0;
      if (this.x < 0) this.x = widthN;
    }
    draw() {
      ctxNieve.fillStyle = `rgba(255,255,255,${this.opacity})`;
      ctxNieve.beginPath();
      ctxNieve.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctxNieve.fill();
    }
  }

  let copos = [];
  for (let i = 0; i < 100; i++) {
    copos.push(new CopoNieve());
  }

  function animarNieve() {
    ctxNieve.clearRect(0, 0, widthN, heightN);
    copos.forEach(c => {
      c.update();
      c.draw();
    });
    requestAnimationFrame(animarNieve);
  }

  animarNieve();

  window.addEventListener('resize', () => {
    widthN = window.innerWidth;
    heightN = window.innerHeight;
    canvasNieve.width = widthN;
    canvasNieve.height = heightN;
  });
}
