//My code:
var emptyList=[0,1]

function fibonacciGenerator (n) {
  while(n!=emptyList.length){
   emptyList.push(emptyList[emptyList.length -1] +emptyList[emptyList.length-2])
    
  }
  console.log(emptyList);
}



fibonacciGenerator (5);

//The original code:

var emptyList=[]

function fibonacciGenerator (n) {
  if (n===1){
    emptyList=[0];
  }
  else if (n===2){
    emptyList=[0,1];
  }else{
    emptyList=[0,1];
  }
  while(n!=emptyList.length){
   emptyList.push(emptyList[emptyList.length -1] +emptyList[emptyList.length-2])
    
  }
  console.log(emptyList);
}



fibonacciGenerator (6);
