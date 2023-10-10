// adding new method to prototype of array
Array.prototype.printArray = function () {
    for (const i of this) {
      console.log("-> ", i);
    }
  };
  
  let arr = [1, 2, 3, 4];
  arr.printArray();
  
  // adding new method to prototype of string
  String.prototype.printUpper = function () {
    console.log(this.toUpperCase());
  };
  
  let str = "Charusat";
  str.printUpper();  