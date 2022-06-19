// ----------------------------------------------------------------
// Tentando pra valer
const btn_res = document.getElementById('btn-res');
const btn_emp = document.getElementById('btn-emp');
const tipo_plano = document.getElementsByClassName('tipo-plano');
const nome_plano = document.getElementsByClassName('nome-plano');
const valor_plano = document.getElementsByClassName('valor-plano');
const $html = document.querySelector('html')
function mudaPlanoEmp() {
    $html.classList.remove('res-color');
    $html.classList.add('emp-color');
    btn_emp.style.cursor = 'not-allowed';
    btn_res.style.cursor = 'pointer';
    
    // for (let index = 0; index < tipo_plano.length; index++) tipo_plano[index].innerText = 'PLANO EMPRESARIAL';
   
    nome_plano[0].innerText = '200MB'; nome_plano[1].innerText = '100MB';
    nome_plano[2].innerText = '70MB'; nome_plano[3].innerText = '30MB';

    valor_plano[0].innerText = 'R$259,00'; valor_plano[1].innerText = 'R$189,00';
    valor_plano[2].innerText = 'R$150,00'; valor_plano[3].innerText = 'R$129,00';
}

function mudaPlanoRes() {
    $html.classList.remove('emp-color');
    $html.classList.add('res-color');
    btn_res.style.cursor = 'not-allowed';
    btn_emp.style.cursor = 'pointer';

    // for (let index = 0; index < tipo_plano.length; index++) tipo_plano[index].innerText = 'PLANO RESIDÊNCIAL';
    
    nome_plano[0].innerText = 'MESH'; nome_plano[1].innerText = 'MAX';
    nome_plano[2].innerText = 'LIGHT'; nome_plano[3].innerText = 'BASIC';

    valor_plano[0].innerText = 'R$149,90'; valor_plano[1].innerText = 'R$119,90';
    valor_plano[2].innerText = 'R$99,90'; valor_plano[3].innerText = 'R$80,00';
}