
const thrush = x => f => f(x);
const tap = f => x => {f(x); return x};
const mult = x => y => x *y

//pipe with  multiple functions
const pipe1 = (...fs) => x =>
    fs.reduce((acc,f) => f(acc),x);

const double = x => x*2
// const pipe = f => x => f(x); 
const pipe = (f , g) => x => g(f(x)); // pipe with two functions

console.log("Pipe multiple functions",pipe1(double,double,double)(10))

const thrushWithMultipleParams = function(x,y) {
  return  function(f) {     
      f(x,y)
    }
}
// Reactive library
class Observable {
    constructor() {
        this.callbacks = [];
    }
    subscribe(callback) {
        this.callbacks.push(callback);
    }
    emit(x,y) {
        // this.callbacks.map((callbackFunc) =>{
        //     callbackFunc(x);
        // });
        this.callbacks.map(thrush(x))
        // this.callbacks.map(thrushWithMultipleParams(x,y))

    }
    pipe(observable) {
        console.log("pipe called")
        this.subscribe(x => observable.emit(x))
        return observable; 
    }
}

class Mapper {
    constructor(anyFunction){
        this.observable = new Observable()
        this.anyFunction = anyFunction
    }
    subscribe(cbs) {
        this.observable.subscribe(cbs)
    }
    emit(x){
        this.observable.emit(this.anyFunction(x));
    }
    static map(f) {
        return new Mapper(f)
    }
}

//Example
const observable = new Observable();

// observable.subscribe(x => console.log(x))
// observable.subscribe(x => console.log(double(x)))

// observable.subscribe(pipe(double,console.log))

//observable.subscribe(pipe(console.log,console.log)) //not work because first will print the x value and next is undefined

// observable.subscribe(pipe(tap(console.log),console.log))

// observable.subscribe((x,y) => console.log(x*y))

setTimeout(() => {
    observable.emit(10)
    observable.emit(12)
    observable.emit(-1)
    observable.emit(22)
},100)


// const copy1 = new Observable()
// const copy2 = new Observable()

// const copy1 = new Mapper();
// observable.pipe(copy1)
const doubler = observable.pipe(new Mapper(x => x*2))
// const copy2 = new Mapper();
// observable.pipe(copy2)
const tripler = observable.pipe(new Mapper(x => x*3))

// const Rx = {}
// Rx.map = f => new Mapper(f)
// const doubled = observable.pipe(Rx.map(mult(2)));


const doubleThenAddTen = observable.pipe(new Mapper(x => x*2),new Mapper(x => x+10))

// observable.subscribe(x => {
//     doubled.emit*(x * 2)
// })
// doubled.subscribe(console.log)
doubler.subscribe(console.log)
tripler.subscribe(console.log)
// console.log("----------------------------->")
// observable.emit(10,10)
// observable.emit(11,11)
// observable.emit(12,12)
// observable.emit(13,13)


// const compose = (f,g) => {
//     return (x) => f(g(x))
// }

// const something = compose(x => x+1,x => x+2)
// console.log(something(100));

// // map is a combinator
// const map = (fn,list) => {
//     const rv =[];
//     for(let i=0;i<list.length;i++) {
//         rv[i] = fn(list[i])
//     }
//     return rv
// }
// console.log(map(x => x+1,[1,2,3,4,5]))

// const mapRecursion = (fn,list) => {
// if(list.length > 0) {
// const [x,...ys] = list;
// return [fn(x),...map(fn,ys)]
// }
// return []
// }
// console.log(map(x => x+1,[1,2,3,4,5]))
// const head = ([x,...xs]) => x
// console.log(head([1,23,4]))