//  question -26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_color: string = "red";
if (alien_color === " red") {
  console.log("that the player just earned 5 points for shooting the alien.");
} else {
  console.log(" the player just earned 10 points ");
}

alien_color = " yellow "
if (alien_color === " red") {
    console.log("that the player just earned 5 points for shooting the alien.");
  } else {
    console.log(" the player just earned 10 points ");
  }


//   Question- 27Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_colors : string ="green"
if (alien_colors === "green"){
    console.log(" the player earned 5 points")
} else if(alien_colors == " yellow"){
    console.log(" the player earned 10 points")
} else {
    console.log (" the player earned 15 points")
}

// Question -28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let ages : number = 18
if (ages < 2){
    console.log(" you are baby")
}else if (ages < 4 ){
    console.log(" you are toddler")
}else if (ages < 13 ){
    console.log(" you are teenager")
}else if (ages < 20 ){
    console.log(" you are adult")
}else if (ages < 65 ){
    console.log(" you are elder")
}else {  console.log ("you are older")
}
// Question -29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits : string[] =["Kivi", "orange", "apple","peach, bananas"]
if (favorite_fruits.includes("apple")){
  console.log("apple")
}
if (favorite_fruits.includes("Peach")){
  console.log("you really like bananas")
}
if (favorite_fruits.includes("Orange")){
  console.log("Orange")
}
if (favorite_fruits.includes("berry")){
  console.log("you really like bananas")
}
if (favorite_fruits.includes("Kivi")){
  console.log("Kivi")
}
// Question-30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
const admin : string[] = ["misbah", "kinza", "komal", "haniya ","arfa"]
for(let i=0; i<admin.length; i++)
{ if(admin[i] === "admin"){
  console.log("hello admain , Would you like to see status report")
} else{console.log(`hello ${admin[i]} thank you loggin `)}}