/*
**loop throught j->1 to j-> n
**insert arr[j] to right position in array from i->0 to i->j-1
**each loop arr[0 ---> j] is sorted 
*/

async function insertionSort(arr, order,time){
 
    //let sorted  =  arr;
     //copyArr(arr,sorted);
     if( order == "inc" ){
     for(let j=1;j<arr.length;j++){
       let keyEl = arr[j];
       let i = j-1;
      //await Sleep(time);
        while(i>=0 && arr[i].val > keyEl.val){
          //  await Sleep(time);
           // colorSelected(arr,i,j,"red");
           // await Sleep(time);
            swap(arr,i,i+1);
            
            i--;
            
        }
       //await Sleep(time);
         
      //colorSorted(arr,arr.length-j-1,"green")
        
     }
     }else if(order == "dec"){
      for(let j=1;j<arr.length;j++){
       let keyEl = arr[j];
       let i = j-1;
    //   await Sleep(time);
       while(i>=0 && arr[i].val < keyEl.val){
      //  colorSelected(arr,i,i+1,"red")
       // await Sleep(time);
         swap(arr,i,i+1);
         i--;
         //await Sleep(time);
       //  colorSorted(arr,i,"green")
       }
     }
     
     
     
     }
     
     //return sorted;
   }
   
   async function insertionSortRecCall( arr, ind,time){
   if(ind == arr.length){
   return;
   }
   let i=ind-1;
   while( i>=0 && arr[i].val > arr[i+1].val ){
            await Sleep(time);
            colorSelected(arr,i,ind,"red");
            //console.log(1)
           // await Sleep(time);
            swap(arr,i,i+1);
           
          //  await Sleep(time)
           // console.log(2)
            colorUnSelected(arr,i,i+1,"blue")
            i--;
   } 
  //  await Sleep(time);
   
   await insertionSortRecCall(arr,ind+1,time);
   }
   
  async function insertionSortRec( arr,time){
   //let  sorted = [];
 //  copyArr(arr,sorted);
  await insertionSortRecCall(arr,0,time);
   
  // return sorted;]
  for(let i=0;i<arr.length;i++){
      await Sleep(time)
      colorSorted(arr,i,"green")
  }
   
   
   }
// let a = createRandArray(document.getElementById("container"),100);
// insertionSortRec(a,0)
   