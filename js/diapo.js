document.addEventListener('DOMContentLoaded', () => {
  let slideContainers = document.querySelectorAll('.evenement-diapo');

  slideContainers.forEach((container) => {
      let slides = container.getElementsByClassName('img-slide');
      let slideIndex = 1;

      // Appliquer le format (portrait/landscape) à chaque image
      Array.from(slides).forEach((slide) => {
          let img = slide.querySelector('img');
          img.onload = () => {
              if (img.naturalWidth > img.naturalHeight) {
                  img.classList.add('landscape');
              } else {
                  img.classList.add('portrait');
              }
          };
      });

      // Initialisation du diaporama
      showSlides(slideIndex, container, slides);

      container.querySelector('.prev')?.addEventListener('click', () => plusSlides(-1, container, slides));
      container.querySelector('.next')?.addEventListener('click', () => plusSlides(1, container, slides));

      function plusSlides(n, container, slides) {
          showSlides(slideIndex += n, container, slides);
      }

      function showSlides(n, container, slides) {
          if (n > slides.length) { slideIndex = 1; }
          if (n < 1) { slideIndex = slides.length; }

          for (let i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          slides[slideIndex - 1].style.display = "flex";
      }
  });
});
