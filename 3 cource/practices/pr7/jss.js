function parse() {
	//var str = "Aaa dsds FFsf faafD sd Dasd sad \nAfd \tDsd" 
	var capitalLetterPatt = /([^\S]|^)([A-Z]\S*)/g;
	var capitalLetter = document.getElementById('capitalLetter');
	capitalLetter.innerHTML = capitalLetter.innerHTML.replace(capitalLetterPatt, 'win');
	//var result = str.match(capitalLetterPatt);
	//document.write(result);
	
	//var str = "1.168.2.321" 
	var IPPatt = /\d.168.\d.\d{3}/g;
	var ip = document.getElementById('IP');
	ip.innerHTML = ip.innerHTML.replace(IPPatt, 'win');
	//result = str.match(IPPatt);
	//document.write(result);
	
	//var str = "+31(122)222-22-22" 
	var telNumPatt = /^(\+3)(\d)(\([0-9]{3}\))([0-9]{3}\-[0-9]{2}\-[0-9]{2})$/g;
	var telNum = document.getElementById('telNum');
	if (telNumPatt.test(telNum.value)){
		telNum.style.borderColor = 'green'
	}else {
		telNum.style.borderColor = 'red'
	}
	//result = str.match(telNumPatt);
	//document.write(result);
	
	//var str = "slavik.miroshni4enko@netcracker.sumy.net" 
	var e_mailPatt = /^\S*\@(\w+\.)+net$/g;
	var e_mail = document.getElementById('e_mail');
	if (telNumPatt.test(e_mail.value)){
		e_mail.style.borderColor = 'green'
	}else {
		e_mail.style.borderColor = 'red'
	}
	//result = str.match(e_mailPatt);
	//document.write(result);
};