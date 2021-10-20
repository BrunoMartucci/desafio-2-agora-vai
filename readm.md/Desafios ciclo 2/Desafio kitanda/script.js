window.onload = function(){



    let produtos = [
        {descricao:'Mamão Papaia', preco:2.20},
        {descricao:'Laranja', preco:3.50},
        {descricao:'Manga', preco:1.40},
        {descricao:'Melão', preco:5.40},
        {descricao:'Melancia', preco:5.40}
    ]


    
    const listaProdutos = document.querySelector("#listaProdutos");
    const mostraTotalCompras = document.querySelector("#mostraTotalCompras");
    const carrinho = document.querySelector("#cestaDoCliente");

    
    

     ( ()=>{
         let mostraTotalCompra=0;
         for( let pro of produtos ){
            const filhoLi = document.createElement('li');

             for( listaP in pro ){
                 if( listaP == 'preco'){
                     listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP] )
                     mostraTotalCompra += pro[listaP];
                 } else{
                     listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                 }
                
                
             }
         }
         mostraTotalCompras.value = mostraTotalCompra.toFixed(2);
     } )(listaProdutos)
      

}
     
       



















