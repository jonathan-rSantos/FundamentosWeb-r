/*
por Tag: getElementByTagName("")
por Id: getElementById("")
por nome: getElementsByName()
Por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk =  false
let emailOk = false 
let assuntoOk = false 
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3 ){
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
        nomeOk = true
    } else {
        txtNome.innerHTML = 'nome valido' 
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1  || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
        emailOk = true 
    } else {
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
    } 
}

 function validaAssunto (){
     let txtAssunto = document.querySelector('#txtAssunto')
     if (assunto.value.length >= 100){
         txtAssunto.innerHTML = 'Texto muito grande. digite no maximo 100 caracteres'
         txtAssunto.style.color = 'red'
         txtAssunto.style.display = 'block'
         assuntoOk = true
     } else     {
        txtAssunto.style.display = 'none'
     }
 }

 function enviar () {
     if (nomeOk == true || emailOk == true || assuntoOk == true ){
         alert ("Formulario enviado com sucesso!")
     } else {
         alert("Preencha o formulario corretamente antes de enviar")
     }
 }

 function zoom(){
 mapa.style.width = '605px'
 mapa.style.height = '405px'
 }

 function normal(){
    mapa.style.width = '355px'
    mapa.style.height = '205px'
 }