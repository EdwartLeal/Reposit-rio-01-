
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelectorAll('.list')
const git = document.querySelectorAll('.git')
const conactBtn = document.querySelectorAll('.btn-contatos')

let active = 0;
const total = items.length
let timer;




/*function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dots.active').classList.remove('active')


    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0

        }
    }
    else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1

        }

    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

}*/function update(direction) {
    // 1. Remove a classe dos elementos ativos antigos
    document.querySelector('.item.active').classList.remove('active');

    // CORREÇÃO AQUI: Mudado de .dots.active para .dot.active (ou .dots .active)
    document.querySelector('.dot.active').classList.remove('active');

    // 2. Calcula o próximo índice
    if (direction > 0) {
        active = active + 1;
        if (active === total) {
            active = 0;
        }
    } else if (direction < 0) {
        active = active - 1;
        if (active < 0) {
            active = total - 1;
        }
    }

    // 3. ADICIONA a classe active nos novos elementos (Faltava isso!)
    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.textContent = String(active + 1).padStart(2, '0')
}




setInterval(() => {
    update(1)

}, 20000);

prevButton.addEventListener('click', () => {

    update(-1)

})

nextButton.addEventListener('click', () => {
    update(1)

})

const contatosBtn = document.getElementById("contatosBtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

contatosBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});
