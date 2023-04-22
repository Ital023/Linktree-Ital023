var botoes = document.querySelectorAll(".botao");
var tema = document.querySelector(".modo-visual");
var principal = document.querySelector(".principal");
var imgTema = document.querySelector(".imagem__trocar--fundo");
var modoTema = document.querySelector("modo-visual");
var modoAtual = "claro";

 botoes.forEach((botao)=>{
    botao.addEventListener("click",(evento)=>{
        var elemento = evento.target;
        console.log(elemento);
        var textoElemento = elemento.textContent;
        descobrirRede(textoElemento)
    })
})

tema.addEventListener("click",()=>{
    principal.classList.toggle("principal--escuro");
    botoes.forEach(botao=>{
        botao.classList.toggle("botao--escuro");
    })
    trocarModo();

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