
limpar();

// Adiciona o produto selecionado ao carrinho e atualiza o total.
function adicionar(){
    let produto = document.getElementById('produto').value;
    let partes = produto.split(' - ');
    let nomeProduto = partes[0];
    let precoProduto = parseInt(partes[1].replace('R$', ''));
    let quantidade = parseInt(document.getElementById('quantidade').value);

        if (!validaCampoVazio(quantidade)){
            return;
        }
        if(verificaProduto(nomeProduto, precoProduto, quantidade)){
            return;
        }
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span>${nomeProduto} 
        <span class="texto-azul">R$${(precoProduto * quantidade).toFixed(2).replace('.', ',')}</span>
    </section>`;  
    atualizaTotal(precoProduto, quantidade);
}

// Calcula e atualiza o valor total do carrinho com o novo item.
function atualizaTotal(precoProduto, quantidade){
    let totalAtual = parseFloat(document.getElementById('valor-total').innerHTML.replace('R$', '').replace(',', '.'));
    let calculaTotal = (precoProduto * quantidade) + totalAtual;
    document.getElementById('valor-total').innerHTML = `R$${calculaTotal.toFixed(2).replace('.', ',')}`;
}

// Limpa todos os campos do formulário e reseta o carrinho.
function limpar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('produto').value = '';
    document.getElementById('lista-produtos').innerHTML = ``;
    document.getElementById('valor-total').innerHTML = 'R$0,00';
}

// Verifica se o produto já está no carrinho e atualiza sua quantidade se existir.
function verificaProduto(nomeProduto, precoProduto, quantidade){
    let produtosCarrinho = document.querySelectorAll('.carrinho__produtos__produto');

    for(let produto of produtosCarrinho){
        if(produto.innerHTML.includes(nomeProduto)){
            let spans = produto.querySelectorAll('.texto-azul');
            let quantidadeAtual = parseInt(spans[0].innerHTML.replace('x', ''));
            let novaQuantidade = quantidadeAtual + quantidade;
            let novoSubtotal = (precoProduto * novaQuantidade).toFixed(2).replace('.', ',');

            produto.innerHTML = `
            <span class="texto-azul">${novaQuantidade}x</span> ${nomeProduto}
            <span class="texto-azul">R$${novoSubtotal}</span>`;
            atualizaTotal(precoProduto, quantidade);
            return true;
        }
    }
}

// Valida se a quantidade informada é um número válido maior que zero.
function validaCampoVazio(quantidade){
    if(isNaN(quantidade) || quantidade <= 0){
        alert('Informe a quantidade do produto!')
        return false;   
    }
    return true;
}
