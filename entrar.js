// Capturar os elemntos
let inputNome = document.getElementById("regNome");
let inputEmail= document.getElementById("regEmail");
let inputSenha= document.getElementById("regSenha");
let inputConfirmacao= document.getElementById("regConf");
let formRegistrar= document.getElementById("form-registrar");

//
const urlBase = 'https://todolist-0622.herokuapp.com';

//criar a registrarUsuario
const registrarUsuario = async (dados) => {
    //enviar para o endereço de registro
}

//listeners
const onFormRegistrarSubmit = (evt) =>
{
    evt.preventDefault();
    let dados = {
        nome: inputNome.value,
        email: inputEmail.value,
        senha: inputSenha.value,
        confirmacao: inputConfirmacao.value,
        }

        registrarUsuario(dados)
}
//associando listeners
formRegistrar = addEventListener('submit', onFormRegistrarSubmit)