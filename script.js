const caixa = document.querySelector("#caixa");
const btn = document.querySelector("#btn");
const mostrar = document.querySelector("#mostrar");

let verde = false;

// Botão muda para cor aleatória
btn.addEventListener("click", () => {

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    caixa.style.background = `rgb(${r},${g},${b})`;

});

// Mouse entra
caixa.addEventListener("mouseover", () => {

    caixa.style.width = "250px";
    caixa.style.height = "250px";
    caixa.style.border = "5px solid yellow";

});

// Mouse sai
caixa.addEventListener("mouseout", () => {

    caixa.style.width = "200px";
    caixa.style.height = "200px";
    caixa.style.border = "none";

});

// Clique na caixa
caixa.addEventListener("click", () => {

    if(verde){
        caixa.style.background = "blue";
        caixa.innerHTML = "Azul";
    }else{
        caixa.style.background = "green";
        caixa.innerHTML = "Verde";
    }

    verde = !verde;

});

// Esconder / Mostrar
mostrar.addEventListener("click", () => {

    if(caixa.style.display === "none"){
        caixa.style.display = "flex";
    }else{
        caixa.style.display = "none";
    }

});