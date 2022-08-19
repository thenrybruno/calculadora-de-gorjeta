function calcular(event){
    event.preventDefault();
    let conta = document.getElementById('conta').value
    let servico = document.getElementById('servico').value
    let pessoas = document.getElementById('pessoas').value

    if(conta == '' || servico == 0){
        alert('Por favor, preencha o valor da conta e o que achou do serviço.')
        return
    }

    if(pessoas == '' || pessoas <= 1){
        pessoas = 1
        document.getElementById('cadaPessoa').style.display ='none'
    } else{
        document.getElementById('cadaPessoa').style.display = 'block'
    }

    let total = (conta * servico) / pessoas
    total = total.toFixed(2)
    document.getElementById('tip').innerHTML = total
    document.getElementById('total').style.display = 'block'

}

function limpar(){
    let conta1 = document.getElementById('conta')
    let servico1 = document.getElementById('servico')
    let pessoas1 = document.getElementById('pessoas')

    conta1.value = ''
    servico1.value = '0'
    pessoas1.value = ''

    document.getElementById('total').style.display = 'none'
}

document.getElementById('total').style.display = 'none'
document.getElementById('cadaPessoa').style.display = 'none'

document.getElementById('tipsform').addEventListener('submit', calcular)