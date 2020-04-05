$(document).ready(function(){

    //Calling reCaptcha V3
    grecaptcha.ready(function() {

        grecaptcha.execute('6LfyruYUAAAAAPuehdAPt5TGwERQcm05QjJnqKCt', {action: 'homepage'}).then(function(token) {

            document.getElementById("token").value = token;

        });

    });

    //Calling Ajax to send email    
    $('#mainForm').submit(function(){

        var dados = jQuery( this ).serialize();

        $.ajax({

            type: "POST",
            url: "functions/php/sendEmail.php",
            data: dados,            
            success: function(data){
                                
                if(data == 'emailSent'){
                                
                    $('#showContent').modal('show');
                    $('#mainForm')[0].reset();
                    
                }else if(data == 'emailFail'){
                    
                    $('#showEmailFail').modal('show');
                    
                }
            }
            
        });

        return false;

    });

});