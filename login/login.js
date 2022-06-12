let gmail = document.getElementById('gmail').value
let senha = document.getElementById('senha').value
let saida_erro_gmail = document.querySelector('div.saida_erro_gmail')
let saida_erro_senha = document.querySelector('div.saida_erro_senha')
function registroLogin() {
    if((gmail != '') && (senha != '')){
        alert('Logado com sucesso!')
    }
    else {
        saida_erro_gmail.innerHTML = 'O campo está vazio'
        saida_erro_senha.innerHTML = 'O campo está vazio'
    }

}