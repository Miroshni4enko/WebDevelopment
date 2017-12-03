function calc() {
    var  l = window.document.getElementById('l').value;//получаем значение длины
	var  r = window.document.getElementById('r').value;//получаем значение радиуса
    if(valid(l, r)){
		var resultField = window.document.getElementById('result');
        resultField.value = (Math.PI*l*r);//записываем результат расчетов в блок
	}
}
function valid(l, r) {//функция валидации
    if(!l.isUndefined && !r.isUndefined && l > 0 && r > 0){
        return true;
    } 
    alert("Некорректные данные!");
    return false;
}
function check(){//скрывает показывает пример конуса по нажатию на чекбокс
    if(window.document.getElementById('check').checked){
        window.document.getElementById('imgCil').style.display = "block";
    } else {
        window.document.getElementById('imgCil').style.display = "none";
    }
}