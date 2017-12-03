function parse() {
	var arrayOfTdElements = document.getElementsByTagName("td");
    var patt = /((\+14)(([0-9]{10})|(\([0-9]{4}\)[0-9]{6})|(\([0-9]{4}\)([0-9]{2}\-[0-9]{2}\-[0-9]{2}))))/g;
	var sum = 0;
	var i;
	var result = "";
	for (i = 0; i < arrayOfTdElements.length; i++) {
		if(patt.test(arrayOfTdElements[i].innerHTML)){
			result +="<br>" +  arrayOfTdElements[i].innerHTML 
			sum++
		}
	}
    //var str = "+141232333333, +14(1232)333333, +14(1232)33-33-33";
	//var result = str.match(patt);
	document.write("amount of telephone num for 14 var = " + sum)
	document.write(result)
};
