function limpar(){
    document.getElementById('resultado').innerHTML = ""
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function valores(num){
  var numero =  document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        } else{
            document.getElementById('resultado').innerHTML = "Nada para calcular"
        }
}