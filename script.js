const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const imcForm = document.getElementById("imcForm");
const resultado = document.getElementById("resultado");

imcForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calcularIMC(peso.value, altura.value);
});


function calcularIMC(peso, altura) {
  const conta = peso / (altura * altura);
  let classificacao ="";
  if (conta < 18.5) {
    classificacao = "Está abaixo do peso";
  } else if (conta <= 24.9) {
    classificacao = "Está com o peso normal";
  } else if (conta <= 29.9) {
    classificacao = "Está com sobrepeso";
  } else if (conta <= 34.9) {
    classificacao = "Está com obesidade I";
  } else if (conta <= 39.9) {
    classificacao = "Está com obesidade II";
  } else{
    classificacao = "Está com obesidade III";
  };


   // Formatar o IMC com duas casas decimais
  const imcFormatado = conta.toFixed(2);
  alert(
     `Seu peso é ${peso}, sua altura é ${altura} e seu IMC é ${imcFormatado}, seu nível  ${classificacao}`
  );
  
}
