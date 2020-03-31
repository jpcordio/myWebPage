$(document).ready(function(){
    
    $('#mainForm').submit(function(){

        var dados = jQuery( this ).serialize();

        $.ajax({

            type: "POST",
            url: "../functions/php/sendEmail.php",
            data: dados,
            success: function(data){
                                
                $('#showContent').modal('show');
                $('#mainForm')[0].reset();
            }

        });

        return false;

    });

});