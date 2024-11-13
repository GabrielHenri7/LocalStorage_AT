// Função para inserir os dados do aluno no localStorage
function InserirDados() {
    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
    const conclusao = document.getElementById("conclusao").value;
    
    if (!nome || !curso || !conclusao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    // Cria um objeto aluno e salva no LS
    const aluno = { nome, curso, conclusao };
    let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));
 
    alert("Aluno cadastrado com sucesso!");
    LimparCampos();
}
 
// Consulta todos os dados dos alunos
function ConsultarTodosDados() {
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const resultado = document.getElementById("resultado");
 
    if (alunos.length === 0) {
        resultado.innerHTML = "Nenhum aluno cadastrado.";
        return;
    }
 
    // Exibe todos os alunos cadastrados
    resultado.innerHTML = "<h3>Alunos Cadastrados:</h3>";
    alunos.forEach((aluno, index) => {
        resultado.innerHTML += `Índice: ${index}<br>Nome: ${aluno.nome}<br>Curso: ${aluno.curso}<br>Ano de Conclusão: ${aluno.conclusao}<br><br>`;
    });
}
 
// Consulta um aluno específico pelo índice
function ConsultarAlunoEspecifico() {
    const indice = parseInt(document.getElementById("indice").value);
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const resultado = document.getElementById("resultado");
 
    if (isNaN(indice) || indice < 0 || indice >= alunos.length) {
        resultado.innerHTML = "Índice inválido ou aluno não encontrado.";
        return;
    }
 
    const aluno = alunos[indice];
    resultado.innerHTML = `<h3>Dados do Aluno:</h3>Nome: ${aluno.nome}<br>Curso: ${aluno.curso}<br>Ano de Conclusão: ${aluno.conclusao}`;
}
 
// Atualiza os dados de um aluno específico
function AtualizaDados() {
    const indice = parseInt(document.getElementById("indice").value);
    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
    const conclusao = document.getElementById("conclusao").value;
 
    let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
 
    if (isNaN(indice) || indice < 0 || indice >= alunos.length) {
        alert("Índice inválido ou aluno não encontrado.");
        return;
    }
 
    // Atualiza os dados do aluno
    alunos[indice] = { nome, curso, conclusao };
    localStorage.setItem("alunos", JSON.stringify(alunos));
 
    alert("Dados do aluno atualizados com sucesso!");
    LimparCampos();
}
 
// Deleta um aluno específico pelo índice
function DeletarDados() {
    const indice = parseInt(document.getElementById("indice").value);
    let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
 
    if (isNaN(indice) || indice < 0 || indice >= alunos.length) {
        alert("Índice inválido ou aluno não encontrado.");
        return;
    }
 
    // Remove o aluno do array e salva novamente no lS
    alunos.splice(indice, 1);
    localStorage.setItem("alunos", JSON.stringify(alunos));
 
    alert("Aluno removido com sucesso!");
    LimparCampos();
}
 
// Limpa os campos do formulário
function LimparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("conclusao").value = "";
    document.getElementById("indice").value = "";
    document.getElementById("resultado").innerHTML = "";
}