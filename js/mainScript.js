var ray = [];

function salvar(){
   let dados = this.lerDados();
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