function produto(){
    return{
        cogido: 100,
        nome: 'joao',
        descricao:'ativo',
        preco_compra:'decimal',
        preco_venda: 1000,
        quantidade_estoque: 100,
        ativo: true,
        data_cadastro: '24/09/2002',
        
        //metodo
        inserir: function(){
            console.log('inserindo...')
        },
        alterar: function(){
            console.log('alterando...')
        },
        excluir: function(){
            console.log('excluindo...')
        },
        pesquisar: function(){
            console.log('pesuqisando...')
        },
    };
}
