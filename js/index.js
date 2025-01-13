const inputText = document.querySelectorAll('.campo-obrigatorio')
const formulario = document.querySelector('.form')
const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')

inputText.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== "") {
            input.classList.add('borda-verde');
        } else {
            input.classList.remove('borda-verde');
        }
    })
})

formulario.addEventListener('submit', event => {
    event.preventDefault();

    camposObrigatorios.forEach((campo) => {
        const mensagemErro = campo.nextElementSibling;
        if(campo.value === "") {
            campo.classList.add('borda-vermelha');
            mensagemErro.textContent = 'campo obrigatório';
        } else {
            campo.classList.remove('borda-vermelha');
            mensagemErro.textContent = "";
        }

    })
})