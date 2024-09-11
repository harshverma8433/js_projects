const lowerset = "qwertyuiopasdfghjklzxcvbnm";
const upperset = "QWERTYUIOPASDFGHJKLZXCVBNM";
const numberset = "1234567890";
const symbolset = "~`!@#$%^&*()_-+=";   

const password = document.getElementById("password");
const passlen = document.getElementById("pass-len");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

let pass;

const getrandom = (dataset) => {
    
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generate = (pass = "") => {
    if(uppercase.checked){
        pass += getrandom(upperset);
    }
    if(lowercase.checked){
        pass += getrandom(lowerset);
    }
    if(numbers.checked){
        pass += getrandom(numberset);
    }
    if(symbols.checked){
        pass += getrandom(symbolset);
    }
    
    if(pass.length < passlen.value){
        return generate(pass);
    }
    
    password.innerText = truncatestring(pass , passlen.value);
}

// generate();


document.getElementById("btn").addEventListener(
    "click" , 
    function(){
        generate();
    }
)

const truncatestring = (str , num) => {

    console.log(str.length)
    if(str.length > num){
        let substring = str.substring(0,num);
        return substring;
    }
    else{
        return str;
    }
}

