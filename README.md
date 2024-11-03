<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>README - Cupons de Recompensa</title>
</head>
<body>
<h1>Cupons de Recompensa</h1>
<p>Este é um projeto simples de resgate de cupons de recompensa, onde o usuário pode inserir códigos de cupons para acumular saldo. Quando o saldo atinge um valor de R$1000, o usuário pode realizar um saque.</p>

<h2>Funcionalidades</h2>
<ul>
<li><strong>Gerar Cupons:</strong> O sistema gera cupons aleatórios ao carregar a página.</li>
<li><strong>Resgate de Cupons:</strong> O usuário insere o código do cupom e, se for válido, R$100 é adicionado ao saldo.</li>
<li><strong>Controle de Saldo:</strong> O saldo é atualizado na interface, e o botão de saque é habilitado quando o saldo atinge R$1000.</li>
<li><strong>Saque:</strong> Ao atingir o saldo de R$1000, o usuário pode realizar um saque que redireciona para uma página de confirmação de depósito.</li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<ul>
<li>HTML5 para a estrutura da página</li>
<li>CSS3 para o estilo (em <em>styles.css</em>)</li>
<li>JavaScript para a lógica de cupons, saldo e saque (em <em>script.js</em>)</li>
</ul>

<h2>Estrutura do Projeto</h2>
<ul>
<li><em>index.html</em>: Página principal com a interface de resgate de cupons.</li>
<li><em>styles.css</em>: Arquivo de estilo para estilização da interface.</li>
<li><em>script.js</em>: Lógica para geração e resgate de cupons, controle de saldo e saque.</li>
</ul>

<h2>Como Usar</h2>
<ol>
<li>Abra o <em>index.html</em> em um navegador.</li>
<li>Digite o código do cupom exibido no campo de entrada e clique em "Resgatar".</li>
<li>Cada cupom resgatado corretamente adiciona R$100 ao saldo.</li>
<li>Quando o saldo atingir R$1000, o botão de saque será habilitado.</li>
<li>Clique em "Sacar R$1000" para realizar o saque e ser redirecionado para a página de confirmação.</li>
</ol>

<h2>Funcionalidades do Código JavaScript</h2>
<h3>Geração de Cupons</h3>
<p>O código gera automaticamente 10 cupons aleatórios ao carregar a página, que são armazenados em um array <code>cupons</code>.</p>
<pre>
<code>function gerarCupons() {
for (let i = 0; i < 10; i++) {
const cupom = Math.random().toString(36).substring(2, 8).toUpperCase();
cupons.push(cupom);
}
}</code>
</pre>

<h3>Verificação do Cupom</h3>
<p>Ao clicar em "Resgatar", a função <code>verificarCupom()</code> verifica se o cupom inserido corresponde ao cupom atual. Se for válido, o saldo é atualizado.</p>
<pre>
<code>function verificarCupom() {
const cupomInput = document.getElementById("cupom").value.toUpperCase();
if (cupons[cupomIndex] === cupomInput) {
saldo += 100;
cupomIndex++;
}
}</code>
</pre>

<h3>Saque</h3>
<p>Ao atingir um saldo de R$1000, o usuário pode clicar em "Sacar R$1000". A função <code>sacar()</code> desconta R$1000 do saldo e redireciona o usuário para a página de confirmação de depósito (<em>depositor.html</em>).</p>
<pre>
<code>function sacar() {
if (saldo >= 1000) {
saldo -= 1000;
window.location.assign('depositor.html');
}
}</code>
</pre>

<h2>Observações</h2>
<ul>
<li>Este projeto é um exemplo de funcionalidade básica de cupons e saldo, sem armazenamento persistente. Os cupons e o saldo são armazenados apenas na memória.</li>
<li>A lógica pode ser estendida para incluir uma API ou backend que armazene informações dos usuários e dos cupons de forma mais robusta.</li>
</ul>
</body>
</html>
