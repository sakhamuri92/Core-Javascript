// call apply bind

let obj = {n:5}

let add = function(a){
return this.n+a
}

console.log(add.call(obj,5))

let add1 = function(a,b){
return this.n+a+b
}
let arr= [4,5]
console.log(add1.apply(obj,arr))


let add2 = function(a,b){
return this.n+a+b
}
let d = add2.bind(obj)
console.log(d(4,5))


var cat = {
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
       console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
       nestedFunction = function () {
          console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
       }
       nestedFunction();
       //nestedFunction.apply(this);
  
 //      var storeFunction = nestedFunction.bind(this);
 //          storeFunction();
       }
 }
 cat.printInfo();
 
 
 https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/
 
 var cat = {
  
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
       console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly
  
       nestedFunction = function() {
           console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
       }
  
    nestedFunction.call(this);
    }
 }
 cat.printInfo();
 var cat = {
  
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
         let self= this
       nestedFunctionArrow = () => {
           console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
       }
       nestedFunctionArrow()
       nestedFunction = function() {
           console.log("Name:", self.name, "Color:", self.color, "Age:", self.age); //line 2, loses cat scope
       }
  
    nestedFunction();
    }
 }
 cat.printInfo();
 
 
 
//  binding
 
 var cat = {
  
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
       console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly
  
       nestedFunction = function() {
           console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
       }
  
    nestedFunction.bind(this);
    }
 }
 cat.printInfo();
 
//  flat arrow functions
 
 var cat = {
  
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
       console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly
  
       nestedFunction = ()=> {
           console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
       }
  
    nestedFunction();
    }
 }
 cat.printInfo();
 
 
 var cat = {
  
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
       console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly
  
       nestedFunction = function() {
           console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
       }
  
    nestedFunction.bind(this)();
    }
 }
 cat.printInfo();
 
 
//  call ,apply,bind
 
 var pokemon = {
     firstname: 'Pika',
     lastname: 'Chu ',
     getPokeName: function() {
         var fullname = this.firstname + ' ' + this.lastname;
         return fullname;
     }
 };
 
 var pokemonName = function(snack, hobby) {
     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
 };
 
 pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
 pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
 
 
 
 
 
 var pokemon = {
     firstname: 'Pika',
     lastname: 'Chu ',
     getPokeName: function() {
         var fullname = this.firstname + ' ' + this.lastname;
         return fullname;
     }
 };
 
 var pokemonName = function(snack, hobby) {
     console.log(this.getPokeName() + 'I choose you!');
     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
 };
 
 var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
 
 logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms


 //if we right inner function as normal the this refernce will be undefined for 
//this you can make inner function as arrow or you can 
//do let _this = this and access that in inner function and other way is below

var module = {
    x: 42,
    getX() {
      function a(){
          console.log(this.x)
      }
      a.call(this);
    }
  }
  module.getX();
  
  var module = {
    x: 42,
    getX() {
    var _this=this
      function a(){
          console.log(_this.x)
      }
      a();
    }
  }
  module.getX();
  
  
  //console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  //var boundGetX = unboundGetX.bind(module);
  //console.log(boundGetX());
  // expected output: 42
  
  
  
  //you cannot use call,apply and bind for arrow funciton from es6
  var module = {
    x: 42,
    getX: () => {
      console.log(this.x);
       a = () => {
          console.log(this.x)
      }
      a();
    }
  }
  module.getX();

  // prototypes
  function cat(name){
    this.name=name
    }
    cat.prototype.age = 4
    
    var c1 = new cat("swaroop")
    var c2 =  new cat("swaroop2")
    
    console.log(cat.prototype)
    console.log(c1.__proto__)
    console.log(c2.__proto__)
    console.log(cat.age)
    c1.__proto__.age = 5
    console.log(cat.age)
    console.log(c1.age)
    console.log("=========>",c2.age)
    
    console.log("==========>",c1.__proto__)
    console.log(c2.__proto__)
    
    
    function animal(voice){
    this.voice=voice || "venky"
    }
    animal.prototype.speak = function(){
    console.log("speak")
    }
    
    function cat(name){
    animal.call(this,"swaroop")
    this.name=name
    }
    cat.prototype = Object.create(animal.prototype)
    
    cat.prototype.constructor = cat
    console.log("==========>",cat.prototype)
    var c = new cat("dfd")
    c.speak("kol")

    function hello() {

         setTimeout(function() {
         console.log(this.name); 
         }, 100);
        }
        hello.call({name: 'tom'})

function hello() {
let self =this
 setTimeout(function() {
 console.log(self.name); 
 }, 100);
}
hello.call({name: 'tom'})

        // pass an arrow function to setTimeout
function hello() {
    setTimeout(() => {
    console.log(this.name); // -> `tom` will be logged.
    }, 100);
   }
   hello.call({name: 'tom'})

   function hello() {

      setTimeout(function() {
        console.log(obj.name);
      }, 4000);
    const obj = {name:"venky"}
    }
    hello()

    var obj = {name: 'tom'}
function hello() {
  setTimeout(function() {
    console.log(this.name);
  }, 100);
}
hello.call(obj) //undefined


