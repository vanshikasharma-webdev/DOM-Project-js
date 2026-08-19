//Make sure the elements are loaded

document.addEventListener('DOMContentLoaded', ()=>{
//Select elements
const counterValue = document.getElementById('counter-value');
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
//console.log({
    //counterValue,
    //increaseBtn,
    //decreaseBtn,
    //resetBtn,
//})

//Global Value
let count = 0;

//add events to the buttons
increaseBtn.addEventListener("click", () => {
    count++;
    //update the counter value
   // console.log(count);
   //counterValue.textContent = count;
     updateCounter();
});
decreaseBtn.addEventListener("click", () => {
    count--;
    //update the counter value
   // console.log(count);
   //counterValue.textContent = count;
     updateCounter();
});
resetBtn.addEventListener("click", () => {
    count = 0;
    //update the counter value
   // console.log(count);
   //counterValue.textContent = count;
   updateCounter();
});

//update counter fn
function updateCounter(){
    counterValue.textContent = count;
}

});
