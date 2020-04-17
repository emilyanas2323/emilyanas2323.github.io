<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \nMessage: $message";
$recipient = "emilyihabanas@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
/*echo "Name: $name <br>";
echo "Email: $email <br>";
echo "Message: $message <br>";*/
echo "Thank You!";
?>
