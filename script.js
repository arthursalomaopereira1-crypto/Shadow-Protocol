// ===== Shadow Protocol =====

// Cabeçalho muda de cor ao rolar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(2,6,23,.98)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "none";
    }
});

// Animação ao aparecer na tela

const elementos = document.querySelectorAll(
    ".card, .about-content, .gallery img, .numbers div, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = ".8s";

    observer.observe(elemento);

});

// Rolagem suave dos links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const destino = document.querySelector(id);

        if(destino){

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Ano automático no rodapé (opcional)

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

console.log("Shadow Protocol carregado com sucesso!");