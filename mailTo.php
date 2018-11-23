<?php 
phpinfo();

// the message
$msg = $_POST['message'];

$msg = wordwrap($msg, strlen($msg));

// send email
mail("taher@sweratel.com","My subject",$msg);
