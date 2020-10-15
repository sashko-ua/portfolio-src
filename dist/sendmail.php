<?php

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['message'];

// require_once('phpmailer/PHPMailerAutoload.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// $mail->isSMTP();
// $mail->Host = 'smtp.gmail.com';
// $mail->SMTPAuth = true;
// $mail->Username = 'oleksandr.shabl@gmail.com';
// $mail->Password = 'KKfvsljvjyflf25';
// $mail->SMTPSecure = 'ssl';
// $mail->Port = 465;

$mail->setFrom('oleksandr.shabl@gmail.com', 'З сайту портфоліо');
$mail->addAddress('sashkoace@gmail.com');
$mail->Subject = 'Тобі хтось написав!';


$body = '<h1>Supper massage</h1>';
if (trim(!empty($name))) {
    $body .= '<p>Name: ' . $name . '</p>';
}
if (trim(!empty($email))) {
    $body .= '<p>Email: ' . $email . '</p>';
}
if (trim(!empty($text))) {
    $body .= '<p>Message: ' . $text . '</p>';
}


$mail->Body = $body;

if (!$mail->send()) {
    $message = 'error';
} else {
    $message = 'done!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
