let input = document.getElementById('barra_pesquisa')
let saida = document.querySelector('div.busca_feita')
let botao_busca = document.querySelector('img#botao_busca')
function buscar_produto() {
    let receber_input = input.value
    if((receber_input != '') && (receber_input != null) && (receber_input != undefined)){
        let valorBuscado = `
        <div class="resultado_busca">
            <p class="saida_de_dados">
                ${receber_input}
            </p>
        </div>`

        saida.innerHTML = valorBuscado
        input.value = ''
    }
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        botao_busca.click()
    }
})