const display = (message) => {
    let createele = document.createElement("div")
    createele.classList.add("toast");

    if(message === "Successfully Submitted"){

        createele.innerHTML = `
            <i class="fa-sharp fa-solid fa-circle-check fa-2xl " style="color: #238500;"></i> <h1>${message}</h1> ` ;
    }

    else if(message === "Please Fix the Error"){
        createele.innerHTML = `
            <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #ea1010;"></i>  <h1>${message}</h1>
        `
        createele.classList.add("error")
    }

    else if(message === "Invalid input,check again"){
        createele.innerHTML = `
        <i class="fa-solid fa-circle-exclamation fa-2xl" style="color: #e6e03d;"></i>   <h1>${message}</h1>
        `
        createele.classList.add("invalid")
    }

    document.getElementById("toastbox").appendChild(createele);

    setTimeout(()=>{
        createele.remove();
    },5000)

}