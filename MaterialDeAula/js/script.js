// documento, pega um elemento pra eu conseguir selecionar.S
// addEventListener = adicionar um espiaozinho pra ficar de olho nos movimentos do usuario dentro do site. nao precisa colocar dois parenteses pq esse addEventListener ja identifica as coisas como uma função, nao como uma variável.
var divTeste = document.getElementById("teste");
divTeste.addEventListener('click', alerta);
divTeste.addEventListener('mouseout', saiDiv);
divTeste.addEventListener('mouseenter', function(){
    divTeste.style.backgroundColor = "cadetblue"
    divTeste.innerHTML = "<b>Você entrou na div</b>"
// funcoes anonimas sao pra funcoes que só vao precisar realizar a funcao uma vez e nao precisam ficar gravadas
});
// o addEventListener está rodando em uma funcao alerta e essa funcao nós colocamos aqui:
function alerta() {
    window.alert("Você clicou na Div");
}
 

function saiDiv(){
    // indicar o style pq é configuração de css, tem que mostrar com os comandos pro software entender, pq ele nao identifica normalmente  
    divTeste.style.backgroundColor = "darkorange";
    // divTeste.innerText = "Você saiu da div";
    divTeste.innerHTML = "<b> um titulo bacana </b>";
}

