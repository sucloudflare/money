let saldo = 0;
const cupons = [];
let cupomIndex = 0; // Índice para controlar o cupom atual

// Função para gerar cupons aleatórios
function gerarCupons() {
    for (let i = 0; i < 10; i++) {
        const cupom = Math.random().toString(36).substring(2, 8).toUpperCase();
        cupons.push(cupom);
    }
}

// Exibir o próximo cupom na tela
function exibirCupomAtual() {
    if (cupomIndex < cupons.length) {
        document.getElementById("cupom-atual").textContent = cupons[cupomIndex];
    } else {
        document.getElementById("cupom-atual").textContent = "Todos os cupons foram usados!";
    }
}

// Verificar se o cupom digitado é válido
function verificarCupom() {
    const cupomInput = document.getElementById("cupom").value.toUpperCase();
    const mensagem = document.getElementById("mensagem");

    if (cupons[cupomIndex] === cupomInput) {
        saldo += 100; // Adiciona R$100 ao saldo
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo},00`;
        mensagem.textContent = `Cupom ${cupomInput} resgatado! +R$100,00`;

        // Avança para o próximo cupom
        cupomIndex++;
        exibirCupomAtual();
    } else {
        mensagem.textContent = "Cupom inválido ou já utilizado.";
    }

    // Limpa o campo de entrada
    document.getElementById("cupom").value = "";

    // Ativar botão de saque ao atingir R$1000
    if (saldo >= 1000) {
        document.getElementById("saque-btn").disabled = false; // Habilita o botão
        mensagem.textContent += " Parabéns! Você atingiu o saldo máximo de R$1000 e pode sacar!";
    }
}

// Função de saque
function sacar() {
    const mensagem = document.getElementById("mensagem");

    // Verifica se o saldo é suficiente
    if (saldo >= 1000) {
        saldo -= 1000; // Deduz o valor do saque
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo},00`;
        mensagem.textContent = "Saque de R$1000 realizado com sucesso!";

        // Redireciona após um pequeno atraso para permitir que a mensagem seja lida
        setTimeout(() => {
            window.location.assign('depositor.html');
            // Redireciona para a página de sucesso
        }, 2000); // Atraso de 2 segundos (2000 milissegundos)

        document.getElementById("saque-btn").disabled = true; // Desativa o botão após o saque
    } else {
        mensagem.textContent = "Saldo insuficiente para saque. Continue resgatando cupons!";
    }
}

// Inicializar cupons ao carregar a página
gerarCupons();
exibirCupomAtual();
