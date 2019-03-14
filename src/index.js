/**
* @param preferences - an array of integers. Indices of people, whom they love
* @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(arr = []) {

  let count= 0;
let flag = false; 
  
for( let i = 0; i < arr.length; i++){
  let SpichoneeA = arr[i] - 1 ;
  let SpichoneeB = arr[SpichoneeA] - 1;
  let SpichoneeC = arr[SpichoneeB] - 1;

  if(SpichoneeA == i){ flag = true};
  if (SpichoneeA == SpichoneeB) { flag =  true};
  if (SpichoneeB == SpichoneeC){ flag = true};
  if (i == SpichoneeC) { count++};
      
}

return Math.floor(count/3);

};
