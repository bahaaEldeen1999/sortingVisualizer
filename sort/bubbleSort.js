async function bubbleSort(array,time,colors){
    const size = array.length;
    for(let i=0;i<size;i++){
        //await Sleep(time);
        for(let j = i+1;j<size;j++){
            if( array[i].val > array[j].val ){
                await colorSelected(array,i,j,colors[1]);
               // await Sleep(time);
              
              swap(array,i,j);
              await Sleep(time);
              await colorUnSelected(array,i,j,colors[0]);
              //colorSorted(array,i,j,"green")
            }
           
        }
    //    await Sleep(time);
       // await colorSorted(array,i,colors[2]);

    }
    for(let i=0;i<size;i++){
        await Sleep(time);
    await colorSorted(array,i,colors[2]);
    }

}
//let aa = createRandArray(document.getElementById("container"),100,["red","blue","black"]);


//bubbleSort(aa,5,["red","blue","black"])
