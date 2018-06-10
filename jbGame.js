var team = "";
var teamStealth = 0;
var teamDefense = 0;
var teamOffense = 0;
var teamCharm = 0;

var weight = 0;
var uncomfort = -20;
var armor = 10;
var weapons = 10;
var tools = 10;
var timeOfDay = 10;

var stealth = 0;
var defense = 0;
var offense = 0;
var charm = 0;

function calcStats(){
    stealth = (-weight-timeOfDay-uncomfort+teamStealth)/100;
    defense = (armor-uncomfort+teamDefense-timeOfDay)/100;
    offense = (weapons-uncomfort+teamDefense-timeOfDay)/100;
    charm = (tools-uncomfort+teamCharm-timeOfDay)/100;

    console.log("stealth is " + stealth);
    console.log("defense is " + defense);
    console.log("offense is " + offense);
    console.log("charm is " + charm);
};

calcStats()

$("#avenge").click(function(){
    team = "The Avengers";
    teamStealth = 10;
    teamDefense = 30;
    teamOffense = 40;
    teamCharm = 20;
    chooseWeapons();
});

$("#justice").click(function(){
    team = "The Justice League";
    teamStealth = 20;
    teamDefense = 40;
    teamOffense = 30;
    teamCharm = 10;
    chooseWeapons();
});

$("#super").click(function(){
    team = "The Supernatural Duo";
    teamStealth = 40;
    teamDefense = 20;
    teamOffense = 10;
    teamCharm = 30;
    chooseWeapons();
});

$("#ghost").click(function(){
    team = "The Ghostbusters";
    teamStealth = 30;
    teamDefense = 10;
    teamOffense = 20;
    teamCharm = 40;
    chooseWeapons();
});

function chooseWeapons(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">How many weapons will ${team} take on their journey?</h1>
        <button class="choice" id="w0">0<button>
        <button class="choice" id="w1">1</button>
        <button class="choice" id="w2">2</button>
        <button class="choice" id="w3">3</button>
        <button class="choice" id="w4">4</button>`
    );

    $("w0").click(function(){
        calcStats();
        chooseArmor();
    });

    $("#w1").click(function(){
        weapons += 10;
        weight += 10;
        calcStats();
        chooseArmor();
    });

    $("#w2").click(function(){
        weapons += 20;
        weight += 20;
        calcStats();
        chooseArmor();
    });

    $("#w3").click(function(){
        weapons += 30;
        weight += 30;
        calcStats();
        chooseArmor();
    });

    $("#w4").click(function(){
        weapons += 40;
        weight += 40;
        calcStats();
        chooseArmor();
    });
};

function chooseArmor(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">How much armor will ${team} take on their journey?</h1>
        <button class="choice" id="a0">0<button>
        <button class="choice" id="a1">1</button>
        <button class="choice" id="a2">2</button>
        <button class="choice" id="a3">3</button>
        <button class="choice" id="a4">4</button>`
    );

    $("a0").click(function(){
        calcStats();
        chooseArmor();
    });

    $("#a1").click(function(){
        armor += 10;
        weight += 10;
        calcStats();
        scene1();
    });

    $("#a2").click(function(){
        armor += 20;
        weight += 20;
        calcStats();
        scene1();
    });

    $("#a3").click(function(){
        armor += 30;
        weight += 30;
        calcStats();
        scene1();
    });

    $("#a4").click(function(){
        armor += 40;
        weight += 40;
        calcStats();
        scene1();
    });
};

function scene1(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">${team} comes across a river. What do you do?</h1>
        <button class="choice" id="r1">Find a way around delaying the party.<button>
        <button class="choice" id="r2">Ford the river causing a wet and irritated party.</button>`
    );

    $("#r1").click(function(){
        uncomfort -= 10;
        timeOfDay += 10;
        calcStats();
        $(".jbGame").html(
            `<h1 class="action-title text-center">Luckily, there's a bridge about a mile south! Unluckily, you had to make is past the troll. The team spends an extra 3 hours getting across.</h1>
            <button class="continue">Continue</button>`
        );
        $(".continue").click(function(){
            scene2();
        });
    });

    $("#r2").click(function(){
        uncomfort += 30;
        calcStats();
        $(".jbGame").html(
            `<h1 class="action-title text-center">The team bravely trudges through the river and comes out sopping wet and cold. Luckily, no time was wasted and no monsters were encountered!</h1>
            <button class="continue">Continue</button>`
        );
        $(".continue").click(function(){
            scene2();
        });
    });
}

function scene2(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">Directly in the path appears a mysterious, glowing box. What to do?</h1>
        <button class="choice" id="b1">Open the box! It could hold a game winning tool!<button>
        <button class="choice" id="b2">Leave it alone. It smells funny.</button>`
    );

    $("#b1").click(function(){
        var rand = Math.random();
        console.log(rand);
        if (rand<.25){
            $("jbGame").html(
                `<h1 class="action-title text-center">Ooo! Google translate! This might help us talk to any foreigners we might find.<h1>
                <button class="continue">Continue</button>`
            );
            tools += 50;
            uncomfort -= 10;
        }else if (rand<.5){
            $("jbGame").html(
                `<h1 class="action-title text-center">Ooo! A nifty book of recipies! This might give us a casserole to offer any new friends we might find.<h1>
                <button class="continue">Continue</button>`
            );
            tools += 30;
            uncomfort -= 10;
        }else if (rand<.75){
            $("jbGame").html(
                `<h1 class="action-title text-center">Ooo! A small beetle. Not sure how this is helpful....<h1>
                <button class="continue">Continue</button>`
            );
        }else{
            $("jbGame").html(
                `<h1 class="action-title text-center">Oh boy. A neuralyzer. Your team spends an hour trying to remember where they're headed.<h1>
                <button class="continue">Continue</button>`
            );
            uncomfort += 20;
            timeOfDay += 20;
            tools -= 10;
        }
        $(".continue").click(function(){
            scene3();
        });
    });

    $("#b2").click(function(){
        $(".jbGame").html(
            `<h1 class="action-title text-center">${team} leaves the box alone. Everyone will wonder what would have happened forever.</h1>
            <button class="continue">Continue</button>`
        );
        $(".continue").click(function(){
            scene3();
        });
    });
}

// function scene3(){
//     inquirer.prompt([
//         {
//             type: "list",
//             message: "A fork in the road! Which way?",
//             choices: ["Head left toward the creepy forest", "Head straight to the steep slope", "Head right toward the sinister mountain"],
//             name: "forkChoice"
//         }
//     ]).then(function(response){
//         if (stealth>.5){
//             console.log("Your team ventures onward with very little interference.");
//         }else if (weapons>.5){
//             console.log("Your team ventures onward obliterating the dense bush they find around the corner.");
//         }else if(armor>.5){
//             console.log("Your team ventures onward and trips across some roots (how embarassing). Luckily, no one was hurt.");
//         }else{
//             console.log("Your team ventures forward narrowly avoiding a catastrophic trap of roots and bushes.")
//         }
//         scene4();
//     })
// }

// function scene4(){
//     inquirer.prompt([
//         {
//             type: "list",
//             message: "Homebase call and asks if you need any reienforcements. Stock up on anything?",
//             choices: ["We need more weapons", "We need more armor", "We need more camoflauge", "We don't want to waste any more time"],
//             name: "backupChoice"
//         }
//     ]).then(function(response){
//         if (response.backupChoice === "We need more weapons"){
//             weapons += 30;
//             timeOfDay += 20;
//             console.log("Homebase sends a few more weapons to the team. Team waits for delivery.");
//         }else if (response.backupChoice === "We need more armor"){
//             armor += 30;
//             timeOfDay += 20;
//             console.log("Homebase sends a more armor to the team. Team waits for delivery.");
//         }else if (response.backupChoice === "We need more camoflauge"){
//             comfort += 30;
//             timeOfDay += 20;
//             console.log("Homebase sends camoflauge to the team. Team waits for delivery.");
//         }else{
//             console.log("The team bravely continues on without any additional help. No delays here!");
//         };
//         calcStats();
//         outcome();
//     });
// }

// function outcome(){
//     if (stealth>0.9){
//         stealth = 0.9;
//     }
//     if (defense>0.9){
//         defense = 0.9;
//     }
//     if (charm>0.9){
//         charm = 0.9;
//     }
//     if (offense>0.9){
//         offense = 0.9;
//     }
//     var rand = Math.random();
//     console.log(rand);
//     if (rand>0.1){
//         console.log(team + " has made it to the UFO sighting");
//         anythingThere();
//     }else{
//         console.log(team + " has failed to reach the UFO siting. Return home in shame.")
//     }
// }

// function anythingThere(){
//     var rand = Math.random();
//     console.log(rand);
//     if (rand>0.1){
//         console.log(team + " has found aliens!");
//         spotted();
//     } else {
//         var rand2 = Math.random();
//         if (rand2>0.5){
//             console.log("Nothing's here... Guess you should go home and report findings.");
//         }else{
//             console.log("There's one here but it looks like someone's definitely made a scene. Go home and report back evidence.");
//         };
//     };
// };

// function spotted(){
//     var rand = Math.random();
//     if (rand>.1){
//         if(stealth>rand){
//             console.log("Looks like you guys are flying under the radar. Snoop around undetected. Report back with cool photos and evidence!");
//         }else{
//             console.log("The aliens have spotted you! And they look pissed... What's the plan?");
//             inquirer.prompt([
//                 {
//                     type: "list",
//                     message: "Will you take the offense and start a fight or attempt to charm your way into their good graces?",
//                     choices: ["Fight", "Negotiate"],
//                     name: "usrDecision"
//                 }
//             ]).then(function(response){
//                 if (response.usrDecision === "Fight"){
//                     confrontation();
//                 }else{
//                     negotiate();
//                 }
//             });
//         }
//     }else{
//         console.log("The aliens have spotted you! And they look pissed... What's the plan?");
//         inquirer.prompt([
//             {
//                 type: "list",
//                 message: "Will you take the offense and start a fight or attempt to charm your way into their good graces?",
//                 choices: ["Fight", "Negotiate"],
//                 name: "usrDecision"
//             }
//         ]).then(function(response){
//             if (response.usrDecision === "Fight"){
//                 confrontation();
//             }else{
//                 negotiate();
//             }
//         });
//     };
// };

// function confrontation(){
//     var rand = Math.random();
//     console.log(rand);
//     if (offense>rand){
//         console.log("Woo! The team has kept the aliens at bay. Take time to explore and record evidence. Report back findings.")
//     }else{
//         console.log("Looks like the team has lost the fight... Tend to your injured and return home");
//     };
// };

// function negotiate(){
//     var rand = Math.random();
//     console.log(rand);
//     if (charm>rand){
//         console.log("The team has charmed there way into the aliens' hearts. Return home with new fb friends.");
//     }else{
//         console.log("Oh no! The aliens don't look amused at your persuasion techniques... prepare defenses.");
//         var rand2 = Math.random()
//         if (defense>rand2){
//             console.log("Your defenses are just enough. No time to take evidence, run home and hope eveyone believes your story.");
//         }else{
//             console.log("Your defenses are too weak. Your team is taken hostage.")
//         };
//     };
// };