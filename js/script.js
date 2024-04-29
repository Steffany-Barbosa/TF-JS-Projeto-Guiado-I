//lógica aqui

//inicia uma lista vazia
let estoque = []

let proximoId = 1; 

//C => CRIAR 
function adicionarProduto(nome, quantidade, preco, descricao) {
        let produto = {
            id: proximoId++,
            nome: nome, 
            quantidade: quantidade, 
            preco: preco,
            descricao: descricao
        }
        estoque.push(produto)
}

// R(READ) => LER
function listarProduto(){
    for(let i=0; i < estoque.length; i++){
        let produto = estoque[i];
        console.log("continuando", produto)
    }
}


// U => Atualizar
function atualizarProduto (id, informacaoAtualizada) {
	for (let i = 0; i < estoque.length ; i++) {
		if (estoque[i].id === id) {
        	estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
          break;
        }
    }
}

// D => Deletar
function removerProduto(id){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i, 1)
            console.log("removeu: ", removerProduto)
            return;
        }
    }
}

let novoProduto1 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto2 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto3 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto4 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto5 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");


listarProduto()

removerProduto(3)

listarProduto()