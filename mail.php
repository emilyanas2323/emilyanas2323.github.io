<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "eanas@edu.uwaterloo.ca";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $message) or die("Error!");
echo "Thank You!";
?>
