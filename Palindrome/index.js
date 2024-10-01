const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("") //split and join
}


function check() {
    
    const value =  input.value
    
    const reverse = reverseString(value)
    

    if ( value === reverse ){        //condition to check palindrome
        alert("P A L I N D R O M E");

    }else {
        alert("NOT PALINDROME");
    }

    input.value ="";
}