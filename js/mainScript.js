var ray = [];

function salvar(){
   let dados = this.lerDados();
   this.listarConteudo(dados);
   this.adicionar(dados);
   console.log(this.ray);
}

function lerDados(){
    let dados = {}

    dados.nome = document.getElementById("nome").value;
    dados.idade = document.getElementById("idade").value;
    dados.skills = document.getElementById("skills").value;

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("skills").value = "";

    return dados;
}

function adicionar(dados){
    this.ray.push(dados);
}

function listarConteudo(dados){
    var nome = document.createElement("p")
    nome.innerHTML = "<p class='Batata'> Nome: </p>" + dados.nome;

    var idade = document.createElement("p")
    idade.innerHTML = "Idade: " + dados.idade;

    var skills = document.createElement("p")
    skills.innerHTML = "Skills: " + dados.skills;

    document.getElementById("conteudo").appendChild(nome)
    document.getElementById("conteudo").appendChild(idade)
    document.getElementById("conteudo").appendChild(skills)
}