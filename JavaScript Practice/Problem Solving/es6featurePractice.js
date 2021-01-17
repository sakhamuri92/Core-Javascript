var data = [{
	"number": "1",
	"amount": "20.08",
	"isPaidByCard": false,
	"status": "C",
}, {
	"number": "2",
	"amount": "20.09",
	"status": "M"
},{
	"number": "3",
	"amount": "20.09",
	"status": "O"
}]


const callOpen = (openPa,i) =>{
		console.log(openPa,i,"------openend")
}
const callMissed = (missedPa) =>{
		console.log(missedPa,"missed")
    callMissedFrom(missedPa)
}

const callMissedFrom = (missedPa) =>{
   console.log(missedPa,"---------")
    
}
data.every(function(val, i) {
console.log("======every======")
  if (val.status === 'C') {
   data[i].isPaidByCard = true;
  }else if(val.status === 'O'){
		callOpen(val,i)
    return false;
  }else if(val.status === 'M'){
		callMissed(val,i)
    return false;
  }
 return true;
});
console.log(data,"-------------")

data.some(function(val, i) {
console.log("======some======")
  if (val.status === 'C') {
   data[i].isPaidByCard = true;
  }else if(val.status === 'O'){
		callOpen(val,i)
    return true;
  }else if(val.status === 'M'){
		callMissed(val,i)
    return true;
  }
});


// Group By with sort example javascript
const arr = [
    {
      "id": "123",
      "swipein": "12:00",
      "swipeout": "15:40"
    },
     {
      "id": "123",
      "swipein": "09:00",
      "swipeout": "11:40"
    },  
    {
      "id": "124",
      "swipein": "13:00",
      "swipeout": "16:00"
    },
    {
      "id": "124",
      "swipein": "09:00",
      "swipeout": "12:40"
    }
  ]
  
  const groupBy = (key,arr) => {
  return arr.reduce((cache,currentVal) => {
  const propertyInCache = currentVal[key]
  if(propertyInCache in cache) {
     return {...cache,[propertyInCache]:cache[propertyInCache].concat(currentVal)}
  }else {
     return {...cache,[propertyInCache]:[currentVal]}
  }
  },{})
  }
  const result = groupBy('id',arr)
  
  function compare(a,b) {
    if (a.swipeout < b.swipeout || (a.swipeout == b.swipeout && a.swipein > b.swipein))
      return -1;
    if (a.swipeout > b.swipeout || (a.swipeout == b.swipeout && a.swipein < b.swipein))
      return 1;
    return 0;
  }
  
  for(let i in result) {
  const ar = result[i];
  result[i] = ar.sort(compare);
  }
  console.log(result)


  //groupby key
  const arr = [
    {
      "id": "123",
      "swipein": "09:00",
      "swipeout": "11:40"
    },
    {
      "id": "123",
      "swipein": "12:00",
      "swipeout": "15:40"
    },
    {
      "id": "124",
      "swipein": "09:00",
      "swipeout": "12:40"
    },
    {
      "id": "124",
      "swipein": "13:00",
      "swipeout": "16:00"
    }
  ]
  
  const groupBy = (key,arr) => {
  return arr.reduce((cache,currentVal) => {
  const propertyInCache = currentVal[key]
  if(propertyInCache in cache) {
     return {...cache,[propertyInCache]:cache[propertyInCache].concat(currentVal)}
  }else {
     return {...cache,[propertyInCache]:[currentVal]}
  }
  },{})
  }
  console.log(groupBy('id',arr))