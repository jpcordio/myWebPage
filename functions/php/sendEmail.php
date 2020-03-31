<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


ini_set('display_errors', 1);

error_reporting(E_ALL);

$from = "joao.paulo@cordio.com.br";

$to = "joao.paulo@cordio.com.br";

$subject = "Email from the form on Cordio.com.br";

$message = "De: " . $name . "\nEmail: " . $email . "\nMensagem: " . $message;

$headers = "De: " . $name . "Email: " . $email;

mail($to, $subject, $message, $headers);

echo "Your e-mail has been sent.";

?>