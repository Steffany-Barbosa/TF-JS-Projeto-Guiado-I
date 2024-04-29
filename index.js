//lógica aqui
//inicia uma lista vazia
let estoque = [];

let proximoId = 1;

//C => CRIAR
function adicionarProduto(nome, quantidade, preco, descricao) {
  let produto = {
    id: proximoId++,
    nome: nome,
    quantidade: quantidade,
    preco: preco,
    descricao: descricao,
  };
  estoque.push(produto);
}

//R (READ) => LER
function listarProduto() {
  estoque.map(produto => {
    console.log(`Id:${produto.id}, 
        Nome: ${produto.nome}, 
        Quantidade: ${produto.quantidade},
        Preço: ${produto.preco}, 
        Descrição:${produto.descricao}`);
  });
}

// U => ATUALIZAR
const atualizarProduto = (id, informacaoAtualizada)=> {
    const produtoIndex = estoque.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1 ){
    estoque[produtoIndex] = Object.assign({}, estoque[produtoIndex], informacaoAtualizada), 
           console.log(`Produto com ID ${id} atualizado.`)
    }
}

// D => DELETAR
const removerProduto = (id) => {
    const produtoIndex = estoque.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1 ) {
        const produtoRemovido = estoque.splice(produtoIndex, 1);
        console.log(`Produto com Id: ${id} removido.`)
        return produtoRemovido[0]
    }

}

let novoProduto1 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto2 = adicionarProduto("Blusa", "20", "10.00", "Blusa da marca Afrocódigos");
let novoProduto3 = adicionarProduto("Calça", "35", "30.00", "Calça da marca Afrocódigos");

listarProduto()

removerProduto(2)

listarProduto()


/*O método findIndex() retorna o índice no array do primeiro elemento 
que satisfizer a função de teste provida. Caso contrário, retorna -1, 
indicando que nenhum elemento passou no teste.

O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis 
de um ou mais objetos de origem para um objeto destino. 
Este método irá retornar o objeto destino. */