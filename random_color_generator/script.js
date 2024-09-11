const getcolor = () => {
    const randomnum = Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomnum.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;
}

document.getElementById("btn").addEventListener(
    "click",getcolor
)

getcolor();