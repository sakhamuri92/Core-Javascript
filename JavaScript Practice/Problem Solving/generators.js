/* function makeAjaxCall(url,callback){
  try {
   fetch(url).then((res)=>  callback(null,res.json()));
  } catch(error) {
  callback(error,null)
  }
}

function request(url) {
  return new Promise((resolve,reject) =>{
    return  makeAjaxCall(url,function(err,res){
      if(err) {
      reject(err)
      }else {
      resolve(res)
      }
    })
  })
}


function *callGenerator() {
yield  request('https://api.github.com/users')
}
console.log(callGenerator().next()); 

let g = callGenerator().next();
g.value.then((res) => {
    console.log("res====>", res)
  })
 */

function makeAjaxCall(url,callback){
    fetch(url)
         .then(response => response.json())
         .then(data => callback(null,data));
   }
   
   function request(url) {
     return new Promise((resolve,reject) =>{
         makeAjaxCall(url,function(err,res){
         if(err) {
         reject(err)
         }else {
         resolve(res)
         }
       })
     })
   }
   
   
   function *callGenerator() {
   yield  request('https://api.github.com/users')
   } 
    let g1 = callGenerator().next();
   g1.value.then((res) => {
       console.log("res====>", res)
     }) 
   
   
   
   /* 
   
   
   
   async function makeAjaxCall(url, callback) {
     try {
       const res = await fetch(url);
       console.log(res)
       callback(null, res.json())
     } catch (error) {
       callback(error, null)
     }
   }
   
   function request(url) {
      makeAjaxCall(url, function(err, res) {
       if (err) {
         return err
       } else {
       console.log(res,"=---")
         return res
       }
     })
   
   }
   
   
   function* callGenerator() {
     yield request('https://api.github.com/users')
   }
   
   let g1 = callGenerator().next();
   console.log(g1)
   g1.value.then((d) => {
       console.log("res====>", d)
     }) 
   
    */
   
   
   
   
   
   
   
   
   
   
   
   
   