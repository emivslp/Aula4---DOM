var emailDoUsuario = "fulano@gmail.com";
var senhaDoUsuario = "ADM"; 

var botaoLogar = document.getElementById("logar");
botaoLogar.addEventListener('click', validar);

function validar(){
    var email = document.querySelector("#email").value
    // value é pra pegar o valor dentro do input, que a pessoa escreveu. O queryselector é um seletor inteligente do js.
    var senha = document.querySelector("#senha").value

    if(email === emailDoUsuario & senha === senhaDoUsuario){
        window.alert("Seja bem vindo");
        window.location.href("https://www.google.com")
    } else{
        window.alert("email ou senha incorretos. Insira as informações novamente")
    }
    // = atribiu == comparacao === exige o conteudo e a tipagem
}

var formulario1 = document.getElementById("formulario");
formulario1.addEventListener('focus', foco);

function foco (){
    formulario1.style.backgroundColor = "yellow"
}