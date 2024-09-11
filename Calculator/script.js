let r = document.querySelector(".display")
const addvalue = (value) => {
    r.value += value;
}

document.getElementById("ac").addEventListener(
    "click",()=>{
        r.value = "";
    }
)

document.getElementById("de").addEventListener(
    "click",()=>{
        r.value = r.value.toString().slice(0,-1);
    }
)

document.getElementById("equals").addEventListener(
    "click",()=>{
        r.value = eval(r.value);
    }
)