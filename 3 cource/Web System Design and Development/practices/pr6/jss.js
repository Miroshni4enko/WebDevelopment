function calc() {
	var price = 0;

    var  country = window.document.getElementById('country').value;	
	switch(country){
		case "Украина": price+=700;
			break;
		case "Нарния": price+=500;
			break;
		case "Эквадор": price+=400;
			break;
	}
		
	if(window.document.getElementById('free_parking').checked){
        price +=100;
	}
	if(window.document.getElementById('pool').checked){
        price +=100;
	}
	
	var stars = document.getElementsByName("amount_of_stars")
	var i;
	for (i = 0; i < stars.length; i++) {
		if(stars[i].checked){
			if (stars[i].defaultValue == "3"){
				price +=100
			} else if (stars[i].defaultValue == "4"){
				price +=200
			} else {
				price +=300
			}
		}
		break
	}
	
	if(window.document.getElementById('promo').checked){
		price+=100;
	}
	
	var resultField = window.document.getElementById('result');
    resultField.value = price;//записываем результат расчетов в блок
}


function check(){//скрывает показывает пример конуса по нажатию на чекбокс
    if(window.document.getElementById('promo').checked){
        window.document.getElementById('promo_field').style.display = "block";
    } else {
        window.document.getElementById('promo_field').style.display = "none";
    }
}