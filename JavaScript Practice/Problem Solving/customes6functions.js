
String.prototype.toLowerCase = function(){
    return this.split('').map(function(c){
       var cc = c.charCodeAt(0);
       if (cc > 64 && cc < 91) {
          return String.fromCharCode(cc + 32);
       }
       return c;
    }).join('');
}


var ar = [1,2,3,4]
var result = ar.map(item => item *2)

Array.prototype.customMap = function(operation){
		var final = []
    const parameterArr = this;
		for(let i=0;i<parameterArr.length;i++){
    		final.push(operation(parameterArr[i]))
    }
    return final;
}

const transformed = ar.customMap(item => item + 2 )
console.log(transformed)

var withFilter = ar.filter(item => item > 3)
console.log(withFilter,"withFilter")

Array.prototype.customFilter = function(operation) {
 	 var filteredArr = []
   const actualArr = this;
   for(let i=0;i<actualArr.length;i++){
     if(operation(actualArr[i])) {
          filteredArr.push(actualArr[i])
     }
   }
   return filteredArr
}
const customFilterResult = ar.customFilter((item) => item > 1)
console.log(customFilterResult,"customFilterResult")

var totalCount = ar.reduce((intialValue,current) => intialValue + current,0)
console.log(totalCount)


Array.prototype.customReduce = function(reducer,initialValue){	
	if(typeof reducer !== 'function') return;
	let reducedResult = initialValue;
  const actualArr = this;
  for(let i=0;i<actualArr.length;i++){
    	reducedResult = reducer(reducedResult, actualArr[i])
  }
  return reducedResult;
}

var total = ar.customReduce((initialValue,currentValue) =>{ console.log("initialValue: ", initialValue,currentValue); return initialValue + currentValue },0)
console.log(total,"=========total")

let reducedArr = []
var newArr = ar.customReduce((initialValue,currentValue) =>{  console.log("initialValue: ", initialValue); return [...initialValue,currentValue]},[])
console.log(newArr) 


const sortedArr = [2,4,1,0].sort((a,b) => { console.log(a,"=====",b); return b-a })

console.log(sortedArr)

var name = {
    firstname:"sak"
    }
    function greet(x,o,a,b,c){
        console.log("my name is ",this.firstname,x,o,a,b,c);
    }
    
    
    Function.prototype.mybind = function(...args){
    const obj = this,params=args.slice(1)
    console.log(args,"===============")
    return function(...args2){
    console.log(args2)
        obj.apply(args[0],[...params,...args2]);
    }
    }
    
    var myf = greet.mybind(name,"don","swarop donkey");
    
    myf('helllo',1,2);

    
/* Array.prototype.customSort = function(sortoperation) {
const arr = this;
for(let i=0;i<arr.length;i++) {
    sortoperation(arr[i],arr[i+1])
}
return arr
}

const customsortFunc = [2,1,5].customSort((a,b) => a-b)
console.log(customsortFunc) */
