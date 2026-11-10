Array.prototype.includes = null // assumption

if(!Array.prototype.includes){
Array.prototype.includes = function(searchElement,fromIndex){

//how a function accesses its current object(context)
  const arr = this; //using this keyword

  let start = fromIndex>=0 && fromIndex<arr.length?fromIndex:0;
  
  for(let i=start;i<arr.length;i++){
    if(searchElement.toLowerCase()===arr[i].toLowerCase()){
      return true
    }
  }
  return false
  
}
}


let array = ["A","B","C","D","E",undefined]

const isPresent = array.includes("b")

console.log(isPresent)
