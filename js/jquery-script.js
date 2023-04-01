// efeito de esconder formulario de cadastro

$(document).ready(function(){
    // document.getElementById('botao-cadastrar').click();
    $("#botao-cadastar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});