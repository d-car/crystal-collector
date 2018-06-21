
var count = 0;
var crystalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var wins = 0;
var loss = 0;
var compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    

function randoNumber()
{
    compNumber
    return compNumber

}

function display()
{
    $("#rando").text("Number to Guess: " + randoNumber());
    $("#scoreCounter").text("Crystal Count: " + count);  
}



function runGame() 
{
    display();
    
    var compNumber = randoNumber();
    // $("#rando").text("Number to Guess: " + compNumber);
    // $("#scoreCounter").text("Crystal Count: " + count);
    $("#wins").text("Wins: " + wins);

    for (var i = 0; i < 4; i++) 
    {
        
    var crystalPic = $("<img>");
    crystalPic.addClass("crystal-image");
    crystalPic.attr("src", "../crystal-collector/assets/images/crystal1.jpg");
    
    function randoCrystal()
        {
        crystalPic.attr("data-crystalvalue", Math.floor(Math.random() * crystalNumber.length));    
        }
    
    randoCrystal();
    
    $("#crystalBox").append(crystalPic);
  
    }

    $(".crystal-image").on("click", function() 
    
    {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        count += crystalValue;

        $("#scoreCounter").text("Crystal Count: " + count);

        // alert(crystalValue);

    if (compNumber === count) {
        alert("You Win!");
        wins++;
        reset();
        // display();
    } else if (compNumber < count) {
        alert("You Lose!");
        loss++;
        reset();
        // display();
        }
    function reset()
        {
        count = 0;
        crystalValue = 0;
        crystalPic.attr("data-crystalvalue", 0);
        randoNumber();
        randoCrystal();
        display();
        }
    
        
    
    });

    }
    

runGame();





































