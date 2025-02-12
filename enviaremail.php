<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer(true);

$nome       = $_POST['nome'];
$sobrenome  = $_POST['sobrenome'];
$email      = $_POST['email'];
$mensagem   = $_POST['mensagem'];

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->CharSet    = 'UTF-8';                                //Set the character set of the message
    $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ppinheiropassos@gmail.com';            //SMTP username
    $mail->Password   = 'dnwijaeqcvqpslhw';                     //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('ppinheiropassos@gmail.com', 'Contato Portfolio');
    $mail->addAddress('ppinheiropassos@gmail.com');
    //$mail->addCC('cc@example.com');

    //Content
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = "Mensagem de $nome $sobrenome";
    $mail->Body    = $mensagem . "<br><br> Email para contato: $email";

    $mail->send();
    echo '<b>Mensagem enviada com sucesso</b>';
} catch (Exception $e) {
    echo 'Não foi possível enviar a mensagem. Erro do Mailer' . $mail->ErrorInfo;
}