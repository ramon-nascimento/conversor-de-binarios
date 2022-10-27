const html = document.querySelector("html");
const mudarTema = document.querySelector("#dark-mode");
const operacao = document.getElementById("select");
const botaoConversor = document.querySelector("button");
const campoInput = document.querySelector(".form-control");
const spanResultado = document.querySelector(".result");

const Conversor = {
  binarioParaDecimal(bin) {
    let binInverso = inverter(bin);
    let resultado = 0;
    let regEx = new RegExp("^[0-1]+$");

    if (!regEx.test(bin)) return "Valor não binário informado.";

    for (let i = 0; i < bin.length; i++)
      resultado += binInverso[i] * Math.pow(2, i);

    return resultado;
  },

  decimalParaBinario(dec) {
    if (dec == "") return "Valor para consulta não informado.";

    return (dec >>> 0).toString(2);
  },
};

const inverter = (valor) => {
  return valor.split("").reverse().join("");
};

botaoConversor.onclick = () => {
  let resultado = "";
  let resposta = "";

  if (operacao.value == "binarioParaDecimal") {
    resultado = Conversor.binarioParaDecimal(campoInput.value);
  } else if (operacao.value == "decimalParaBinario") {
    resultado = Conversor.decimalParaBinario(campoInput.value);
  } else {
    resultado = "Selecione uma operação!";
  }

  resposta = `Resultado: <strong>${resultado}</strong>`;

  spanResultado.innerHTML = resposta;
};

mudarTema.onchange = () => html.classList.toggle("white-theme");
