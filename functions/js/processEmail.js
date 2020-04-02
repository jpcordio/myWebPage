$(document).ready(function(){

    //Calling reCaptcha V3
    grecaptcha.ready(function() {

        grecaptcha.execute('6Lfa8OUUAAAAAG8S9Iu2IObYks_QOjZMKh_S5E3S', {action: 'homepage'}).then(function(token) {

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
                                
                $('#showContent').modal('show');
                $('#mainForm')[0].reset();
            }
            
            /*
               if(data.status == 'success'){
                   
                     $('msgEmailSuccess').modal('show');
                     $('#mainForm')[0].reset();
                   
                }else if(data.status == 'error'){
                    
                    $('msgEmailFail').modal('show');
                } 
                */
            

        });

        return false;

    });

});