<?php
	if (!isset($_GET['url'])) 
	exit();
	$url = $_GET['url'];
	$catalog = simplexml_load_file($url);
	if (!$catalog) 
	die("Couldn't open your URL.");
	echo '<center><h1><font color="#0F7879">videocameras</font></h1></center>';
	foreach ($catalog->videocamera as $camera)
		{	
			echo '<center><font color="#0F7879"><u><h2>'.$camera->manufacturer.'</u></h2></font></center>';
			echo '<h3><b><center> zoom = '.$camera->zoom.'</b></h3>'; 
			echo '<h3><b><center> pixels = '.$camera->pixels.'</b></h3>';
			echo '<h3><b><center> display =  '.$camera->display.'</b></h3>';
			echo '<h3><b><center> autoexposure = '.$camera->autoexposure.'</b></h3>';
			echo '<h3><b><center> digital_effects = '.$camera->digital_effects.'</b></h3>';
			echo '<h3><b><center> white_balance = '.$camera->white_balance.'</b></h3>';
			echo '<h3><b><center> lighting_function = '.$camera->lighting_function.'</b></h3>';
		}
?>
