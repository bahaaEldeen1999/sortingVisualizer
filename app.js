const parent = document.getElementById("container");
let h3 = document.querySelector('#chooseSpeed h3');

let colors = ['lightblue','pink','lightgreen'];
let a = createRandArray(parent,100,colors);
let time = .5;
let order = "inc";
let sorty = false;
function generateArray(){
    let val = Number(document.querySelector('#generateArray input').value);
   a.forEach(el=>el.div.parentNode.removeChild(el.div))
   a = [];
   a = createRandArray(parent,val,colors);
   sorty = false;
}
async function sortArray(){
    
    if(!sorty){
        sorty = true;
    let select = document.querySelector('#chooseSort select')
    let sorting =  select.options[select.selectedIndex].value;
    switch(sorting){
        case "bubble":
            await bubbleSort(a,time,colors)
            break;
        case "insertion":
            await insertionSortRec(a,time,colors)
            break;
        case "merge":
            await mergeSort(a,time,colors);
            break;
        case "quick":
            await quickSort(a,time,colors)
            break;
        case "select":
            await selectionSort(a,"inc",time,colors)
            break;
    }
    sorty = false;
}
}
h3.innerHTML = "your sorting speed is " + 10 ; 
function setSpeed(){
    let val = Number(document.querySelector('#chooseSpeed input').value);
    if( val > 100 ){
        document.querySelector('#chooseSpeed input').value = 
        "100";
        val = 100;
    }
    if(val == 0) {
        document.querySelector('#chooseSpeed input').value = 
        "1";
        val = 1;
    }
    if(val!=0 && val <= 100){
    time = 20/val; 
   
    h3.innerHTML = "your sorting speed is " + val ; 
    }
}