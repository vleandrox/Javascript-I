function palindrome(text){
    const cadena = text.split("").reverse().join("");  
    //cadena     -> h e l l o -> o l l e h -> olleh
    //cadena     -> h a n n a h -> h a n n a h -> hannah 
    if(cadena == text) //olleh == hello || hannah == hannah
    {
        console.log("TRUE")    
    }
    else
    {
        console.log("FALSE")
    }
    return cadena
}

console.log(palindrome("hello"))  
console.log(palindrome("hannah"))  
console.log(palindrome("ana"))  
console.log(palindrome("ama"))


