
const api = () => {
    try{
        fetch("https://api.quotable.io/random").then((Response)=>Response.json()).then((data)=>{
            show(data)
        })
    }
    catch(error){
        console.log(error);
    }
}

api();


let quotebtn = document.getElementById("btn-quote");
let tweetbtn = document.getElementById("btn-tweet");

quotebtn.addEventListener(
    "click", ()=>{
        api();
    }
)

const show = (data) => {
    document.getElementById("content").innerHTML = data.content;
    document.getElementById("author").innerHTML = data.author;

    console.log(data)
} 

tweetbtn.addEventListener(
    "click",()=>{
        window.open(href=`https://twitter.com/intent/tweet?text=${document.getElementById("content").innerHTML}`,"Tweet Window" , "width=600,height=300");
    }
)