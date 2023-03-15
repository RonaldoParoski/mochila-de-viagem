const form = document.getElementById('novoItem');
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault() //interrompe que os dados fiquem na pagina 
//    const nome = evento.target.elements['nome'].value
//    const quantidade = evento.target.elements['quantidade'].value

   criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})


//FUNÇÃO QUE RECEBE OS CAMPOS DO FORM E CRIA O ITEM
function criaElemento(nome, quantidade){

        // CRIA UM NOVO ITEM NA LISTA
    const novoItem = document.createElement('li')
    novoItem.classList.add("item") // PEGA A MESMA CLASSE DO LI DO HTML

    // pega o numero que esta na quantidade
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem) // appendChild coloca um elemento dentro do outro
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

}

