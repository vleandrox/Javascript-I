function stringIncludes(texto1,texto2){
    if(texto2.includes(texto1))  {
        console.log("El texto si incluye")
    }
    else
    {
        console.log("El texto no incluye")
    }

}

console.log(stringIncludes("he","Hello"))
console.log(stringIncludes("he","hello world")) 