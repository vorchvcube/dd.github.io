<?php
if (!isset($_POST['name']) or empty($_POST['name'])) {
	$error1 = "Имя?<br />";
} else $error1 = NULL;

if (!isset($_POST['email']) or empty($_POST['email'])) {
	$error2 = "Email?<br />";
} else $error2 = NULL;

if (!isset($_POST['phone']) or empty($_POST['phone'])) {
	$error2 = "phone?<br />";
} else $error3 = NULL;


if (empty($error1) and empty($error2) and empty($error3)) {
	$subject = $_POST['phone'];
	$name    = $_POST['name'];
	$email   = $_POST['email'];
	$message = "Новая заявка, Имя: {$name}, email: {$email}, телефон: {$_POST['phone']}";
	if (mail("mail@dd-mk.ru", $email, $message)) {
		echo "Отправлено!";
	} else echo "Ошибка!";
} else {
	echo $error1.$error2.$error3.$error4;
}
?>
