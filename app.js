const radio5 = document.querySelector("#amount5");
const radio5Label = document.querySelector(".amount5");
const radio10 = document.querySelector("#amount10");
const radio10Label = document.querySelector(".amount10");
const radio15 = document.querySelector("#amount15");
const radio15Label = document.querySelector(".amount15");
const radio25 = document.querySelector("#amount25");
const radio25Label = document.querySelector(".amount25");
const radio50 = document.querySelector("#amount50");
const radio50Label = document.querySelector(".amount50");
const radioCustom = document.querySelector("#amountCustom");
const radioCustomLabel = document.querySelector(".amountCustom");

const radio = [radio5, radio10, radio15, radio25, radio50, radioCustom];
const radioLabels = [radio5Label, radio10Label, radio15Label, radio25Label, radio50Label, radioCustomLabel];

const change = () => {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) radioLabels[i].classList.add("radioChecked");
    if (!radio[i].checked) radioLabels[i].classList.remove("radioChecked");
  }
};

const form = document.querySelector("form");

const billAmount = document.querySelector("#billAmount");
const noPeople = document.querySelector("#nop");

let total = document.querySelector("#total");
let tip = document.querySelector("#tipAmount");

const reset = document.querySelector("button");

const customNumber = document.querySelector("#amountCustomNumber");

const warning = document.querySelector("h3");

reset.addEventListener("click", () => {
  for (let i = 0; i < radio.length; i++) {
    radioLabels[i].classList.remove("radioChecked");
  }
  total.innerText = "$0.00";
  tip.innerText = "$0.00";
  warning.classList.add("warning");
});

const resetTotals = () => {
  if (!billAmount.value) {
    total.innerText = "$0.00";
    tip.innerText = "$0.00";
  }
};

const ifChecked = () => {
  for (const item of radio) if (item.checked) return item.value;
};

const totalSummary = () => {
  let summary = (parseFloat(billAmount.value) + parseFloat((billAmount.value * ifChecked()) / 100)) / noPeople.value;

  if (billAmount.value && ifChecked() && noPeople.value) total.innerText = summary.toFixed(2);
  resetTotals();
};

const tipSummary = () => {
  let tipSummary = parseFloat((billAmount.value * ifChecked()) / 100) / noPeople.value;

  if (billAmount.value && ifChecked() && noPeople.value) tip.innerText = tipSummary.toFixed(2);
  resetTotals();
};

customNumber.addEventListener("click", () => {
  radioCustom.checked = true;
  formFire();
});

const ifCheckedForReset = () => {
  for (const item of radio) if (item.checked) return true;
};

const formFire = (form.oninput = () => {
  if (radioCustom.checked) radioCustom.value = customNumber.value;
  if (noPeople.value === "0") warning.classList.remove("warning");
  else warning.classList.add("warning");

  totalSummary();

  tipSummary();

  change();
});
