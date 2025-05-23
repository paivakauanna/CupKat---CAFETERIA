//Mandar os botões para 
function scrollToCategory(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth", // rolagem suave
      block: "start"      // alinha o topo da seção ao topo da janela
    });
  }
}

document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('[data-carousel-track]');
    const btnPrev = carousel.querySelector('[data-carousel-btn="prev"]');
    const btnNext = carousel.querySelector('[data-carousel-btn="next"]');
    
    let currentIndex = 0;

    const updateCarousel = () => {
      const slideWidth = track.querySelector('img').clientWidth;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    btnNext.addEventListener('click', () => {
      if (currentIndex < track.children.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    // Atualiza ao redimensionar janela
    window.addEventListener('resize', updateCarousel);
  });