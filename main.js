const form  = document.getElementById('form-agenda');
const contatos = [];
const tels = [];
const regiao = [];


let linhas = '';

//Aqui desativa o reload da página após observar o submit. 
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();



}); 


function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputDddContato = document.getElementById('regiao');
    const inputTelContato = document.getElementById('tel-contato');
    

    

if (tels.includes(inputTelContato.value )) {
    alert(`Já temos um contato com o telefone ${inputTelContato.value}`);
} else {
    contatos.push(inputNomeContato.value);
    regiao.push(parseFloat(inputDddContato.value));
    tels.push(parseFloat(inputTelContato.value));
    

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>(${inputDddContato.value}) ${inputTelContato.value}</td>`;
    linha += `</tr>`

    linhas += linha; 
};

    inputNomeContato.value = '';
    inputTelContato.value = '';
    inputDddContato.value = '';


};

    
    function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};



