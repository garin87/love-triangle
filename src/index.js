/**
* @param preferences - an array of integers. Indices of people, whom they love
* @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(arr = []) {

var count= 0;
var flag = false; 
for( var i = 0; i < arr.length; i++){
  var SpichoneeA = arr[i] - 1 ;
  var SpichoneeB = arr[SpichoneeA] - 1;
  var SpichoneeC = arr[SpichoneeB] - 1;

  if(SpichoneeA == i){ flag = true};
  if (SpichoneeA == SpichoneeB) { flag =  true};
  if (SpichoneeB == SpichoneeC){ flag = true};
  if (i == SpichoneeC) { count++};
      
}

return Math.floor(count/3);

};
