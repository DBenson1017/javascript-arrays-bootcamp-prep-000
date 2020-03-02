var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) { //name of function and parameters 
  var newArray = [element, array[0]]
  //declares a new array, which is the element we want to add infront of the original array. the oringinal array does not change 
  return newArray
  // returns the new array we created, but adding an element infront of the original
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift('foo')
  return array
}
function addElementToEndOfArray(array,element){
  array = [1]
  array.push('foo')
  return array
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift()
return array
}
function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}


