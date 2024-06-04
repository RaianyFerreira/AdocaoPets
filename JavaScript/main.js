/*CARROSSEL*/

const carrossel = document.querySelector(".carrossel .card");
const arrowBtns = document.querySelectorAll(".conteudo i");
const dots = document.querySelectorAll(".dot");
const totalCards = carrossel.children.length;
let currentIndex = 0;

const updateDots = () => {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
};


const moveCards = (direction) => {
    carrossel.style.transition = "opacity 0.5s";
    carrossel.style.opacity = "0";

    setTimeout(() => {
        if (direction === "left") {
            const firstChild = carrossel.firstElementChild;
            carrossel.appendChild(firstChild);
            currentIndex = (currentIndex + 1) % totalCards;
        } else {
            const lastChild = carrossel.lastElementChild;
            carrossel.prepend(lastChild);
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        carrossel.style.transition = "none";
        carrossel.style.opacity = "1";
        updateDots();
    }, 500);
};

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        moveCards(btn.id === "left" ? "right" : "left");
    });
});

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carrossel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carrossel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX);
    carrossel.scrollLeft = startScrollLeft - walk;
};

const dragStop = () => {
    isDragging = false;
    carrossel.classList.remove("dragging");
};

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("touchstart", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
document.addEventListener("touchend", dragStop);

updateDots();

const botaoAbreModal = document.querySelector("#abrirModal")
const botaoAbreModal2 = document.querySelector("#abrirModal2")
const botaoAbreModal3 = document.querySelector("#abrirModal3")
const botaoFechaModal = document.querySelector("#fecharModal")
const modal = document.querySelector("#modalDonate")
const fade = document.querySelector("#fadeDonate");


const situacaoModal = () => {
    [modal, fade, botaoFechaModal].forEach((elemento) => elemento.classList.toggle("hide"));
}

[botaoAbreModal, fade, botaoAbreModal2, botaoAbreModal3,botaoFechaModal].forEach(elemento => {
    elemento.addEventListener('click', () => console.log(situacaoModal()))
})

const botaoAbreModalAdopt = document.querySelector("#abrirModalAdopt")
const botaoAbreModalAdopt2 = document.querySelector("#abrirModalAdopt2")
const botaoAbreModalAdopt3 = document.querySelector("#abrirModalAdopt3")
const botaoAbreModalAdopt4 = document.querySelector("#abrirModalAdopt4")
const botaoFechaModalAdopt = document.querySelector("#fecharModalAdopt")
const modalAdopt = document.querySelector("#modalApplytoAdopt")
const fadeAdopt = document.querySelector("#fadeApplytoAdopt");
const pagSucessDonate = document.querySelector("#botaoDonateModal");
const pagSucessAdopt = document.querySelector("#botaoApplytoAdoptModal")

const situacaoModalAdopt = () => {
    [modalAdopt, fadeAdopt, botaoFechaModalAdopt].forEach((el) => el.classList.toggle("hide"));
}

pagSucessDonate.addEventListener('click', () => {
    sucess();
});

pagSucessAdopt.addEventListener('click', () => {
    sucess()
});

[botaoAbreModalAdopt, fadeAdopt, botaoAbreModalAdopt2, botaoAbreModalAdopt3, botaoAbreModalAdopt4, botaoFechaModalAdopt].forEach(el => {
    el.addEventListener('click', () => console.log(situacaoModalAdopt()))
});




function voltarPagInicial() {
    var botaoDeVoltar = '../HTML/index.html';
    window.location.href = botaoDeVoltar;
}
function adoptablePets() {
    var botaoDeAdoptablePets = '../HTML/adoptablePets.html';
    window.location.href = botaoDeAdoptablePets;
}
function sucess() {
    var botaoPagSucesso = '../HTML/sucess.html';
    window.location.href = botaoPagSucesso;
}




