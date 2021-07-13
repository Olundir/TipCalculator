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

// check if any checked, if yes return the index
const ifCheckedElsewhere = () => {
  for (const item of radio) {
    if (item.checked) return false;
  }
  return false;
};

// if checked compare index ?
for (const item of radioLabels) {
  item.addEventListener("click", () => {
    if (!ifCheckedElsewhere) {
      item.classList.add("radioChecked");
      console.log("clicked");
    }
  });
}
