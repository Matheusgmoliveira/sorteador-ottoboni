document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form-sorteador');
    const btnLimpar = document.getElementById('btn-limpar');
    const main = document.querySelector('main');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Remove resultado anterior (se existir)
        const antigo = document.querySelector('.resultado');
        if (antigo) antigo.remove();

        // Sorteio
        const numero = Math.floor(Math.random() * 6) + 1;
        const mensagem =
            (numero === 2 || numero === 4)
                ? 'Que pena, tente novamente!'
                : 'Parabéns, retire seu brinde!';

        // Cria resultado do zero
        const resultado = document.createElement('div');
        resultado.className = 'resultado';

        const h3 = document.createElement('h3');
        h3.textContent = mensagem;

        resultado.appendChild(h3);
        main.appendChild(resultado);
    });

    btnLimpar.addEventListener('click', function () {
        const resultado = document.querySelector('.resultado');
        if (resultado) resultado.remove();
    });

});
