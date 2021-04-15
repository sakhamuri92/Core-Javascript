/*   let a=5
   
   let add = function(){
   let b= 5
   return a+b
   }
   //console.log(add())
   console.dir(add)   */

/* var a = [0,1]

for(var i=0;i<a.length;i++){
setTimeout(() =>{
k(a[i],i)
},6000)
}
function k(v,i){
console.log(v,i)
} */
/* a.map((d,i) =>{
setTimeout(() =>{
console.log(d,i)
},6000)
}) */

/* function k(v,i){
console.log(v,i)
} */
/* 
var b = 11;
function x(){
  var y=10;
  var z = function(){
    console.log(y);
  }
  return z;
}

console.dir(x); */


/* var f;
let i = 1; */

/* 
  f = function(){
 i=10
    console.log(i);
    return function z(){
      console.log(i)
    }
  }
let a = f()
	
console.dir(a);
f();
	
var dd;
if(true){
let k =000
dd= function(){
console.log(k)
}
}
console.dir(dd) */
/* var x;
for(x=0;x<3;x++){
console.log(x);
    setTimeout(() => {
        console.log(x);
    },2000);
}

console.log('first'); */



for (var i = 0; i < 3; i++) {
    function x(i) {
        setTimeout(() => {
            console.log(i)
        }, 3000)
    }
    x(i)
}

for (var i = 0; i < 3; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i)
        }, 3000)
    })(i)
}

let a = 5

let add = function () {
    let b = 5
    return a + b
}
console.dir(add)
