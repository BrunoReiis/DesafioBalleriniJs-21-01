var ray = [];

function salvar(){
   let dados = this.lerDados();
   this.listar(dados);
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

function listar(dados){
    var nome = document.createElement("p")
    nome.innerHTML = dados.nome;

    var idade = document.createElement("p")
    idade.innerHTML = dados.idade;

    var skills = document.createElement("p")
    skills.innerHTML = dados.skills;

    document.getElementById("resultado").appendChild(nome)
    document.getElementById("resultado").appendChild(idade)
    document.getElementById("resultado").appendChild(skills)
}