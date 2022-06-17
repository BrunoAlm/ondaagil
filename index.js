function initMap() {
    // The location of Uluru
    var lat = -10.875032688203431;  
    var long = -61.954885232644614;
    const onda = {
        lat: lat,
        lng: long,
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: onda,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: onda,
        map: map,
    });
}

window.initMap = initMap;   

// ----------------------------------------------------------------
// Tentando pra valer
const btn_res = document.getElementById('btn-res');
const btn_emp = document.getElementById('btn-emp');
const tipo_plano = document.getElementsByClassName('tipo-plano');
const nome_plano = document.getElementsByClassName('nome-plano');
const $html = document.querySelector('html')
function mudaPlanoEmp() {
    $html.classList.remove('res-color');
    $html.classList.toggle('emp-color');
    btn_emp.style.cursor = 'not-allowed';
    btn_res.style.cursor = 'pointer';
    
    for (let index = 0; index < tipo_plano.length; index++) tipo_plano[index].innerText = 'PLANO EMPRESARIAL';
   
    nome_plano[0].innerText = '30MB'; nome_plano[1].innerText = '60MB';
    nome_plano[2].innerText = '70MB'; nome_plano[3].innerText = '100MB';
}

function mudaPlanoRes() {
    $html.classList.remove('emp-color');
    $html.classList.toggle('res-color');
    btn_res.style.cursor = 'not-allowed';
    btn_emp.style.cursor = 'pointer';

    for (let index = 0; index < tipo_plano.length; index++) tipo_plano[index].innerText = 'PLANO RESIDÊNCIAL';
    
    nome_plano[0].innerText = 'MESH'; nome_plano[1].innerText = 'MAX';
    nome_plano[2].innerText = 'LIGHT'; nome_plano[3].innerText = 'BASIC';
}

// ----------------------------------------------------------------
// Maluquice
// var top_container = document.getElementsByClassName('top-container');
// var btn_res = document.getElementById('btn-res');
// var btn_emp = document.getElementById('btn-emp');
// var mudou = false;

        
// function mudaPlanos() {
//     mudou = true;
//     // btn_res
//     btn_res.style.cursor = 'pointer';
//     btn_res.style.backgroundColor = '#f7f5f5';
//     btn_res.style.color = 'black';

//     // btn_emp
//     btn_emp.style.cursor = 'not-allowed';
//     btn_emp.style.backgroundColor = '#eb1c24';
//     btn_emp.style.color = 'white';

//     var planos_qtd = top_container.length;
//     for (var i = 0; i < planos_qtd; i++) {
//         top_container[i].style.backgroundColor = '#eb1c24';
//     }

//     if (mudou) {
//         btn_res.addEventListener("mouseover", function() {
//             this.style.backgroundColor = '#2e328f';
//             this.style.color = 'white';
//             });
//         btn_res.addEventListener("mouseout", function() {
//             this.style.backgroundColor = '#f7f5f5';
//             this.style.color = 'black';
//             });
//      }
// }
 
    
  

// function revertePlanos() {
//     mudou = false;
//     // btn_res
//     btn_res.style.cursor = 'not-allowed';
//     btn_res.style.backgroundColor = '#2e328f';
//     btn_res.style.color = 'white';
//     // btn_emp
//     btn_emp.style.cursor = 'pointer';
//     btn_emp.style.backgroundColor = '#f7f5f5';
//     btn_emp.style.color = 'black';

//     var planos_qtd = top_container.length;
//     for (var i = 0; i < planos_qtd; i++) {
//         top_container[i].style.backgroundColor = '#8a9ecf';
//     }

//     if (!mudou) {
//         btn_emp.addEventListener("mouseover", function() {
//             this.style.backgroundColor = '#eb1c24';
//             this.style.color = 'white'; 
//             });
//         btn_emp.addEventListener("mouseout", function() {
            

//             this.style.backgroundColor = '#f7f5f5';
//             this.style.color = 'black';
//             });
//      }
// }

// ----------------------------------------------------------------