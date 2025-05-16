
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
