let decrease;

function countDown(num){
    console.log(num);
    if(num <= 1){
        clearInterval(decrease);
        console.log("DONE!");
    }
    else{
        decrease = setInterval(countDown(num-1), 1000);
    }
}


let rand = 0;
let done;
let counter = 0;
function randomGame(){
    rand = Math.random(0,1);
    if(rand > 0.75){
        clearInterval(done);
        console.log(counter);
    }
    else{
        counter++;
        done = setInterval(randomGame, 1000);
    }
    
}