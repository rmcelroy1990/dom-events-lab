/*-------------------------------- Constants --------------------------------*/

//const buttons = document.querySelectorAll('.button');
//const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

//button.addEventListener('click', (event) => {}

/*-------------------------------- Functions --------------------------------*/

//const buttons = document.querySelectorAll('.button');


//buttons.forEach((button) => {
    //button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(calculator.target.innerText);
      // Future logic to capture the button's value would go here...
    //});
  //});
 
  //const calculator = document.querySelector('#calculator');
  //calculator.addEventListener('click'), (addNumbers) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);
    // Example
   
    function addNumbers() {
        if (event.target.classList.contains('number')) {
        
            let number1 = document.getElementById("num1").value;
            let number2 = document.getElementById("num2").value;
          
              if (number1 === "" || number2 === ""){
                  document.getElementById("result").textContent = "sum";
                  return;
              }
            }
        }

  
    // Example
    if (event.target.innerText === '*') {
        let number3 = document.getElementById("num3").value;
        let number5 = document.getElementById('num5').value;
      // Do something with this operator