valor = document.getElementById('valor');
calc = document.getElementById('calc');
dolar = document.getElementById('dolar');
euro = document.getElementById('euro');
iene = document.getElementById('iene');
menu = document.getElementById('menu');
resultado = document.getElementById('resultado');

function calcular (e){
    e.preventDefault();
    if (menu.value == 'Dólar'){
        resultado.innerText = 'R$ ' + (valor.value * 5.43).toFixed(2);
    }
    
    else if (menu.value == 'Euro'){
        resultado.innerText = 'R$ ' + (valor.value * 6.35).toFixed(2);
    }

    else if (menu.value == 'Iene'){
        resultado.innerText = 'R$ ' + (valor.value * 0.037).toFixed(2);
    }
}

calc.addEventListener('click', calcular);