// Seleciona todos os botões de reação da página
const botoes = document.querySelectorAll("button");

// Percorre a lista de botões e adiciona o evento em cada um deles
botoes.forEach(function(botao) {
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        // Alterna a classe 'ativo' para mudar a cor do botão ao clicar
        botao.classList.toggle("ativo");
        
        // Encontra o span com o número dentro do botão clicado
        let texto = botao.querySelector("span");
        
        // Se o botão estiver ativo, soma 1. Se não, subtrai 1.
        if (botao.classList.contains("ativo")) {
            texto.textContent++;
        } else {
            texto.textContent--;
        }
    }
});
