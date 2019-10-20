//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Plant(){
	this.make="Flower"
}
Plant.prototype.type=function(){
	console.log("I am a rose, but i inherit most of my abilities as a "+this.make+" from my parents");
};

var lilly=new Plant();
lilly.type();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers=[1,2,3,4,5,6,7,8,9,10];

console.log(myNumbers.slice(4,5));


//3. Delete the last number in the array that you created above.
myNumbers.splice(9,1);

console.log(myNumbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

///////////////////////////////////////////////////

function changeFruits(speech) {
  if (typeof speech !== "string") {
    console.error("this is not a string");
    return;
  }

  speech = speech.replace(/strawberry/gi,"banana");
  speech = speech.replace(/strawberries/gi,"bananas");

  return speech;
}
console.log(changeFruits("strawberries are a popular part of spring and summer diets throughout America Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes.They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."));


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var myList = ["Strømsgodset", "Rosenborg", "Vålerenga", "Viking"];
console.log(myList)

function myFunction(){
	myList.splice(0,4);
	myList.push("volvo","mercedes","BMW","Ford");
	console.log(myList);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var myPeople = [
	{name:"Mike"},
	{name:"Jessy"},
	{name:"Holly"},
	{name:"Jason"}	
]
var filteredmyPeople = myPeople.filter((myPeople) => {
	return myPeople.name
})

console.log(filteredmyPeople)

//7. Create a simple function that logs the date.
var d = new Date();

console.log(d);
		

