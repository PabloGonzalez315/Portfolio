<?php
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $to = "pablo.alejandro315@gmail.com";
  $headers = "De: $name";

  mail($to,$subject,$message,$headers);
  echo "Mensaje enviado con éxito!";
?>