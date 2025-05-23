document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault(); // impede o envio real
    const nome = document.getElementById("nome").value;
    alert(`Obrigada pela sua mensagem, ${nome}! 💌 Em breve entraremos em contato.`);
    this.reset(); // limpa o formulário
});


const alinharElements = document.querySelectorAll(".alinhar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visivel");
        }
    });
}, {
    threshold: 0.2
});

alinharElements.forEach(el => {
    observer.observe(el);
});

// Animação suave ao exibir o header de contato
window.addEventListener('scroll', () => {
    const header = document.querySelector('.contact-header');
    const top = header.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }
});