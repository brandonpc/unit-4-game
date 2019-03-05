$(document).ready(function () {
            // useful global(s) - array to pull images for buttons
            var gemArr = ["assets/images/amber.png", "assets/images/emerald.png", "assets/images/ruby.png", "assets/images/sapphire.png"];

            // scoreboard
            var wins = 0;
            var losses = 0;
            var userTotal = 0;
            var winningNumber = "";


            // pushes to html
            $("#winning-number").text(winningNumber);
            $("#user-total").text(userTotal);
            $("#wins").text(wins);
            $("#losses").text(losses);



            // variable to create gems (using images in folder: like in frige ex)
            function startGame() {
                // start game with 0 wins/losses/userTotal?
                wins = 0;
                losses = 0;
                userTotal = 0;
                // randomly select a winningNumber between 19-120
                winningNumber = Math.floor(Math.random() * 120) + 19;

                // randomly generate values for gems(x4) 1-12
                gemPointValue = Math.floor(Math.random() * 12) + 1;


                for (var i = 0; i < gemArr.length; i++) {
                    var gemImage = $("<img>");
                    gemImage.addClass("gem-button");
                    gemImage.attr("data-gemValue", gemPointValue)
                    $("#crystals").append(gemImage);
                }
                // REMEMBER: it's not called yet.
            }

            $(".gem-button").on("click", function () {
                var gemValue = ($(this).attr("data-gemvalue"));
                gemValue = parseInt(gemValue);
                userTotal += gemValue;
                // print
                if (userTotal === winningNumber) {
                    wins++;
                }
                if (userTotal > winningNumber) {
                    losses++;
                }
                // REMEMBER: called when clicked
            });


            // reset button 
            // TODO: create button
            $("#reset").on("click", function () {
                // resets everything to start
                startGame();

            });
            // Call startGame function
            startGame();
        }










        // start game
        // total score set to 0
        // on click: gem adds number to total score
        // if total = winningNumber wins++ & start new round (like hangman, keeping track wins/losses)
        // if total > winningNumber losses-- & start new round
        // create a clear (like the initializeCalculator) 
        //    reset will create new winningNumber and gem numbers, and set total score 0

        // REMEMBER: JS is written like the first time you play a game
        //          a) read the instructions: define keywords (variables),
        //             explain them/how they work (functions,if/else, etc),
        //             then explain gameplay (initializeGame, Reset, etc)
        //          b) start the game (call the functions)



        // ???????????on-click for jewel buttons??????
        // $("").on("click", function () {
        //     // TODO: increase counter
        //     // TODO: print
        //     if (userTotal === winningNumber) {
        //         wins++;
        //     } else if (userTotal >= winningNumber) {
        //         losses++;
        //     }
        // });