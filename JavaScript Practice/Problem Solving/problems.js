
console.log(x)
x = 10
x = function () { }

    (function () {

        var objA = {
            foo: 'foo',
            bar: 'bar'
        };
        var objB = {
            foo: 'foo',
            bar: 'bar'
        }
        console.log(objA == objB)
        console.log(objA === objB)

    })()


class MyClass {
    constructor(name, id) {
        this.name = name;
        this.id = id
    }
    add_Address(add) {
        this.address = add
    }
    getDetails() {
        console.log(`Name is ${this.name} address : ${this.address}`)
    }
    get getAddress() {
        return this.address
    }
    add(arg1, arg2) {
        const s = new ClassOne().addHere(arg1, arg2);
        // return  s
    }
}
let c = new MyClass('venk', 1)
c.getAddress //it will throw error here

class Test {
    returnName() {
        return this
    }
    returnLname() {
        console.log("test")

    }
}

const t = new Test();
t.returnName().returnLname();


let ar = [1, [2, 3, [4, [5]], "str", [[43, 34, -1, -2]]]]
console.log(ar.flat(Infinity, []))
let result = []
function flatten(a) {
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            flatten(a[i]);
        } else {
            result.push(a[i])
        }
    }
}
flatten(ar)
console.log(result)


function usingReduce(r) {
    return r.reduce(
        (previous, current) => Array.isArray(current) ? [...previous, ...usingReduce(current)] : [...previous, current], [])
}


console.log(usingReduce(ar))


function flattenWithLocalResult(a) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            result = result.concat(flattenWithLocalResult(a[i]));
        } else {
            result.push(a[i])
        }
    }
    return result
}

console.log("Local variable", flattenWithLocalResult(ar))
function flattenWithClosure() {
    let result = []
    return function inner(a) {
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i])) {
                inner(a[i]);
            } else {
                result.push(a[i])
            }
        }
        return result
    }

}


function flattenWithClosure() {
    let result = []
    let smallNum = 0;
    return function inner(a) {
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i])) {
                inner(a[i]);
            } else {
                if (a[i] < smallNum) {
                    smallNum = a[i]
                } else {
                    result.push(a[i])
                }
            }
        }
        console.log(smallNum, "=======>")
        return smallNum
    }

}
let s = flattenWithClosure()

console.log("closure", s(ar))



// program for occurance

let s = "venkyjangaiahaaaddetedddd".split('');
let o = "";
count =1
for(let i=0;i<s.length-1;i++){
if(s[i] == s[i+1]) {
	count++;
}else {
o +=s[i]+count;

count = 1
}
}

// program for chunks

let c = [1,3,4,5,6];

 var results = [];
    
    while (c.length) {
        results.push(c.splice(0, 2));
    }
    
    results;
	
// Singletonpattern
	
const Singleton = (function(){
    var instance = null;

    function createInstance() {
        instance = new Object("");
        return instance;
    }
    return {
        getInstance: function() {
        if(!instance) {
            return createInstance();
        }
            return instance;
        
        }
    }
})();

var instance1 = Singleton.getInstance()
var instance2 = Singleton.getInstance()
console.log(instance1 == instance2)

// program for dream 11 ranks
let scores = [48,29,28,48,23,22,23,22,1,29,29,15,13]

const sortedScores = scores.sort((a,b) => { return b-a })
console.log(sortedScores)
let ranks = [];
let count  = 0
for(let i=0;i<sortedScores.length;i++) {
let obj = {};
if(ranks.length == 0) {
obj.score = sortedScores[i];
obj.rank = 1

ranks.push(obj)
obj = {}
} else if(scores[i-1] == scores[i]) {
	
	obj.score = ranks[ranks.length-1].score;
		obj.rank = ranks[ranks.length-1].rank;

		ranks.push(obj);
		obj = {}
		
}else {
	if((scores[i] == scores[i+1])){
		
		if(ranks[ranks.length-1].score == scores[i]) {
			obj.score = ranks[ranks.length-1].score;
			obj.rank = ranks[ranks.length-1].rank;
			ranks.push(obj);
			obj = {}
		}else {
		
			obj.score = scores[i]
			obj.rank = ranks.length+1;
			ranks.push(obj);
			obj = {}}
	
	} else {
		
		obj.score = scores[i]
		obj.rank = ranks.length+1;
		ranks.push(obj);
		obj = {}
		
	}
}
}
console.log(ranks);

