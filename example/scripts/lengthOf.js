//***CONTEO DE CARACTERES***
function lengthOf(text){
    if(text.length > 0)    
    {
        return text.length; 
    }
    else{
        return "Invalid input"
    }
}

console.log(lengthOf("hello")) //debe imprimir 5 y 
console.log(lengthOf("")) //debe imprimir  “Invalid input” 