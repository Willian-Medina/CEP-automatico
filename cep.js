
function nomearCEP(valor) {
    var cep = document.getElementById('cep2')
    var cidade = document.getElementById('cidade')
    var uf = document.getElementById('uf')
    var logradouro = document.getElementById('logradouro')
    var complemento = document.getElementById('complemento')
    var bairro = document.getElementById('bairro')

    cep.style.display = '';
    cidade.style.display = '';
    uf.style.display = '';
    logradouro.style.display = '';
    complemento.style.display = '';
    bairro.style.display = '';

    cep.value = valor.cep;
    cidade.value = valor.localidade;
    uf.value = valor.uf;
    logradouro.value = valor.logradouro;
    bairro.value = valor.bairro;
    complemento.value ='';
}



function requestCEP (valor) {
    var objCEP = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }

    
    fetch(`https://viacep.com.br/ws/${valor}/json/`,objCEP).then(request =>request.json()).then(data => {
        console.log(data);
        nomearCEP(data)} )
    .catch(e => console.log('Algo deu errado',e))
}




var teste = document.addEventListener('focusout', e =>{
    var el = e.target;
    if(el.id === 'floatingInput cep'){
       var cepRecebido = document.getElementById('floatingInput cep').value;
       if(cepRecebido === '') {
        alert("você precisa inserir um CEP")
        return false
       } 
       cepRecebido = cepRecebido.replace("-","")

       if (cepRecebido.length !== 8){
           alert ('insira um CEP válido')
           return false
       }
       console.log(typeof cepRecebido, cepRecebido)
       requestCEP(cepRecebido)
    }
})

teste()


