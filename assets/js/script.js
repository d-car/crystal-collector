
var count = 0;
var crystalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var wins = 0;
var loss = 0;
var compNumber = Math.floor(Math.random() * (102)) + 19;
    

function randoNumber()
{
    compNumber
        return compNumber

}

// this function displays the random number and crystal count stats
function display()
{
    $("#rando").text("Number to Guess: " + compNumber);
    $("#scoreCounter").text("Crystal Count: " + count);
    $("#wins").text("Wins: " + wins);
    $("#loss").text("Losses: " + loss);  
}

// this function is used in the reset function to reset the random values of the crystals upon a winning or losing
function resetCrystals() {
    $(".crystal-image").each(function(){
        $(this).attr("data-crystalvalue", Math.floor(Math.random() * crystalNumber.length));    

    })
}

function resetComp() {
   
        compNumber = Math.floor(Math.random() * (102)) + 19;  
 }

// this is where all functions of the game happen
function runGame() 
{
    display();
    
    // $("#wins").text("Wins: " + wins);
    // $("#loss").text("Losses: " + loss);


    // this for loop creates the crystal picture divs, assigns a data value to each, and appends them to the document
    for (var i = 0; i < 4; i++) {
        
        var crystalPic = $("<img>");
        crystalPic.addClass("crystal-image");
        crystalPic.attr("src", "../crystal-collector/assets/images/crystal1.jpg");
        
        function randoCrystal(){
            crystalPic.attr("data-crystalvalue", Math.floor(Math.random() * crystalNumber.length));    
        }
        
        randoCrystal();
        
        $("#crystalBox").append(crystalPic);
  
    }

// this click event adds the value of the crystal clicked to the crystal count

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        count += crystalValue;

        $("#scoreCounter").text("Crystal Count: " + count);

        // alert(crystalValue);

// this if else if determines if the game is won or lost and runs the reset function accordingly

        if (compNumber === count) {
            alert("You Win!");
            $("#wins").text("Wins: " + wins++);
            reset();
            display();
        } else if (compNumber < count) {
            alert("You Lose!");
            $("#loss").text("Losses: " + loss++);
            reset();
            display();
        }
        
        function reset() {
            compNumber;
            count = 0;
            crystalValue = 0;
            crystalPic.attr("data-crystalvalue", 0);
            resetCrystals();
            resetComp();
            display();
        }
    
        
    
    });

    }
    
// runs the game
runGame();





































