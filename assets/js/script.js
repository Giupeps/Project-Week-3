

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
  
  function calc() {
    
    let result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result

  }
  
 
  