const questions = [
    {
        'que' : 'Which of the following is markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JAVASCRIPT',
        'd' : 'PHP',
        'correct' : 'a',
    },
    {
        'que' : 'Which year was javascript was launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : '1999',
        'correct' : 'b'
    },
    {
        'que' : 'Which does HTML stands for',
        'a' : 'Hyper to markup language',
        'b' : 'hypertext markup language',
        'c' : 'all',
        'd' : 'none',
        'correct' : 'b'
    }

]

let right = 0;
let wrong = 0;

let ind = 0;
const inputs = document.querySelectorAll("input");
const create = () => {
    if(ind==questions.length){
        return end();
    }
    reset();
    const data = questions[ind];
    document.getElementById("queshead").innerText = data.que;
    inputs[0].nextElementSibling.innerText = data.a;
    inputs[1].nextElementSibling.innerText = data.b;
    inputs[2].nextElementSibling.innerText = data.c;
    inputs[3].nextElementSibling.innerText = data.d;
}   


const submit = () => {
    let data = questions[ind];
    let ans = getanswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }

    ind++;
    create();
}

const getanswer = () => {
    let v = 0;
    inputs.forEach(
        (input)=>{
            if(input.checked){
                 v = input.value;
            }
        }
    )
    return v;
}

const reset = () => {
    inputs.forEach(
        (input)=>{
            if(input.checked){
                input.checked = false;
            }
            
        }
        )
    }

const end = () => {
    let r = document.getElementById("final");
    r.innerHTML = `
            <div class="text-xl font-semibold">
                <h1>Quiz Completed! Thank you for Playing the game ${right}/${questions.length} are correct.
                <h1>

            </div>
    `
}

    create();   