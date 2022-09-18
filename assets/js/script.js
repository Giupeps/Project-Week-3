

function addSymbol(element) {
    
    document.getElementById('display').value += element
}

function back(){

   display.value = display.value.substring(0, display.value.length - 1);

}

function clearAll() {

   document.getElementById('display').placeholder= 0
   document.getElementById("display").value = ''
}

// function addToDisplay(element) {
//   let last = document.getElementById('display').innerHTML.charAt(document.getElementById('display').innerHTML.length - 1)
//     if ((last == '+' || last == '-' || last == '*' || last == '/') && (element= '+' || element == '-' || element == '' || element == '/')) {
//       document.getElementById('display').innerHTML = 'error'
//     }
//     else {
//         document.getElementById('display').innerHTML += element
//     }
// }
   
  
function calc() {
    
    let result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result

}
  


  