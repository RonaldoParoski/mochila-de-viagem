const form = document.querySelector('#novoItem')
const lista = document.querySelector('.lista')
// const itens = [] //array para armazenar o itens e armazenar no local storage
const itens = JSON.parse(localStorage.getItem("itens")) || [] //consulta no localstorage se tem itens ou nao

itens.forEach((elemento) => {
    criaElemento(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault() //interrompe que os dados fiquem na pagina 

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade']


    const itemAtual = { //cria um objeto pra receber mais de um dado e armazenar no local storage
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual) //coloca os itens do array no json

    localStorage.setItem("itens", JSON.stringify(itens)) //JSON.stringfy-> transforma um elemento em uma string

    nome.value = ""
    quantidade.value = "" // todas as vezes q enviar um novo cadastro ele limpa os campos do form
})


//FUNÇÃO QUE RECEBE OS CAMPOS DO FORM E CRIA O ITEM
function criaElemento(item) {

    // CRIA UM NOVO ITEM NA LISTA
    const novoItem = document.createElement('li')
    novoItem.classList.add("item") // PEGA A MESMA CLASSE DO LI DO HTML

    // pega o numero que esta na quantidade
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem) // appendChild coloca um elemento dentro do outro
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

    // localStorage.setItem("nome", nome) //salva no local storage da pagina web o dado, como um banco
    // localStorage.setItem("quantidade", quantidade)

}