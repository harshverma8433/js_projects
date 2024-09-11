let enddate = "13 June 2024 14:45";

document.getElementById("end-date").innerText = enddate;

let inputs = document.querySelectorAll("input");

const clock = () => {
    enddate = new Date(enddate);
    const currentdate = new Date()
    
    // console.log(enddate);
   
    let diff = enddate - currentdate; // milliseconds
    diff = diff/1000 // seconds
    console.log(diff);

    if(diff<0){
        return;
    }

    
    // inputs[0].value = Math.floor(diff/3600/24);   // Days
    // inputs[1].value = Math.floor(diff/3600)%24;   // Hours
    // inputs[2].value = Math.floor(diff/60)%60;     // Minutes
    // inputs[3].value = Math.floor(diff)%60;        // Secondscurrentdate
    inputs[0].value = currentdate.getDays();   // Days
    inputs[1].value = currentdate.getHours();   // Hours
    inputs[2].value = currentdate.getMinutes();     // Minutes
    inputs[3].value = currentdate.getSeonds();    // Seconds
    console.log(inputs[0].value);
}

clock();



/*
1day = 24hr
1hr = 60min
60min = 3600sec 
*/

setInterval(
    () => {
        clock();
    },1000
)