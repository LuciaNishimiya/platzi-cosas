const oneNumber = document.querySelector('#oneNumber');
const twoNumber = document.querySelector('#twoNumber');
const resultado = document.querySelector('#Resultado');
const tipoCalculo = document.querySelector('#TipoCalculo');
function calcularBtn() {resultado.innerHTML = eval(`${Number(twoNumber.value)} ${tipoCalculo.value} ${Number(oneNumber.value)}`)};