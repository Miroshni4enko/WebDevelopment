$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

function jsoner() {
	xhttp = new XMLHttpRequest();
	xhttp.open('GET','json.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		var json=eval('(' +xhttp.responseText+ ')');
		if(xhttp.readyState == 4){
			div = document.getElementById('json');
			videocameras = json.catalog.videocamera;
			for(var i = 0; i < videocameras.length; i++){
				div.innerHTML +="<div>"
				+ "<center><font color=\"#0F7879\"><u><h2> id = " + videocameras[i].id                + "</u></h2></font></center>"
				+ "<h3><b><center> manufacturer = "               + videocameras[i].manufacturer      + "</b></h3>"
				+ "<h3><b><center> zoom = "                       + videocameras[i].zoom              + "</b></h3>"
				+ "<h3><b><center> pixels = "                     + videocameras[i].pixels            + "</b></h3>"
				+ "<h3><b><center> display = "                    + videocameras[i].display           + "</b></h3>"
				+ "<h3><b><center> autoexposure = "               + videocameras[i].autoexposure      + "</b></h3>"
				+ "<h3><b><center> digital_effects = "            + videocameras[i].digital_effects   + "</b></h3>"
				+ "<h3><b><center> white_balance = "              + videocameras[i].white_balance     + "</b></h3>"
				+ "<h3><b><center> lighting_function = "          + videocameras[i].lighting_function + "</b></h3>"
				+ "</div>";
			}
		}
	}
}