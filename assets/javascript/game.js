$(document).ready(function () {
            var winningNumber = "";
            var gemArr = ["assets/images/amber.png", "assets/images/emerald.png", "assets/images/ruby.png", "assets/images/sapphire.png"];
            var userTotal = 0;


            var wins = 0;
            var losses = 0;

            $("").text(winningNumber);
            $("").text(userTotal);
            $("").text(wins);
            $("").text(losses);

            // randomly select a winningNumber between 19-120
            winningNumber = Math.floor(Math.random() * 120) + 19;

            // randomly generate values for gems(x4) 1-12
            gemPointValue = Math.floor(Math.random() * 12) + 1;

            // variable to create gems (using images in folder: like in frige ex)
            // jquery attr, apped, addClass
            function gemButtons() {
                for (var i = 0; i < gemArr.length; i++) {
                    var gemImage = $("<img>");
                    gemImage.addClass("gem-button");
                    gemImage.attr("gem-value", gemPointValue)
                    $("#crystals").append(gemImage);
                }
            }


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