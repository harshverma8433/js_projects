let inp_val = document.getElementById("inp");
let bt = document.getElementById("btn");

bt.addEventListener(
    "click",function(){
        if(inp_val.value === ""){
            alert("kuch daal le pehle chadarmod...")
            return; 
        }
        add_element(inp_val.value);
        inp_val.value = "";

    }
)

const add_element = (inpval) => {
    const create_element = document.createElement("div");
    create_element.classList.add("box");
    create_element.innerHTML = `
    
    <h1 class="textt">${inpval}</h1>
    
    <div class="icoms">
    <i id="bbttnn" class='cursor-pointer fa-regular fa-pen-to-square' onclick="update('${inpval}')"></i>
    <i class='cursor-pointer fa-sharp fa-solid fa-trash' onclick=delete_element(this)></i>
    </div>
    `
    
    document.getElementById("main").appendChild(create_element);
    save_ele(inp_val);
}

const delete_element = (element) => {
    const dlt = element.parentNode.parentNode;
    dlt.remove();
    save_ele();
}

const update = (val) => {
    const  input = document.getElementById("inp");
    const bton = document.getElementById('btn');

    const oldvalue = val;

    input.value = val;
    input.focus();

    bton.innerHTML = `<i class="cursor-pointer fa-regular fa-pen-to-square"></i>`;

 
    
    bton.addEventListener("click",()=>{
        const newvalue = input.value;
        console.log(newv)
    }
    )
};

const update_element = (oldValue, newValue) => {
    const elements = document.querySelectorAll(".textt");
    elements.forEach((element) => {
        if (element.innerHTML === oldValue) {
            element.innerHTML = newValue;
            save_ele();
        }
    });
};



const save_ele = (value) => {

    const t = document.querySelectorAll(".textt")
    const arr = [];

    t.forEach(element=>{
        arr.push(element.innerHTML)
    })


    localStorage.setItem("lists",JSON.stringify(arr));

}

(
    function(){
        const data = JSON.parse(localStorage.getItem("lists"));
        data.forEach(element => {
            add_element(element);
            
        });
    }
)()

