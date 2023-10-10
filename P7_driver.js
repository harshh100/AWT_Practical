// Driver Code
const Calculator = require("./P7");

// instantiate a new Calculator object
const Calci = new Calculator();

// setting operands
Calci.setNum1(9);
Calci.setNum2(8);

//opeartions
Calci.Addition();
console.log("Addition: " + Calci.PrintResult());

Calci.Subtraction();
console.log("Subtraction: " + Calci.PrintResult());

Calci.Multiplication();
console.log("Multiplication: " + Calci.PrintResult());

Calci.Division();
console.log("Division: " + Calci.PrintResult());
