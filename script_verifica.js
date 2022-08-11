const btnVerifica = document.querySelector('.btnVerifica')
const inputVerifica = document.querySelector('.inputVerifica')
const campoVerifica = document.querySelector('.campoVerifica')
btnVerifica.addEventListener('click', function(){
    function verificarCpf(){
        const cpfParcial = inputVerifica.value.slice(0, -2)
        const digito1 = criaDigito(cpfParcial)
        const digito2 = criaDigito(cpfParcial + digito1)
        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf == inputVerifica.value
    }
    function criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }
    const resultado = verificarCpf() ? 'CPF Válido!' : 'CPF Inválido!'
    if(verificarCpf()){
        campoVerifica.classList.remove('cpfInvalido')
        campoVerifica.classList.add('cpfValido')
    } else {
        campoVerifica.classList.add('cpfInvalido')
        campoVerifica.classList.remove('cpfValido')
    }
    campoVerifica.innerHTML = resultado
})