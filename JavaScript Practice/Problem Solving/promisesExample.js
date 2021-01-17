

let promisetocleanroom = new Promise(function (resolve, reject) {
    let isclean = false
    if (isclean) {
        resolve('clean')
    } else {
        reject('not clean')
    }
});

promisetocleanroom.then(function (fromresolve) {
    console.log('from resolve===>', fromresolve)
}).catch(function (fromreject) {
    console.log('from reject', fromreject)
})

let cleanroom = function () {
    return new Promise(function (resolve, reject) {
        resolve('cleanroom')
    })
}

let removegarbage = function (msg) {
    return new Promise(function (resolve, reject) {
        resolve(msg, 'remove garbage')
    })

}

let winice = function (msg) {
    return new Promise(function (resolve, reject) {
        resolve(msg, 'ice cream')
    })
}
Promise.all([cleanroom(), removegarbage(), winice()]).then(function () {
    console.log("all finished")
})

Promise.race([cleanroom(), removegarbage(), winice()]).then(function () {
    console.log("any one promise is finished")
})


cleanroom().then(function (result) {
    return removegarbage(result)
}).then(function (result) {
    return winice(result)
}).then(function (result) {
    console.log(result)
})

    


const getData = function() { return Promise.reject("oops")}
Promise.resolve()
.then(v => {
   return getData()
   })
   .then(v => {
       console.log(v,"succsss");
   })
   .catch(err => {
       console.log(err,"-------error",err.length);
      
   })
   
const getThrowError = function() { throw new Error("oops")}
Promise.resolve()
.then(v => {
     getThrowError()
   },(err) => console.log)
   .then(v => {
       console.log(v,"succsss");
   })
   .catch(err => {
       console.log(err,"-------error",err.message.length);
      
   })
   
   
const promisify = (item,delay) => new Promise((resolve,reject) => setTimeout(() => resolve(item),delay))

const a = () => promisify('a',200)
const b = () => promisify('b',1000)

const p1 =  new Promise((resolve,reject) => {
return setTimeout(() => resolve('p1'),1000)
})

const p2 =  new Promise((resolve,reject) => {
return setTimeout(() => resolve('p2'),1000)
})

let ps = [a,b]

Promise.all(ps.map(res => res())).then((res) => console.log(res))


Promise.all([p1,p2]).then((res) => console.log(res))
Promise.all([a(),b()]).then((res) => console.log(res))


let urls = ["https://jsonplaceholder.typicode.com/posts",
						 "https://jsonplaceholder.typicode.com/albums",
							"https://jsonplaceholder.typicode.com/users"]

const promises = urls.map(url => fetch(url).then((resp) => resp.json()))

Promise.all(promises).then((s) => console.log(s[0]))


 Promise.all(
urls.map(url =>  fetch(url).then((resp) => resp.json()).then((res) => console.log(res)))
) 

// async  await first way
const promises1 = urls.map(url => fetch(url).then((resp) => resp.json()))

const getdata = async function() {
const [posts,albums,users] = await Promise.all(promises1);
}
getdata()


// second way
const getData = async function() {
const p1 = fetch(urls[0]).then((resp) => resp.json())
const p2 = fetch(urls[1]).then((resp) => resp.json())

const posts = await p1
const albums = await p1
console.log(posts,"==========")
}
getData();


// for loop promises
const fruitBasket = {
    apple: 27, 
    grape: 0,
    pear: 14 
  }
  
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  const getNumFruit = fruit => {
    /* return sleep(1000).then(v => fruitBasket[fruit]) */
   return 
  }
  
  let keys = Object.keys(fruitBasket);
  for(var i =0; i< keys.length; i++){
   new Promise(resolve => setTimeout(resolve(fruitBasket[keys[i]]), ms))
   .then(num => console.log(num))
     /* getNumFruit(keys[i])
        .then(num => console.log(num)) */
  }
  
  
  const runLoop =  async () => {
  console.log('start')
  const p = [1,2,3].map(async (v) =>{
    return await v
  })
  const vs = await Promise.all(p)
  console.log(vs)
  console.log('end')
  }
  runLoop()
  
  const reduceLoop = async () =>{
  const p = [1,2,3].map(
  async (accumulator,currentValue) =>  { return await accumulator + currentValue })
  
  console.log("sum is",p)
  }
  reduceLoop()


  const getUsers = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(posts => console.log(posts))
    }
    
    getUsers()

    
    const u = {
    'name':'venky'
    }
    const newUser = user => {
        const options = {
            method:'POST',
            body:JSON.stringify(user),
            headers:new Headers({
            'Content-Type':'application/json'
            })
        }
        
    return fetch('https://jsonplaceholder.typicode.com/users',options)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error))
    }
    
    newUser(u)
    
    
    const service = {
    getPeople: () => axios({url:'https://jsonplaceholder.typicode.com/users'}),
    getPlaces: () => axios({url:'https://jsonplaceholder.typicode.com/users'})
    }
    
    async function example() {
    try {
    const people = await service.getPeople()
    const places = await service.getPlaces()
    console.log({
    people:people.data,
    places:places.data
    })
    }catch(err){
    console.log(err)
    }
    }
    
    
    
    
    
    
    https://medium.com/adobetech/how-to-combine-rest-api-calls-with-javascript-promises-in-node-js-or-openwhisk-d96cbc10f299
    
    
    
    //ES6 fetch api and promises
    
    
    class Devlob {
       get (url) {
          let promise = new Promise((resolve, reject) => {
             fetch(url)
                .then(response => {
                   resolve(response.json().then(data => (
                      data.results
                   )))
                })
               .catch(response => {
                  reject("Api call failed!")
               })
             })
            .then(response => {
               console.log(response)
            })
            .catch(response => {
               console.log('error: ' + response)
            })
        }
    }
    let devlob = new Devlob()
    devlob.get("https://randomuser.me/api/?results=5")
    