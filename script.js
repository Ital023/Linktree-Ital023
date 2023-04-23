var botoes = document.querySelectorAll(".botao");
var tema = document.querySelector(".modo-visual");
var principal = document.querySelector(".principal");
var imgTema = document.querySelector(".imagem__trocar--fundo");
var modoTema = document.querySelector("modo-visual");
var imagemBotoes = document.querySelectorAll(".imagem__botao");
var modoAtual = "claro";
var arrayLogo = [];
var j=0;
var modoIcones = "claro"; 

 botoes.forEach((botao)=>{
    botao.addEventListener("click",(evento)=>{
        var elemento = evento.target;
        console.log(elemento);
        var textoElemento = elemento.textContent;
        descobrirRede(textoElemento)
    })
})
var arrayElemento = [];
tema.addEventListener("click",()=>{
    principal.classList.toggle("principal--escuro");
    botoes.forEach(botao=>{
        botao.classList.toggle("botao--escuro");
    })
    trocarModo();

    imagemBotoes.forEach(imgBotao=>{
        console.log(imgBotao);
        var valorAlt = imgBotao.getAttribute("alt");
        valorAlt = valorAlt.replace(/\b logo\b/g,"");
        arrayLogo.push(valorAlt);
        arrayElemento.push(imgBotao);
    })
    //GitHub

     if(modoIcones ==="claro"){
        arrayElemento[0].src = "./imgEscuro/GitHub-Escuro.png";
        arrayElemento[1].src = "./imgEscuro/linkedin 1.png";
        arrayElemento[2].src = "./imgEscuro/square-instagram 1.png";
        arrayElemento[3].src = "./imgEscuro/square-twitter 1.png";
        modoIcones = "escuro";
    }else{
        arrayElemento[0].src = "./assets/img/square-github.svg";
        arrayElemento[1].src = "./assets/img/linkedin.svg";
        arrayElemento[2].src = "./assets/img/square-instagram.svg";
        arrayElemento[3].src = "./assets/img/square-twitter.svg";
        modoIcones = "claro";
    }  

})

function descobrirRede(texto){
    var i = 0;
    var redesSociais = ["GitHub","Linkedin","Instagram","Twitter"];
            if(texto == redesSociais[i]){
                window.location.href = "https://github.com/Ital023";
            }
            if(texto == redesSociais[i+1]){
                window.location.href = "https://www.linkedin.com/in/italomirandafont/";
            }
            if(texto == redesSociais[i+2]){
                window.location.href = "https://www.instagram.com/italo_m20/";
            }
            if(texto == redesSociais[i+3]){
                window.location.href = "https://twitter.com/italo_m20";
            }
}

function verificarModo() {
    if (modoAtual === "claro") {
      modoAtual = "escuro";
    } else {
      modoAtual = "claro";
    }
  }
  function trocarModo(){
    verificarModo();
    if(modoAtual === "claro"){
        imgTema.src = "./assets/img/lua.png"
        imgTema.classList.remove("nova-imagem--escura")
    }else{
        imgTema.src = "./assets/img/sun-solid.svg";
        imgTema.classList.add("nova-imagem--escura");
    }
  }