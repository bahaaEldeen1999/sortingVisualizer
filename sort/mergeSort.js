async function merge(arr, l, m ,  r,time){
    
    let n1 = m-l+1;
    let n2 = r-m;
    let left =[];
    let right =[];
    let k = l;
    //console.log(arr[k])
    for(let i=0;i<n1;i++){
    left[i] = { val : arr[k].val}; ;
    k++;
    }
   // console.log(left)
   // left[n1] = createDiv(document.getElementById("container"),99999); // to avoid checkking if array reached end **always larger
    for(let i=0;i<n2;i++){
    right[i] = { val : arr[k].val};
    k++;
    }
    //right[n2] = createDiv(document.getElementById("container"),9999999);
    let i=0;
    let j=0;
    
    for(let  v = l;v<=r;v++ ){
     await Sleep(time);
    
      if( i < n1 && j < n2){
        if( left[i].val <= right[j].val ){
          //arr[v] = left[i];
          await Sleep(time);
          await colorSelected(arr,v,l+i,"red")
          copyProp(arr[v],left[i])
          await Sleep(time);
          await colorUnSelected(arr,v, l+i ,"blue")
          i++;
        }else{
         // arr[v] = right[j];
         await Sleep(time);
         await colorSelected(arr,v, m+j ,"red")
         copyProp(arr[v],right[j])
         await Sleep(time);
         await colorUnSelected(arr,v, m+j ,"blue")
          j++;
        }
    }else if(i == n1){
    
        //arr[v] =  right[j];//
        await Sleep(time);
        await colorSelected(arr,v, m+j ,"red")
        copyProp(arr[v],right[j])
        await Sleep(time);
        await colorUnSelected(arr,v, m+j ,"blue")
        j++;
    }else{
        
        //arr[v] = left[i];
        await Sleep(time);
        await colorSelected(arr,v, l+i ,"red")
        copyProp(arr[v],left[i])
        await Sleep(time);
        await colorUnSelected(arr,v, l+i ,"blue")
        i++;
    }
    }
    //await Sleep(50);
    
    }
 async function mergeSortCall(arr, l, r,time){
    if( l < r ){
    let m = Math.floor((l+r)/2);
    await Sleep(time);
    await mergeSortCall(arr,l,m,time);
    await Sleep(time);
    await mergeSortCall(arr,m+1,r,time);
    await merge(arr,l,m,r,time);
    }

}
 async function mergeSort( arr,time){

  //  let sorted = [...arr]
    await mergeSortCall(arr,0,arr.length-1,time);
  //  return sorted;
  for(let i=0;i<arr.length;i++){
    await Sleep(time)
    colorSorted(arr,i,"green")
}
}


// let a = createRandArray(document.getElementById("container"),100);
// mergeSort(a,5)

