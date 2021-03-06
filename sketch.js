//Create variables here
var dog, happyDog, dogimg, happyDogimg, database, foodS, foodStock;
function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250);
  dog.addImage(dogimg);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown === UP_ARROW){
    writeStock(foodStock-1);
    dog.addImage(happyDogimg);
  }
  drawSprites();
  textSize(15);
  fill("green");
  text("Note: Press up arrow to feed dog",250,100);
  //add styles here

}

function readStock(data){
  foodStock-data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}