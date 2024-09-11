// let image = document.querySelectorAll("img#iamge");

// let counter = 0;

// console.log(image[counter].src)



let counter = 0;
let images = document.querySelectorAll("#image");
images.forEach(
    func = (element , index) => {
        element.style.left = `${index*100}%`;


    }
)



document.getElementById("previous").addEventListener(
    "click", function prev() {
        if(counter==0){
            counter = image.length-1;
        }else{
            counter--;
        }

        slider();
        
    }
    )


document.getElementById("next").addEventListener(
    "click", function next() {
        if(counter==image.length-1){
            counter = 0;
        }else{
            counter++;
        }

       slider();
        
    }
)

const slider = () => {
    images.forEach(
        func = (element) => {
            element.style.transform = `translateX(-${counter*100}%)`

        }
    )
}



