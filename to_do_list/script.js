const item = document.getElementById("item");
console.log(item);

const list = document.querySelector(".list");
console.log(list);

item.addEventListener("keypress", (element) => {
  if (element.key == "Enter") {
    todolist(item.value);
    item.value = "";
  }
});

const todolist = (item) => {
  const create = document.createElement("li");
  create.id = "delete";
  create.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark cross"></i>
  `;

  
  list.appendChild(create);

  create.addEventListener(
    "click" , 
    () => {
        create.classList.toggle("done");
    }
  )

  create.querySelector("i").addEventListener(
    "click" , ()=>{
        create.remove();
    }
  )


};


