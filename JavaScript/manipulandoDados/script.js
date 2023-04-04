let phrase = "Eu quero entrar na Sidia";
let MyArray = phrase.split(" ");
let pheaseWithUnderscore = MyArray.join("_")
console.log(pheaseWithUnderscore.toUpperCase())
let phraseInclude = "Ytalo Cruz";
console.log(phraseInclude.includes("Cruz Pereira"));console.log(Array.from(phraseInclude))

let techs = ["Js", "css", "html"]
//add no final do array
techs.push("nodejs")
//add no incio do array 
techs.unshift("sql")
//remover auomaticamente do final de um array
techs.pop()
//remover autocamernte do inicio de um array
techs.shift()


console.log(techs)
