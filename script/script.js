let listaDeCompras = []

function adicionarItem(){
    let itemInput = document.getElementById("item")
    let quantidadeInput = document.getElementById("quantidade")

    if(itemInput.value.trim() === ""){
        return 
        /// quando a pessoa não preencher item não preeche nada.
        /// trim quando a pessoa  preencher espaço em branco não preeche nada.
    }
 
    let novoItem = {
        id: Date.now(),
        nome: itemInput.value,
        quantidade: quantidadeInput.value || 1,
        comprado: false
    }

    /// || 1 = quando não preecher a quantidade já adiciona 1 na quantidade

    listaDeCompras.push(novoItem)

    salvarDados()
    
    
    atualizarInterface()
    itemInput.value = ""            /// para apagar o imput quando eu digitar um novo item
    quantidadeInput.value = ""      /// ficava histórico na combo
    itemInput.focus()               /// cursor volta para caixa de item para digitar um novo item
}


function removerItem(id) {
    listaDeCompras = listaDeCompras.filter((item) => item.id != id)
    salvarDados()
    atualizarInterface()
}

function limparLista() {
    listaDeCompras = []
    salvarDados()
    atualizarInterface()
}

function atualizarInterface(){
    let lista = document.querySelector(".lista")
    lista.innerHTML = ""

    for(let i = 0; i < listaDeCompras.length; i++) {
        let item = document.createElement("li")
        item.innerHTML = `
                <input type='checkbox' onchange = "toggleItem(${listaDeCompras[i].id})" ${listaDeCompras[i].comprado ? "checked" : ""}/> 
                <p>${listaDeCompras[i].nome} x ${listaDeCompras[i].quantidade}</p>
                <button onclick="removerItem(${listaDeCompras[i].id})">X</button>
        `
        lista.append(item)
    }
}

//// o  "checked" : "" / falso soluciona o bug de quando adiciona item com algum selecionado não apaga mais o selecionado

function toggleItem(id) {
    const item = listaDeCompras.find((item) => item.id == id)
    item.comprado = !item.comprado
    salvarDados()
    //// console.log(item)
}

function limparComprados(){
    listaDeCompras = listaDeCompras.filter((item) => item.comprado != true)
    atualizarInterface()
    salvarDados()
}

//// tratamento para aceitar Enter já adiciona item
document.getElementById("item").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        adicionarItem()
    }
})

//// tratamento para aceitar Enter já adiciona qtde
document.getElementById("quantidade").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        adicionarItem()
    }
})

function carregarDados(){
    const dados = localStorage.getItem("listaDeCompras") //  nome listaDeCompras tem que estar igual ao criado no localStorage
    if(dados){
        listaDeCompras = JSON.parse(dados)
        atualizarInterface()
    }
}

function salvarDados(){
    localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras))
}

carregarDados()

//  listaDeCompras = listaDeCompras.filter((item) => item.comprado != true)
