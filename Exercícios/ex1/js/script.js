var input = document.querySelector("#inputDaPagina");
// se eu quero selecionar um evento no input, a primeira coisa que ue tenho que ter é o input
input.addEventListener('focus' , focoInput);
// comando para ver as opcoes disponiveis: control+espaço
input.addEventListener('focusout' , perdeFocoInput);
function focoInput(){
    input.style.backgroundColor = "gold"
    // input, quando voce receber a funçao (foco, que ja esta definida), voce vai mexer no slyle-background
}
function perdeFocoInput(){
    // window.alert("funfo") - apenas para conferir se esta funcionando
    input.value;
    if(input.value.length < 3){
        // primeiro vai no input, verifica o valor (value) desse input e dps conta quantos caracteres tem (length) no input
        input.style.backgroundColor = "chocolate"
    } 
    else{
        input.style.backgroundColor = "teal"
    }
}
//  etapas:
//  verificar o que tem dentro do input
//  definir o que vai acontecer de acordo com as condições
//  modificar a cor do fundo.
//  toda vez que perder o foco, ve o que ta escrito e verifica pra mim.

