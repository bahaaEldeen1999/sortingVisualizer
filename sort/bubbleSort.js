async function bubbleSort(array,time){
    const size = array.length;
    for(let i=0;i<size;i++){
        await Sleep(time);
        for(let j = i+1;j<size;j++){
            if( array[i].val > array[j].val ){
                colorSelected(array,i,j,"red");
                await Sleep(time);
              
              swap(array,i,j);
              await Sleep(time);
              colorUnSelected(array,i,j,"blue");
              //colorSorted(array,i,j,"green")
            }
           
        }
        await Sleep(time);
        colorSorted(array,i,"green");
    }

}
//let a = createRandArray(document.getElementById("container"),100);


///bubbleSort(a,5)
