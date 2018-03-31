<?php
$name = $_POST['sender'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";

// "You have received a project request. \n \n Contact Name: " + req.query.from + ". \n \n Contact email: " + req.query.email + ". \n \n Contact phone: " + req.query.phone + " \n \n Message: " + req.query.text
$recipient = "jdanielwebdev@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
