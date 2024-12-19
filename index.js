const inputText = document.querySelectorAll('input')

inputText.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== "") {
            input.classList.add('form','borda-verde');
        } else {
            input.classList.remove('form','borda-verde');
        }
    })
})


const formulario = document.querySelector('.form')
const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')

formulario.addEventListener('submit', event => {
    event.preventDefault();

    let formularioValido = true;

    camposObrigatorios.forEach((campo) => {
        const mensagemErro = campo.nextElementSibling;
        if(campo.value === "") {
            campo.classList.add('borda-vermelha');
            mensagemErro.textContent = 'campo obrigatório';
            formularioValido = false;
        } else {
            campo.classList.remove('borda-vermelha');
            mensagemErro.textContent = "";
        }

    })
})