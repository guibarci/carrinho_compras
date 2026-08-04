# 🛒 Carrinho de Compras

Projeto desenvolvido como desafio prático do curso de **Lógica de Programação e JavaScript** da [Alura](https://www.alura.com.br/). Simula um carrinho de compras simples, onde o usuário escolhe um produto, informa a quantidade e acompanha o total sendo calculado em tempo real.

## ✨ Funcionalidades

- Adicionar produtos ao carrinho, com atualização automática do valor total
- Somar automaticamente a quantidade quando o mesmo produto é adicionado mais de uma vez
- Validação de campo de quantidade (não permite valores vazios, negativos ou inválidos)
- Botão para limpar o carrinho e reiniciar os campos do formulário

## 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (manipulação de DOM puro, sem frameworks)

## 📁 Estrutura do projeto

```
carrinho-compras/
├── assets/          # Ícones e imagens SVG usados na interface
├── js/
│   └── app.js       # Lógica do carrinho (adicionar, validar, calcular total, limpar)
├── index.html        # Estrutura da página
└── style.css          # Estilização
```

## 🧠 Principais funções (`app.js`)

| Função | Responsabilidade |
|---|---|
| `adicionar()` | Lê o produto e a quantidade selecionados, valida os dados e adiciona o item ao carrinho |
| `atualizaTotal()` | Recalcula e atualiza o valor total exibido na tela |
| `verificaProduto()` | Verifica se o produto já está no carrinho e, se estiver, apenas atualiza a quantidade |
| `validaCampoVazio()` | Garante que a quantidade informada seja um número válido maior que zero |
| `limpar()` | Reseta o formulário e esvazia o carrinho |
