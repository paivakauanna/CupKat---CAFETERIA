// Validação do formulário
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

// Se tudo estiver certo, redireciona para a home
window.location.href = 'index.html';
});

// Mostrar ou esconder a senha
document.getElementById('toggleSenha').addEventListener('click', function() {
    const senhaInput = document.getElementById('senha');
    const tipo = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaInput.setAttribute('type', tipo);
    this.textContent = tipo === 'password' ? '🌸' : '☁️'; // ícone muda
});

// Link do cadastro com alerta
document.getElementById('cadastroLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirecionando para a página de cadastro...');
    window.location.href = 'cadastrolink.html';
});