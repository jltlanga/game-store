// efeito do botão voltar ao topo
function topo() {
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

// validar login

function login(){
    var logado = 0;
    var usuario = document.getElementById('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    // validação de login
    if(usuario == 'admin' && senha =='12345'){
        window.location = 'index.html';
        logado = 1;
    }

    // verificação da situação logado
    if(logado == 0){
        alert('Acesso Negado. Dados incorretos');
    }
}