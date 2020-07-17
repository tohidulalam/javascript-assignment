//Feet to Mile converter

function feetToMile(feet){
    //1 mile = 5280 feet
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(100000);
console.log(result.toFixed(4),"Mile"); 

//Wood Calculator

function woodCalculator(chair, table, bed){
    
    var woodForChair = 1;
    var woodForTable = 3;
    var woodForBed = 5;
    var totalWoodRequired= (woodForChair*chair)+(woodForTable*table)+(woodForBed*bed);
    return totalWoodRequired;
}

var totalWoodResult = woodCalculator(2,5,1);
console.log(totalWoodResult,"Cubic Feet Wood Required");

//Brick calculation

function brickCalculator(storied){
    var brick;
    var brickForOneFeet=1000;
        if(storied<=10){
            brick = storied*brickForOneFeet*15;
            return brick;
        }
        else if(storied<=20){
            var brickForFristTenStoried = 10*brickForOneFeet*15;
            brick = ((storied-10)*brickForOneFeet*12)+brickForFristTenStoried;
            return brick;

        }
    
        else {
            var brickForFirstTwentyStoried = (10*brickForOneFeet*15)+(10*brickForOneFeet*12);
            brick = ((storied-20)*brickForOneFeet*10)+ brickForFirstTwentyStoried;
            return brick;
    }

}



    var TotalBrick = brickCalculator(30);
    console.log(TotalBrick);

//Tiny Friend

function tinyFriend(friends){

    for (var i=1; i<friends.length; i++){
    var tiny = friends[0];
    var element = friends[i];
  
    if(element.length<tiny.length){
        tiny=element;
         }
    }
    return tiny;
}
  


var friends=["pappu","rakib","rifat","piyash","joy"]

var friendName = tinyFriend(friends);
console.log(friendName);
