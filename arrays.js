var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) { //name of function and parameters 
  var newArray = [element, array[0]]
  //declares a new array, which is the element we want to add infront of the original array. the oringinal array does not change 
  return newArray
  // returns the new array we created, but adding an element infront of the original
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift('foo') //opposite of shift, this adds a new element in index 0 
  return array //the original array is modified, unlike above where we declared a new array and kept the old 
}
function addElementToEndOfArray(array,element){ 
  //hard coded 
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
  array = array.slice(1) // removes everything before i=1, so starts at i=o, skips over the first element, then removes it 
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1) // this doens't actually pop off the elelment, but returns everything BUT the final element 
}


