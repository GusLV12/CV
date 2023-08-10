const lazyImages = document.querySelectorAll('.lazy');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
}, options);

lazyImages.forEach(image => {
  observer.observe(image);
});

document.addEventListener('DOMContentLoaded', () => {
    const img = new Image();
    img.src = 'ruta-de-la-imagen.jpg';
    img.alt = 'Descripción de la imagen';
    document.querySelector('.contenedor-de-imagen').appendChild(img);
  });
  