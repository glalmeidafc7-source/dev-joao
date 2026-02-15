const botao = document.getElementById("meuBotao");

let corEscura = true;

botao.addEventListener("click", function() {
  if (corEscura) {
    document.body.style.backgroundColor = "#1e293b";
    corEscura = false;
  } else {
    document.body.style.backgroundColor = "#0f172a";
    corEscura = true;
  }
});
