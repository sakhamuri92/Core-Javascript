function print(n) {
    if(n == 0) return n;
     print(n-1,i=5);
    console.log(n,i--);
    }
    print(3)
    
    function fib(n) {
       // Stop condition
        if (n == 0)
            return 0;
     
        // Stop condition
        if (n == 1 || n == 2)
            return 1;
    let result = fib(n-1)+fib(n-2);
    return result
    }
    console.log("fib",fib(6))
    
    function fact(n) {
    if(n == 0 || n == 1) return 1;
    let s = n * fact(n-1);
    console.log(s)
    return s;
    }
    console.log(fact(5)) 
    
    
    function isPal(n) {
      let i=0,j=n.length-1;
      while(i<j) {
        if(n[i] == n[j]){
        i++;
        j--;
        }else{
          return 0;
        }
      }
      return 1;
    }
    console.log(isPal('2002'),"Normal function")
    
    function isPalRecursion(n,i,j) {
    if(i >= j) return 1;
    if(n[i] != n[j]) return "Not equal";
      if(n[i] == n[j]) {
        i++;
        j--;
        const result =  isPalRecursion(n,i,j);
        return result;
      }
    }
    console.log("ispal--->",isPalRecursion('2002',0,'2002'.length-1)) 
    
    
    function pr(n) {
    if(n<1) return;
    pr(n-1)
    pr(n-2)
    console.log(n,"flow---------->")
    }
    pr(4);
    
    
    function count(n) {
    var d=1;
    d++;
    if(n> 1) count(n-1);
    console.log(d)
    }
    count(5);
    
    
    function binarySearch(arr,target,low,high) {
    
    if(high>=low && low <arr.length-1) {
      let mid = Math.ceil(low+(high-low)/2);
      if(target == arr[mid]) {
        return mid;
      }
      if(arr[mid] > target){
           return binarySearch(arr,target,low,mid-1);
      } else {
        return binarySearch(arr,target,mid+1,high);
      }
    }
    
    return -1;
    }
    const a= [1,2,3,4,5,6,7]
    console.log("------binary recursive",binarySearch(a,3,0,a.length-1));
    
    
    var sum = function(arr) {
    if(arr.length == 1) return arr[0];
    return arr[0] + sum(arr.slice(1))
    };
    console.log(sum([1,2,3,4]),"-----sum-------")
    
    
    function range(start,end) {
      if(start === end) return [start];
        return [start].concat(range(start+1,end))
    }
    console.log(range(2,10))
    
    // https://github.com/JS-Challenges/recursion-prompts/blob/master/src/recursion.js
    
    function printPattern(n) {
    let i=0;
    if(n>1) printPattern(n-1);
    let s = ""
    for(i=0;i<n;i++) {
        s+="*"
    }
    console.log(s)
    }
    printPattern(3);