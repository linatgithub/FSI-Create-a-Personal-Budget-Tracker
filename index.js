let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
/*
window.prompt(weeklyExpenseQuesions[0])

let answer = window.prompt (weeklyExpenseQuesions[0])
console.log (answer)

let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)
*/

for (let i = weeklyExpenseQuestions.length - 1; i >= 0; i--) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}

let i = 0

while (i < annualExpenseQuestions.length) {

//for (let i = 0; i< annualExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
    i++
}