var setaDireita = window.document.getElementById("setaD");
var setaEsquerda = window.document.getElementById("setaE");
var leonardoCard = window.document.getElementById("leonardo");
var samantaCard = window.document.getElementById("samanta");
var brunaCard = window.document.getElementById("bruna");

const rolarParaEsquerda = () => {
    leonardoCard.style = "display:none";
    brunaCard.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex; margin-top:90px";
}

const rolarParaDireita = () => {
    brunaCard.style = "display:none"
    leonardoCard.style = "display:flex"
    setaDireita.style = "display:flex";
    setaEsquerda.style = "display:none";
}