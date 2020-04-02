<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

   
    $name = $_POST['name'];    
    $email = $_POST['email'];    
    $message = $_POST['message'];         
    $url = "https://www.google.com/recaptcha/api/siteverify";        
    $data = [
        'secret' => "6Lfa8OUUAAAAAEYJzcp-4OYS91czV-Qpd_pBjv9Q",
        'response' => $_POST['token'],
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ]; 
    $options = array(
        'http' => array(
            'method' => 'POST',
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",            
            'content' => http_build_query($data)
        )    
    );  
          
    $context = stream_context_create($options);    
    $response = file_get_contents($url, false, $context);         
    $res = json_decode($response, true);
        
    if($res['success'] >= 0.5){       
        
        $from = "joao.paulo@cordio.com.br";
        $to = "joao.paulo@cordio.com.br";
        $subject = "Email from the form on Cordio.com.br";
        $message = "De: " . $name . "\nEmail: " . $email . "\nMensagem: " . $message;
        $headers = "De: " . $name . "Email: " . $email;

        mail($to, $subject, $message, $headers);
        
        echo "SITE ALERT: Email Sent!";
        
   } else{ echo "SITE ALERT: reCaptcha Fail!"; }    


?>