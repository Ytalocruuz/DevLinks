// Criar um aplicativo de frases motivacionais

// Declaração
function createPhrases(){
    console.log("Estudar é muito bom")
    console.log("Estudar é muito ")
    console.log("Estudar é ")
}

// Executar a função

createPhrases()
console.log("Fim do programa")

// Function anonymous

const sun = function(number1, number2){
  total = number1 + number2
  return total
}

const number1 = 25
const number2 = 30

console.log(`O 1 nuúmerpo é ${number1}`)
console.log(`O 2 nuúmerpo é ${number2}`)
console.log(`A soma dos números são ${sun(number1, number2)}`)

function createThink(subject){
    subject = "study"
    return subject
  }
  
  console.log(subject)
  console.log(createThink(subject))

  const arrowFunction = () => {
    console.log("Arrow Function")
  }
  
  arrowFunction()

  function Person(name){
    this.name = name
    this.walk = function(){
      return this.name + " está andando"
    }
  }
  
  const ytalo = new Person("Ytalo")
  console.log(ytalo.walk()) 
  
  let pao = false
  let queijo = false
  
  const nickBreakfash = pao || queijo ? "Café perfeito" : "Café ruim"
  
  
  console.log(nickBreakfash)

