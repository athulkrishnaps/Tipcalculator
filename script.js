const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  
  const bill = Number(billInput.value)
  
 
  const tipPercentage = Number(tipInput.value)/100

  const tipAmount = bill * tipPercentage

  const total = tipAmount + bill

  const perPersonTotal = total / numberOfPeople
 
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
   
}

const increasePeople = () => {
 
  numberOfPeople ++

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()

}

const decreasePeople = () => {

if(numberOfPeople <= 1){
  alert('someone have to pay the bill anyway')
  return
}

numberOfPeople --

 numberOfPeopleDiv.innerText = numberOfPeople

calculateBill()
  
}