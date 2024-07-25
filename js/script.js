const PV = document.querySelector("#valor-desejado");
const i = document.querySelector("#taxa-juros");
const n = document.querySelector("#parcelas");
const btn = document.querySelector(".btn");
const btnContinuar = document.querySelector(".btn-continuar");

PV.addEventListener("input", () => {
  const valorEntrada = document.querySelector(".valor-entrada");
  valorEntrada.innerHTML = `${PV.value} <span class='mil'>mil<span>`;
  document.querySelector(".btn-continuar button").style.display = "block";
});

i.addEventListener("input", () => {
  const jurosEntrada = document.querySelector(".juros-entrada");
  jurosEntrada.innerHTML = `${i.value} <span class='mil'>%</span>`;
  if (n.value === 1) {
    document.querySelector(".btn button").style.display = "block";
  }
});

n.addEventListener("input", () => {
  const parcelaEntrada = document.querySelector(".parcela-entrada");
  parcelaEntrada.innerHTML = `${n.value} <span class='mil'>x</span>`;

  document.querySelector(".btn button").style.display = "block";
});

btnContinuar.addEventListener("click", () => {
  if (PV.value > 0) {
    document.querySelector(".taxa-juros").style.display = "block";
    document.querySelector(".parcelas").style.display = "block";
    document.querySelector(".entrada").style.display = "none";
    btnContinuar.style.display = "none";
    btn.style.display = "block";
    document.querySelector(".tittle").style.display = "none";
    document.querySelector(".taxa").style.display = "block";
    document.querySelector(".parcela").style.display = "block";

    document.querySelector(".taxa").style.margin = "40px 20px 20px 0px";
    document.querySelector(".parcela").style.margin = "40px 20px 20px 0px";
  }
});

btn.addEventListener("click", () => {
  document.querySelector(".entradas").style.display = "none";
  document.querySelector(".taxa").style.display = "none";
  document.querySelector(".container-color").style.display = "block";

  btn.style.display = "none";

  const valorInicial = +PV.value + "000";
  const taxaJuros = +i.value / 100;
  const numerosParcelas = +n.value;

  const valorParcela =
    (valorInicial * taxaJuros) /
    (1 - Math.pow(1 + taxaJuros, -numerosParcelas));

  const valorTotal = valorParcela * numerosParcelas;
  const jurosTotal = valorTotal - valorInicial;

  const spanTotal = document.querySelector(".valor-total");
  spanTotal.innerText = valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const spanParcela = document.querySelector(".pagamento-mensal");
  spanParcela.innerText = valorParcela.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const spanJuros = document.querySelector(".total-juros");
  spanJuros.innerText = jurosTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});
