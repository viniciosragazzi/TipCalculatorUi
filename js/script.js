const inputBill = document.querySelector("#input-bill");
let valueBill;
inputBill.addEventListener("change", (e) => {
  valueBill = parseInt(inputBill.value);
  mostrarCalc(valuePercent, NPerson, valueBill);
});

const inputNPerson = document.querySelector("#nPerson");
let NPerson;
inputNPerson.addEventListener("change", (e) => {
  NPerson = parseInt(inputNPerson.value);
  mostrarCalc(valuePercent, NPerson, valueBill);
});

const percentsTips = document.querySelectorAll(".tip");
let valuePercent;
percentsTips.forEach((tip) =>
  tip.addEventListener("click", (event) => {
    valuePercent = parseInt(event.currentTarget.getAttribute("value"));
    mostrarCalc(valuePercent, NPerson, valueBill);
  })
);

const tipNumber = document.querySelector("#tip-number");
let tipNumberInput;
tipNumber.addEventListener("change", (e) => {
    tipNumberInput = parseInt(tipNumber.value);
    valuePercent = tipNumberInput
  mostrarCalc(valuePercent, NPerson, valueBill);
  console.log(tipNumberInput)
});


function mostrarCalc(valuePercent, NPerson, valueBill) {
  const valuePerson = document.querySelector("#value-person");
  const valueTotal = document.querySelector("#value-total");
  if (valuePercent === undefined) valuePercent = 0;
  if (NPerson === undefined) NPerson = 1;
  if (valueBill === undefined) valueBill = 0;
  let porcentagemValor = (valueBill * valuePercent) / 100;
  let tipsPorPessoa = porcentagemValor / NPerson;
  let valuePeerson = (valueBill + porcentagemValor) / NPerson;
  const reset = document.querySelector(".reset-result");
  reset.addEventListener("click", resetAll);
  function resetAll() {
    valuePeerson = 0;
    tipsPorPessoa = 0;
    porcentagemValor = 0;
    inputBill.value = 0;
    inputNPerson.value = 1;
    percentsTips.value = 0;
    valueTotal.innerHTML = valuePeerson.toFixed(2);
    valuePerson.innerHTML = tipsPorPessoa.toFixed(2);
  }

  valueTotal.innerHTML = valuePeerson.toFixed(2);
  valuePerson.innerHTML = tipsPorPessoa.toFixed(2);
}
