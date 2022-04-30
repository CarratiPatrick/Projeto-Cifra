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