class Validaçoes {
    constructor(){
        this.validations = [

        ]
    }

    // iniciar a validação de todos os campos
    validate(form) {

        //  pegar os inputs
        let inputs = form.getElementsByTagName('input');
        
        //  HTMLCollection -> array
        let inputsArray = [...inputs];

        //  loop nos inputs e validações mediante os requerimentos
        inputsArray.forEach(function(input){
            console.log(input)
        }) 

    }
}

let form = document.querySelector('#register-form')
let createAccount = document.querySelector('#create-account')

let validator = new Validaçoes();

createAccount.addEventListener('click', function(e) {
    e.preventDefault() // necessário para não enviar para o servidor na teoria, porém ele só reseta a pagína sem o prevent default.

    validator.validate(form)
})