//quero mudar entre seleção

var escolha = document.querySelector("#escolha");
var cesar = document.querySelector("#cifraCesar");
var base64 = document.querySelector("#cifraBase");

escolha.addEventListener("change", function () {
  if (escolha.value == 0) {
    cesar.style.display = "none";
    base64.style.display = "none";
  } else if (escolha.value == 1) {
    cesar.style.display = "flex";
    base64.style.display = "none";
  } else if (escolha.value == 2) {
    base64.style.display = "flex";
    cesar.style.display = "none";
  }
});

// escolher codificar ou decodificar 
var checkCesar = document.querySelectorAll(".check")
var checkBase = document.querySelectorAll(".check2")
var botaoCifra = document.querySelector("#cifra")
var botaoCifra2 = document.querySelector("#cifra2")

//cifra 64
var entrada64 = document.querySelector("#entrada2")
var saida2 = document.querySelector("#saida2")
var valorBase
entrada64.addEventListener("keyup", function () {
  valorBase = entrada64.value;
  if(checkBase[0].checked){
    saida2.value = btoa(valorBase);
  }else if (checkBase[1].checked){
    saida2.value = atob(valorBase)
  }
})


// cifra cesar
var entrada = document.querySelector("#entrada")
var saida = document.querySelector("#saida")
var chaveInc = document.querySelector("#chaveInc")
var valorChave;
entrada.addEventListener("keyup", function(){
  if(checkCesar[0].checked){
    var valorTexto = entrada.value.split("")
    valorChave = parseInt(chaveInc.value)
    saida.value = codifica(valorTexto, valorChave)
  }else{
    var valorTexto = entrada.value.split("")
    valorChave = parseInt(chaveInc.value)
    saida.value = decodifica(valorTexto, valorChave)
  }
})
function codifica(txt, chaveInc){
  return(
    txt
    .map((str)=>{
      var cripto = str.charCodeAt();
      if (cripto >= 65 && cripto<=90){
        return String.fromCharCode(((cripto - 65 + chaveInc)%26)+65);
      }else if(cripto >= 97 && cripto <=122){
        return String.fromCharCode(((cripto-97+chaveInc)%26)+97);
      }else{
        return str;
      }
    })
    .join("")
  )
  
  }
  function decodifica(txt , chaveInc) {
    return (
      txt
      .map((str)=>{
        var cripto = str.charCodeAt();
        if(cripto >= 65 && cripto<=90){
         return String.fromCharCode(cripto - 65 - chaveInc < 0)
         ?
         String.fromCharCode(((cripto - 65 - chaveInc + 26) % 26) + 65)
         : String.fromCharCode(((cripto - 65 - chaveInc) % 26) + 65);
        }else if (cripto >= 97 && cripto <= 122){
          return String.fromCharCode(cripto - 97 - chaveInc < 0)
            ? String.fromCharCode(((cripto - 97 - chaveInc + 26) % 26) + 97)
            : String.fromCharCode(((cripto - 97 - chaveInc) % 26) + 65);
        }
      })
      .join("")
    )
    
}
