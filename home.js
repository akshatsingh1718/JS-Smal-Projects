/* difference b/w var and let 

JavaScript allows variable declaration without var keyword. 
You must assign a value when you declare a variable without 
var keyword. ... Scope of the variables declared without var 
keyword become global irrespective of where it is declared. 
Global variables can be accessed from anywhere in the web page.

function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
*/

//1.console.log 
//console.log("Hello World");


//2.--------------- alert --------------------
//alert('Hello World');


// 3.var name = 'Akshat';
//console.log(name);


// ------------------ InnerHTML ----------------------------
// 4.changing innerHTML of para tag
//document.getElementById("paraId").innerHTML = 'Hi World';


// ------------------ Prompt ----------------------
// 5.prompting for age and then chaning inner html of p tag to age 
/*
var age = prompt("What is your age :");
document.getElementById("paraId").innerHTML = age;
*/

// ----------------- 6.functions ------------------
/*
function getAge(){
    var age = prompt("Enter your age :");
    console.log("your age is " + age );
}

function getName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}

var f = prompt("Enter your first name :")
var l = prompt("Enter your last name :");
getName(f, l);

function add2(num1, num2){
    console.log(num1 + num2);
}
add2(10,'20.23')
output : 1020.23
*/


//---------------- 7.Loops ---------------------
/*
for(let i=0; i<10;i++){
    console.log(i)
}

Here as we can see that we can redeclare var 
but u cannot redeclare let
var i = 10;---------
while(i<=15){                       
    i++;                           
    console.log(i)
}

var i = 10;----------
do{
    console.log("i : " + i);
    i++;
}while(i<16);
*/


// ----------------- 8.data types ----------------
/*
let age = 10                                        // int 
let yourName = "Akshat"                             // string
let name ={first : "Akshat", last : "Singh"};       // object
let groceries = ["Apple", "Orange", "Banana"];      // array
let random;                                         // undefined
let nothing = null;                                 // value null (obj)
let truth = true;                                   // boolean
*/
// ----some object operations----
/*
name['first'] = "Aryan";
console.log(name['first']);
console.log(name.last);

groceries[0] = "Change"
console.log(groceries[0])
*/


// ------------- 9.strings in javascript ---------------
/*The string type value is immutable, but the String object, which is created by using the String() constructor, 
is mutable, because it is an object and you can add new properties to it*/
/*
let fruit = "banana,apple,mango";
let moreFruits = "Bananna\nApple"
console.log("fruit length : "  + fruit.length);
console.log("slice(2,6) :" + fruit.slice(2,6));
console.log('replace("bana","BANA") : ' + fruit.replace("bana","BANA"));
console.log("charAT(4) :" + fruit.charAt(4));
console.log("fruit[7] :" +  fruit[7]);
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log("indexOf(ap) :" + fruit.indexOf("ap"));
console.log("lastIndexOf(a):" + fruit.lastIndexOf('a'));
console.log("split(,) \\/ " );
console.log(fruit.split(''));
console.log("split(,) \\/ " );
console.log( fruit.split(','));
console.log("fruit :" + fruit);
console.log("moreFruits : " + moreFruits);
*/


// --------------- 10. Array in js ----------------
// arrays are mutable
// method 1
/*
let arr = ["Apple","Banana","Kiwi","Orange"];
// method 2 using constructor 
arr = new Array("Apple","Banana","Kiwi","Orange");

console.log(arr);
console.log(''+arr);// this works same as toString

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("arr.toString() :" + arr.toString());
console.log("arr.pop() :" + arr.pop());
console.log("arr.push('new orange'):"+arr.push("new orange"),arr);arr[arr.length] = "DragonFruit"; // same work as push//
arr.shift(); // removes 1st item and returns its value
console.log(arr);
arr.unshift("UnshiftedFruit");// adds item to 1st pos'n
console.log(arr);
console.log(arr.join("*"));// joins * with arr element
// method chaining
let v = arr.toString().split(',').join("_*_").toUpperCase();
console.log(v);

let newArr = new Array("tomatoes", "Brinjal", "Carrot");
let groceries = arr.concat(newArr); // array concatination
console.log(groceries);

console.log(groceries.reverse());// reverse an array
console.log(groceries.slice(2,4));// array slice 
console.log(groceries.sort());  // array sorting

let numArr = [10, 2, -2, 34, 43, 4, 54, 34, -23];
numArr.sort(function(x,y){return x-y;})// asc order sort
console.log(numArr);
numArr.sort(function(x,y){return  y-x;});// desc order sort
console.log(numArr);

// pushing items in array using for loop
let nums = new Array();
for(let i=0; i<10; i++){
    nums.push(i*10);
}
console.log(nums);
*/

// -------------- 11. objects in js ----------------
// objects are mutable
/*
let student ={
    firstName : "Akshat",
    lastName : "Singh",
    age : 19,
    height : 170,
    info : function(prefix){
        return prefix + " " + this.firstName + " "  +this.lastName;
    }
};

console.log(student);
student.firstName = "Aryan";
student.age++;
console.log(student);
console.log(student.info("MR"));
*/


// ---------------- 12. if else in js -------------
/*
let age = prompt("Enter your age :");
if( (age > 0) && (age <= 14)){
    status = "Children"
}
else if (age>14 && age <= 30){
    status = "Adult";
}
else{
    status = "Old";
}
console.log(status);
*/

// --------------- 13.switch case ----------------
/*
num = 1;
switch(num){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("default");
        break;
}
*/
/*
 ***************** Challange 1: Age in days ****************
 using new Date() -> geFullYear()
*/
// function for returning user age in days
function ageInDays(){
    let birthYear = prompt("Enter your birth year");
    let currentYear = (new Date()).getFullYear();
    let ageInDayss = (currentYear - birthYear) * 365;
    // creating element of h1
    let h1 = document.createElement("h1");
    // creating text node 
    let textNode = document.createTextNode("Your age is "+ageInDayss+" days old.");
    // setting attribute as id and id value
    h1.setAttribute("id","ageInDays");
    // appending text node to h1
    h1.appendChild(textNode);
    // getting div tag from html using its id(flex-box-result) to append
    // its child h1 we created
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}

/*
*************** Challange 2: Cat Generator ******************
*/
function genCat(){
    var div = document.getElementById("flex-cat-gen");
    var img= document.createElement("img");
    img.setAttribute("id","genCat");
    img.src = "https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif?itemid=6198981";
    img.alt = "CAT IMAGE";
    div.appendChild(img);
}

function delCat(){
    document.getElementById("genCat").remove();
}

/*
**************** Challange 3: Rock Paper Scissors
*/

function rpsGame(yourChoice){
    //console.log(yourChoice.id);

    var botChoice = numberToChoice(randToRpsInt());
    //console.log(botChoice);

    results = decideWinner(yourChoice.id, botChoice);
    //console.log(results);

    message = finalMessage(results);
    //console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

// function to return random no 0, 1 and 2
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

// function to return bot choice
function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

// function to return winner's list
// using object to map the possibilities
function decideWinner(humanChoice, botChoice){
    var rpsDataBase={
        'rock' : {'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0}
    };

    var humanScore = rpsDataBase[humanChoice][botChoice];
    var botScore = rpsDataBase[botChoice][humanChoice];

    return [humanScore, botScore];
}

//function to return message log
function finalMessage([yourScore, botScore]){
    if(yourScore === 0){
        return {'message':'You Lost!', 'color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'You Tied!', 'color':'yellow'};
    }
    
    // else return you win
    return {'message':'You Win!', 'color':'green'};
}
function imageDataBase(imageName){
    var imageDB = {
        'rock' : "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-016-512.png",
        'paper': "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-019-512.png",
        'scissor':"https://www.netclipart.com/pp/m/63-639213_danahand-scissors-rock-paper-scissors-png.png"
    };

    return imageDB[imageName];
}

// function for front end
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    

    // removing all images and then we will print the 
    // result images and msg
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    // creating div's for images and message
    var humanDiv = document.createElement('div');
    var msg = document.createElement('div');
    var botDiv = document.createElement('div');

    // writing inner HTML of div's
    humanDiv.innerHTML = "<img src='"+imageDataBase(humanImageChoice)+"' height=150 width=150 alt='"+humanImageChoice+"'>";
    msg.innerHTML = "<h1 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>";
    botDiv.innerHTML = "<img src='"+imageDataBase(botImageChoice)+"' height=150 width=150 alt='"+botImageChoice+"'>";

    // appending divs in div flex-box-rps
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(msg);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function replayRps(){
    // clearing all the content inside flex-box-rps-div
    document.getElementById("flex-box-rps-div").innerHTML="";

    // creating img tags
    var rock = document.createElement('img');
    var paper = document.createElement('img');
    var scissor = document.createElement('img');

    // setting rock attributes
    rock.id = 'rock';
    rock.src =imageDataBase("rock");
    rock.height = 150;
    rock.width = 150;
    rock.alt = "ROCK";
    rock.setAttribute("onclick","rpsGame(this)");

    // setting paper attributes
    paper.id = 'paper';
    paper.src =imageDataBase("paper");
    paper.height = 150;
    paper.width = 150;
    paper.alt = "PAPER";
    paper.setAttribute("onclick","rpsGame(this)");

    // setting scissor attributes
    scissor.id = 'scissor';
    scissor.src =imageDataBase("scissor");
    scissor.height = 150;
    scissor.width = 150;
    scissor.alt = "SCISSOR";
    scissor.setAttribute("onclick","rpsGame(this)");

    // appending img tags in flex-box-rps-div
    document.getElementById('flex-box-rps-div').appendChild(rock);
    document.getElementById('flex-box-rps-div').appendChild(paper);
    document.getElementById('flex-box-rps-div').appendChild(scissor);
}

/*
*********** Challange 4: change button colors
*/

allButtons = document.getElementsByTagName("button");
//console.log(allButtons)

// for storing btn colors
allBtnColor = []

// storing all the buttons color
for(let i=0; i<allButtons.length; i++){
    allBtnColor.push(allButtons[i].classList[1]);
}


function btnChangeColor(colorPick){
    if(colorPick.value === "red"){
        changeBtnToRed();
    }
    else if(colorPick.value === "green"){
        changeBtnToGreen();
    }
    else if(colorPick.value === "random"){
        changeBtnToRandom();
    }
    else{
        changeBtnToReset();
    }
}

function changeBtnToRed(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function changeBtnToGreen(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function changeBtnToRandom(){
    let colors = ["btn-primary", "btn-success", "btn-danger", "btn-warning"];
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(colors[Math.floor(Math.random() * 4)]);
    }
}

function changeBtnToReset(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(allBtnColor[i]);
    }
}

/*
************* Challange 5:BlackJack Game ********************
*/

let blackJackGame = {
    "you"   : {"scoreSpan" :"#your-blackjack-result"  , "div" :"#your-box"   , "score" :0},
    "dealer": {"scoreSpan" :"#dealer-blackjack-result", "div" :"#dealers-box" , "score" :0},
    "cards" : ['2', '3', '4', '5', '6', '7', '8', '9' , '10', 'K', 'J', 'Q', 'A'],
    "scoreMap" : {'2': 2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9 , '10':10, 'K':10, 'J':10, 'Q':10, 'A':[11, 1]},
    "losses":0,
    "wins":0,
    "ties":0,
    "turnsOver":false,
    "isStand":false,
};

// you and dealer's object's
const YOU = blackJackGame["you"];
const DEALER = blackJackGame["dealer"];

// hit sound
const HIT_SOUND = new Audio("sounds\\swish.m4a")
// loose sound
const LOSSE_SOUND = new Audio("sounds\\aww.mp3");
// Winning sound
const WIN_SOUND = new Audio("sounds\\cash.mp3");


// same way of accessing id using css we put # before id's
// it will invoke blackJackHit() method whenever user click's on hit button
document.querySelector("#blackjack-hit-button").addEventListener("click", blackJackHit);

// it will invoke dealerLogic() method
document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);

// it will invoke blackJackDeal() method whenever user click's on deal button
document.querySelector("#blackjack-deal-button").addEventListener("click", blackJackDeal);  

// function to hit card
function blackJackHit(){
    if(blackJackGame['isStand'] === false){
        let activePlayer = YOU;
        let card = randomCard();
        showCard(card, activePlayer);
        updateScore(card, activePlayer);
        showScore(activePlayer);
    }
}

// function for showing card
function showCard(card , activePlayer){
    if(activePlayer["score"]<=21){
        let cardImage = document.createElement("img");
        // here we are using String templating
        cardImage.src = `images\\${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        HIT_SOUND.play();
    }
}

// function for returning radom card
function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame["cards"][randomIndex];
}

// function to remove all cards
function blackJackDeal(){
    if(blackJackGame['turnsOver'] === true){
        blackJackGame['isStand'] = false;
        let humanPlayerCards = document.querySelector("#your-box").querySelectorAll("img");
        let botCards = document.querySelector("#dealers-box").querySelectorAll("img");

        for(let i=0; i<humanPlayerCards.length; i++){
            humanPlayerCards[i].remove();
        }
        for(let i=0; i<botCards.length; i++){
            botCards[i].remove();
        }

        // changing human and bot score in blackJackGame
        YOU["score"] = 0;
        DEALER["score"] = 0;

        // initializing human player score to 0 and changing color to white again after bust changes it to red
        document.querySelector("#your-blackjack-result").textContent = 0;
        document.querySelector("#your-blackjack-result").style.color = "#ffffff";

        // initializing bot score to 0 and changing color to white again after bust changes it to red
        document.querySelector("#dealer-blackjack-result").textContent = 0;
        document.querySelector("#dealer-blackjack-result").style.color = "#ffffff";

        // changing results back to white and to print Let's Play
        document.querySelector("#blackjack-result").textContent = "Let's Play";
        document.querySelector("#blackjack-result").style.color = "black";

        blackJackGame['turnsOver'] = false;
    }  
}
// sleep function
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
// dealer's logic function - on stand button click 
// here we are using async because we want to sleep or freeze the will loop code 
// and not the whole browser if we didn't use async we will end up freezing whole 
// browser and we will not be able to hover mouse or scroll up and down
async function dealerLogic(){
    blackJackGame['isStand'] = true;
    let activePlayer = DEALER;
    while(activePlayer['score'] <= 17 && blackJackGame['isStand']===true){
        let card = randomCard();
        showCard(card, activePlayer);
        updateScore(card, activePlayer);
        showScore(activePlayer);
        await sleep(1000);
    }
    // checking for winner and printing result's 
    blackJackGame['turnsOver'] = true;
    showResult(computeWinner());
}

// updates score on blackJackGame scoreMap 
function updateScore(card, activePlayer){
    if(card === "A"){
        if(activePlayer["score"] + blackJackGame["scoreMap"][card][0] > 21){
            activePlayer["score"] += blackJackGame["scoreMap"][card][1];
        }
        else{
            activePlayer["score"] += blackJackGame["scoreMap"][card][0];
        }
    }
    else{
        activePlayer["score"] += blackJackGame["scoreMap"][card];
    }
}

// function to show score or change text to res for bust 
function showScore(activePlayer){
    if(activePlayer["score"] > 21){
        document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
        document.querySelector(activePlayer["scoreSpan"]).style.color = "RED";
    }
    else{
        document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
    }
}

// function to return Winner Object
function computeWinner(){
    let winner;

    if(YOU["score"] <= 21){
        if(YOU["score"] > DEALER["score"] || DEALER["score"] > 21){
            winner = YOU; 
            blackJackGame['wins']++;
        }
        else if(YOU['score'] < DEALER['score']){
            blackJackGame['losses']++;
            winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score']){
            blackJackGame['ties']++;
            winner = undefined;
        }
    }
    else if(YOU['score'] > 21 && DEALER['score']<=21){
        blackJackGame['losses']++;
        winner = DEALER;
    }

    else if(YOU['score'] > 21 && DEALER['score']>21){
        blackJackGame['ties']++;
        winner = undefined;
    } 
    return winner;
}

function showResult(winner){
    if(blackJackGame['turnsOver'] === true){
        console.log("ShowResult");
        let message, msgColor;
        if(winner === YOU){
            console.log("Y win");
            document.querySelector("#wins").textContent = blackJackGame['wins'];
            WIN_SOUND.play();
            message = "YOU WIN!";
            msgColor = "GREEN";
        }
        else if(winner === DEALER){
            console.log("D win");
            document.querySelector("#losses").textContent = blackJackGame['losses'];
            LOSSE_SOUND.play();
            message = "YOU LOSSE!";
            msgColor = "RED";
        }
        else{
            document.querySelector("#draws").textContent = blackJackGame['ties'];
            message = "YOU DREW!";
            msgColor = "YELLOW";
        }

        // changing content's and color of blackjack-result 
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = msgColor;
    }
}