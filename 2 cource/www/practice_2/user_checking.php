<?php //объявляем POST переменные
 $lastName = $_POST['last_name']; //фамилия 
 $firstName = $_POST['first_name']; //имя 
 //если поле "Фамилия" и "Имя" не пусто 
 if (!empty($lastName) && !empty($firstName)) { 
 //пишем 
 echo "Приветствую Вас 
 $lastName $firstName. <br />"; } 
 else //иначе 
 { //пишем 
 echo "Как Вы посмели нажать эту кнопку?"; 
 //и обратно возвращаемся на index.html через 15 миллисекунд 
 echo "<meta http-equiv='refresh' content='15; url=index.html' />"; } ?>