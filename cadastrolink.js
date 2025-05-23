// Mostrar/ocultar senha
const senhaInput = document.getElementById("senha");
const confirmaInput = document.getElementById("confirmaSenha");
const toggleSenha = document.getElementById("toggleSenha");
const toggleSenha2 = document.getElementById("toggleSenha2");

toggleSenha.addEventListener("click", () => {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggleSenha.textContent = tipo === "password" ? "🌸" : "☁️";
});

toggleSenha2.addEventListener("click", () => {
    const tipo = confirmaInput.type === "password" ? "text" : "password";
    confirmaInput.type = tipo;
    toggleSenha2.textContent = tipo === "password" ? "🌸" : "☁️";
});

// Validação de formulário
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envio automático

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("usuario").value.trim();
    const senha = senhaInput.value.trim();
    const confirmaSenha = confirmaInput.value.trim();

    if (!nome || !email || !senha || !confirmaSenha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Simula login com sucesso
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
});