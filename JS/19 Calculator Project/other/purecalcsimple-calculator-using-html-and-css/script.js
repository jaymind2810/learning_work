
var buttons = document.getElementsByClassName('button');
var smallDisplay = document.getElementsByClassName('calc-operation');
var calculation1 = document.getElementById('calculation1')
var totalDisplay = document.getElementsByClassName('calc-typed'); 
console.log(calculation1, "===========Here...", totalDisplay);
// var displayData = "";
// calculation1.innerHTML = "13";

var isOperator = ['+', '-', '*', '/', '==', '===']
// var isOperator = ['+', '-', '*', '/', '==', '==='].some((item) => {
//     return item === inputStr;    
// })

for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        // console.log(this, "---Here-");
        currentValue = this.innerHTML
        console.log(currentValue, "-----------Here-----Ina")
        if (currentValue == 'C'){
            console.log("----if con")   
            calculation1.innerHTML = ""
            totalDisplay.innerHTML = ""
        } else if (currentValue == '=') {
            console.log("Here... iN this = ")
            expression = calculation1.textContent
            var value3 = expression.split(/([+\-*/])/) 
            console.log(value3, "---------here Value3")
            // var value3 = evaluateExpression(expression)
            // calculation1.textContent = value3
        } else {
            value2 = calculation1.innerHTML
            calculation1.innerHTML = value2 + currentValue
            console.log("----else if con")   
        } 
        
    });
}



// function evaluateExpression(expression) {
//     // Remove all whitespace from the expression
//     expression = expression.replace(/\s/g, '');
  
//     // Split the expression into individual tokens
//     const tokens = expression.split(/([+\-*/()])/).filter(token => token);
  
//     // Use a stack to keep track of the order of operations
//     const operatorStack = [];
//     const operandStack = [];
//     for (const token of tokens) {
//       if (/^\d+$/.test(token)) {
//         operandStack.push(Number(token));
//       } else if (token.match(/^[+\-*/]$/)) {
//         while (operatorStack.length && operatorPrecedence(operatorStack.slice(-1)[0]) >= operatorPrecedence(token)) {
//           applyOperator(operatorStack.pop(), operandStack);
//         }
//         operatorStack.push(token);
//       } else if (token === '(') {
//         operatorStack.push(token);
//       } else if (token === ')') {
//         while (operatorStack.slice(-1)[0] !== '(') {
//           applyOperator(operatorStack.pop(), operandStack);
//         }
//         operatorStack.pop();
//       }
//     }
  
//     while (operatorStack.length) {
//       applyOperator(operatorStack.pop(), operandStack);
//     }
  
//     return operandStack[0];
//   }
  
//   function operatorPrecedence(operator) {
//     /*
//      * Returns the precedence level of the given operator.
//      * Assumes that the operator is one of '+', '-', '*', or '/'.
//      */
//     if (operator === '+' || operator === '-') {
//       return 1;
//     } else {
//       return 2;
//     }
//   }
  
//   function applyOperator(operator, operandStack) {
//     /*
//      * Applies the given operator to the top two operands on the stack.
//      * Assumes that the operator is one of '+', '-', '*', or '/'.
//      */
//     const rightOperand = operandStack.pop();
//     const leftOperand = operandStack.pop();
//     let result;
//     if (operator === '+') {
//       result = leftOperand + rightOperand;
//     } else if (operator === '-') {
//       result = leftOperand - rightOperand;
//     } else if (operator === '*') {
//       result = leftOperand * rightOperand;
//     } else if (operator === '/') {
//       result = leftOperand / rightOperand;
//     }
//     operandStack.push(result);
//   }
  
  
//   // Example usage
//   const expression = "7*6+3/2-5*6+(7-2)*5";
//   const total = evaluateExpression(expression);
//   console.log(total);  // Output: -11.5
  