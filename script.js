function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

var number1 = getRandomIntInclusive(0,10) 
var number2 = getRandomIntInclusive(0,10)

function gerar(){
    
    var pergunta = window.document.getElementById("ask")
    pergunta.innerHTML = (`Quanto é ${number1} + ${number2} ?`)
    
}

    
    

function check(){
    var res = document.getElementById("resposta")
    var anwser = Number(res.value)
    var msg = document.getElementById("return")
    var conta = number1+number2
    if(anwser == conta){
        msg.innerHTML="Você acertou a resposta. Parabéns"
    }
    else{
        msg.innerHTML = `Você errou a resposta. Esta conta dá igual a ${conta}!!!`
    }
    // switch(res = conta){
    //     case true:
    //         msg.innerHTML="Você acertou a resposta. Parabéns"
    //         break;
    //     case false:  
    //     msg.innerHTML=`Você errou a resposta. Esta conta dá igual a ${conta}!!!`
    //         break;
    // }
    
}

// var final = check();

// if(final == true){
//     msg.innerHTML="Você acertou a resposta. Parabéns"
// } else{
//     msg.innerHTML=`Você errou a resposta. Esta conta dá igual a ${conta}!!!`
// }

function again(){
    window.location.reload();
}
