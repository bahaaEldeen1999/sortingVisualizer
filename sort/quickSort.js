async function partitionAroundPivot( arr, l,r,time){
   
   
    let p = arr[r];
    let i = l-1;
    for(let j=l ; j<r ;j++){
        if(arr[j].val < p.val){
           

            i++;
            await Sleep(time)
            await colorSelected(arr,j,i,"red")
            swap(arr,j,i);


            await Sleep(time)
            await colorUnSelected(arr,j,i,"blue")
            
        
        }
    }
    swap(arr,r,i+1);
   await Sleep(time)
   await colorSorted(arr,i+1,"green")
    return i+1;
}
async function quickSortCall( arr, l, h,time){
    if(l<h){
         let p = await partitionAroundPivot(arr,l,h,time);
         

      await  quickSortCall( arr,l,p-1 ,time);
       await  quickSortCall(arr,p+1,h,time);
    }
    
    
}
async function quickSort( arr,time){
    await quickSortCall(arr,0,arr.length-1,time);  
     for(let i=0;i<arr.length;i++){
         colorSorted(arr,i,"green")
     }
 }

//  let a = createRandArray(document.getElementById("container"),100);
//  quickSort(a,10);

   