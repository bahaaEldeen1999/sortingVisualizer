async function selectionSort( arr, order,time,colors){
     
   
    if(order == "inc"){
     for(let i=0;i<arr.length-1;i++){
     let small = 999999999;
     let ind = -1;
     for(let j=i;j<arr.length;j++){
      await Sleep(time);
       if(arr[j].val < small){
       small = arr[j].val;
       ind = j;
       }  
     }
     await Sleep(time);
     await colorSelected(arr,ind,i,colors[1]);
     swap(arr,ind,i);
     //await Sleep(time);
     await colorUnSelected(arr,ind,i,colors[0]);

    
     } 
    }else if(order == "dec"){
     for(let i=0;i<arr.length-1;i++){
        let max = -999999999;
     let ind = -1;
     for(let j=i;j<arr.length;j++){
      await Sleep(time);
       if(arr[j].val > max){
       max = arr[j].val;
       ind = j;
       }  
     }
     await Sleep(time);
     await colorSelected(arr,ind,i,colors[1]);
     
     swap(arr,ind,i);
    // await Sleep(time);
     await colorUnSelected(arr,ind,i,colors[1]);

    
     }
    
    
    }
    for(let i=0;i<arr.length;i++){
        await Sleep(.5)
        colorSorted(arr,i,colors[2])
    } 
    
    
   
   }
  //  let a = createRandArray(document.getElementById("container"),100);
  //  //quickSort(a,10);
  //  selectionSort(a,"inc",10)