const btnSave = document.querySelector("#form button[type=submit]");
const inputText = document.getElementById("texto");

const onBtnSaveOnClick = () => {
  console.log("Botão salvar clicado foi, Padawan");
  console.log(event.target);
  event.preventDefault();
  alert("Botão salvar clicado foi, Padawan");
//   btnSave.onclick = undefined;
};

const onInputTextKeyDown = (event) => {
  event.preventDefault();

  console.log("Botão clicado foi, Padawan");
  console.log(event.key + " foi pressionado");
  console.log(event.target);
};
btnSave.onclick = onBtnSaveOnClick;
inputText.onkeydown = onInputTextKeyDown;
