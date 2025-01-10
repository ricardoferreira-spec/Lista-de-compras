/*
        let nome = prompt("Digite seu nome")
        let paragrafo = document.getElementById("paragrafo")
        //console.log(paragrafo)
        paragrafo.innerText = nome

        //inner html - Outra forma de declarar uma variável em vez de let é const que é uma variável que eu não posso alterar. É sempre constante
        const outro = prompt("Agora digite uma tag com texto: exemplo <p>texto</p>") // se eu adicionar <h1> aumenta o tamanho da fonte
        let outroparagrafo = document.getElementById("outroParagrafo")
        outroparagrafo.innerHTML = outro
*/

/*function alterarP(){
    let n = prompt("Digite o valor que vc deseja colocar no P")
    let pa = document.getElementById("paragrafo")
    pa.innerText = n
}*/

function adicionarHabito(){
    const text = prompt("Digite o seu hábito")
    let lista = document.getElementById("listaQ")
    let novoElementoLi = document.createElement("li")  /* linkado com a li da lista */
    lista.append(novoElementoLi)
    novoElementoLi.innerText = text
}
