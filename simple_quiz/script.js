const questions = [
    {
        ques : "Which is the largest animal in the world",
        o1 : "Shark",
        o2 : "Blue Whale",
        o3 : "Elephant",
        o4 : "Giraffe",
        answer : "Shark"
    },

    {
        ques : "Which is the smallest country in the world",
        o1 : "Vatican City",
        o2 : "Bhutan",
        o3 : "Nepal",
        o4 : "Sri Lanka",
        answer:"Vatican City"
        
    },
    
    {
        ques : "Which is the largest desert in the world",
        o1 : "kalhari",
        o2 : "Gobi",
        o3 : "Sahara ",
        o4 : "Antarctica",
        answer : "Antarctica"
    },

    {
        ques : "Which is the smallest continent in the world",
        o1 : "Asia",
        o2 : "Australia",
        o3 : "Arctic ",
        o4 : "Africa",
        answer : "Australia"
    }
]

let idx = 0;

let right = 0;
let wrong = 0;

let question = document.getElementById("question")
let options = document.querySelectorAll("input")

const reset = () => {
    options.forEach(option=>{
        option. style.background = ""; 
        option. style.border = ""; 
        option. style.color = ""; 
})}

const create = () => {
    
    if(idx >= questions.length){
        return ;
    }
    const data = questions[idx];
    question.innerHTML = data.ques;
    options[0].value = data.o1;
    options[1].value = data.o2;
    options[2].value = data.o3;
    options[3].value = data.o4;
    reset();
    check();
}
create();

function check() {
        
    options.forEach((element) => {
        const data = questions[idx];
        element.addEventListener("click", function () {
            if (data.answer == element.value) {
                right++;
                element.style.background = "green";
                element.style.border = "green";
                element.style.color = "white";
            } 
            else {
                wrong++;
                element.style.background = "red";
                element.style.border = "red";
                element.style.color = "white";
                options.forEach((ele) => {
                    if (data.answer == ele.value) {
                    ele.style.background = "green";
                    ele.style.border = "green";
                    ele.style.color = "white";
                    }
                });
            }
        });
    });
}


document.getElementById("btn").addEventListener(
    "click",()=>{
        if(idx === questions.length-1){

            final_result();
        }
        else{
            idx++;
            create();
        }
    }
)

const final_result = () => {
    document.getElementById("box").innerHTML =
    `
        <div class="text-2xl font-semibold"> Quiz Completed! Thank you for Playing the game ${right}/${questions.length} are correct.</div>
    `
}