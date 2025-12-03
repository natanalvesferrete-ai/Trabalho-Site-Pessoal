document.addEventListener('DOMContentLoaded', function() {
    const termos = document.getElementById('termos');
    const enviar = document.getElementById('enviar');
    if (termos && enviar) {
        // Habilita/Desabilita o botão Enviar com base no checkbox de Termos
        termos.addEventListener('change', function() { enviar.disabled = !this.checked; });
        
        // Simula o envio do formulário
        enviar.form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita o envio padrão (recarregamento)
            alert('Formulário enviado com sucesso!');
            enviar.form.reset();
            enviar.disabled = true; // Desabilita o botão após o reset
        });
    }
});

function toggleLightMode() {
    // Alterna a classe 'light-mode' no 'body'
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark'); // O tema padrão original é 'dark'
    } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Carrega o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    // Se o tema salvo for 'light', aplica a classe. Caso contrário, mantém o tema 'dark' (padrão do CSS).
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});


const botoesCurtir = document.querySelectorAll('.btn-curtir');

botoesCurtir.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('.contagem');
        let numeroAtual = parseInt(contador.innerText);
        
        if (botao.classList.contains('curtido')) {
            botao.classList.remove('curtido');
            numeroAtual--;
            botao.innerHTML = `Curtir <span class="contagem">${numeroAtual}</span>`;
        } else {
            botao.classList.add('curtido');
            numeroAtual++;
            botao.innerHTML = `Curtiu <span class="contagem">${numeroAtual}</span>`;
        }
    });
});