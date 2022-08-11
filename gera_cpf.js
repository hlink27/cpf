const btnGerarCpf = document.querySelector('.btnGerarCpf')
const listaCPF = document.querySelector('.listaCPF')

btnGerarCpf.addEventListener('click', function(){
    function gerarCpf(){
        cpfRandom = []
        for(let x = 0; x < 9; x++){
            const num = Math.floor(Math.random() * 10)
            cpfRandom.push(num)
        }
        return cpfRandom
    }
    function valida() {
        const cpfParcial = gerarCpf()
        const digito1 = criaDigito(cpfParcial)
        const digito2 = criaDigito(cpfParcial.concat(digito1))
        var novoCpf = `${String(cpfParcial)}-${digito1}${digito2}`.replace(/\D+/g, '')
        return novoCpf
    }
    function criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : digito
    }
    listaCPF.innerHTML = valida()
})