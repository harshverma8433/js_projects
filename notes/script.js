let btn = document.querySelector(".btn");
let main = document.querySelector(".main");

const save = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes)
    const data = [];
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
    )

    console.log(data);
    localStorage.setItem("notes",JSON.stringify(data)); 
}

btn.addEventListener(
    "click",()=>{
        const create = document.createElement("div");
        create.classList.add("note");
        create.innerHTML = 
            `
            <div class="tool">
                <i class="save fa-sharp fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea></textarea
            `

            main.appendChild(create);

            create.querySelector(".trash").addEventListener(
                "click" , ()=>{
                    create.remove();
                }
            )

            create.querySelector(".save").addEventListener(
                "click", ()=>{
                    save();
                }
            )
        
    }
)
