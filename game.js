var inquirer = require("inquirer");

var team = "Avengers";
var teamStealth = 20;
var teamDefense = 60;
var teamOffense = 60;
var teamCharm = 40;

var weight = 10;
var weightPer = 0.5;

var comfort = 10;
var comfortPer = 0.5;

var armor = 10;
var armorPer = 0.5;

var weapons = 10;
var weaponsPer = 0.5;

var tools = 10;
var toolsPer = 0.5;

var timeOfDay = 30;
var timeOfDayPer = 0.5;

var stealth = 0;
var defense = 0;
var offense = 0;
var charm = 0;

function calcStats(){
    stealth = (-weight+timeOfDay+comfort+teamStealth)/100;
    defense = (armor+comfort+teamDefense)/100;
    offense = (weapons+comfort+teamDefense)/100;
    charm = (tools+comfort+teamCharm)/100;

    console.log("stealth is " + stealth);
    console.log("defense is " + defense);
    console.log("offense is " + offense);
    console.log("charm is " + charm);
};

calcStats()

function preExpedition(){
    inquirer.prompt([
        {
            type: "list",
            message: "How many weapons will the team take?",
            choices: ["0", "1", "2", "3", "4"],
            name: "weaponsChoice"
        },
        {
            type: "list",
            message: "How much armor will the team take?",
            choices: ["0", "1", "2", "3", "4"],
            name: "armorChoice"
        }
    ]).then(function(response){
        var usrArmor = parseInt(response.armorChoice);
        var usrWeapons = parseInt(response.weaponsChoice);
        weapons += usrWeapons;
        weight += usrWeapons + usrArmor;
        armor += usrArmor;

        calcStats();
        scene1();
    });
};

preExpedition();

function scene1(){
    inquirer.prompt([
        {
            type: "list",
            message: "Your team comes across a river. What do you do?",
            choices: ["Find a way around delaying the party", "Ford the river cuasing a wet and irritated party"],
            name: "riverChoice"
        }
    ]).then(function(response){
        if (response.riverChoice === "Find a way around delaying the party"){
            comfort += 10;
            timeOfDay += 30;
            console.log("Luckily, there's a bridge about a mile south! Unluckily, you had to make is past the troll. The team spends an extra 3 hours getting across.");
        }else{
            comfort -= 30;
            console.log("The team bravely trudges through the river and comes out sopping wet, heavy, and cold. Luckily, no time was wasted and no monsters were encountered!");
        };
        scene2();
    })
}

function scene2(){
    inquirer.prompt([
        {
            type: "list",
            message: "Directly in the path appears a mysterious, glowing box. What to do?!",
            choices: ["Open the box! It could hold a game winning tool!", "Leave it alone. It smells funny."],
            name: "boxChoice"
        }
    ]).then(function(response){
        if (response.boxChoice === "Open the box! It could hold a game winning tool!"){
            var rand = Math.rand();
            if (rand<.25){
                console.log("Ooo! Google translate! This might help us talk to any foreigners we might find.");
                tools += 50;
                comfort += 10;
            }else if (rand<.5){
                console.log("Ooo! A nifty book of recipies! This might give us a casserole to offer any new friends we might find.");
                tools += 20;
                comfort += 10;
            }else if (rand<.75){
                console.log("Ooo! ")

            }else{
                console.log("Oh boy. A neuralyzer. Your team spends an hour trying to remember where they're headed.");
                comfort -= 20;
                timeOfDay -= 10;
                charm -= 30;
            }
            console.log("Luckily, there's a bridge about a mile south! Unluckily, you had to make is past the troll. The team spends an extra 3 hours getting across.");
        }else{
            comfort -= 30;
            console.log("The team bravely trudges through the river and comes out sopping wet, heavy, and cold. Luckily, no time was wasted and no monsters were encountered!");
        };
        scene3();
    })
}

function scene3(){
    inquirer.prompt([
        {
            type: "list",
            message: "Your team comes across a river. What do you do?",
            choices: ["Find a way around delaying the party", "Ford the river cuasing a wet and irritated party"],
            name: "riverChoice"
        }
    ]).then(function(response){
        if (response.riverChoice === "Find a way around delaying the party"){
            comfort += 10;
            timeOfDay += 30;
            console.log("Luckily, there's a bridge about a mile south! Unluckily, you had to make is past the troll. The team spends an extra 3 hours getting across.");
        }else{
            comfort -= 30;
            console.log("The team bravely trudges through the river and comes out sopping wet, heavy, and cold. Luckily, no time was wasted and no monsters were encountered!");
        };
        scene4();
    })
}

function scene4(){
    inquirer.prompt([
        {
            type: "list",
            message: "Your team comes across a river. What do you do?",
            choices: ["Find a way around delaying the party", "Ford the river cuasing a wet and irritated party"],
            name: "riverChoice"
        }
    ]).then(function(response){
        if (response.riverChoice === "Find a way around delaying the party"){
            comfort += 10;
            timeOfDay += 30;
            console.log("Luckily, there's a bridge about a mile south! Unluckily, you had to make is past the troll. The team spends an extra 3 hours getting across.");
        }else{
            comfort -= 30;
            console.log("The team bravely trudges through the river and comes out sopping wet, heavy, and cold. Luckily, no time was wasted and no monsters were encountered!");
        };
        outcome();
    })
}

function outcome(){
    var rand = Math.random();
    console.log(rand);
    if (rand>0.1){
        console.log(team + " has made it to the UFO sighting");
        anythingThere();
    }else{
        console.log(team + " has failed to reach the UFO siting. Return home in shame.")
    }
}

function anythingThere(){
    var rand = Math.random();
    console.log(rand);
    if (rand>0.1){
        console.log(team + " has found aliens!");
        spotted();
    } else {
        var rand2 = Math.random();
        if (rand2>0.5){
            console.log("Nothing's here... Guess you should go home and report findings.");
        }else{
            console.log("There's one here but it looks like someone's definitely made a scene. Go home and report back evidence.");
        };
    };
};

function spotted(){
    var rand = Math.random();
    console.log(rand);
    console.log(stealth);
    if (rand>.1){
        if(stealth>rand){
            console.log("Looks like you guys are flying under the radar. Snoop around undetected. Report back with cool photos and evidence!");
        }else{
            console.log("The aliens have spotted you! And they look pissed... What's the plan?");
            inquirer.prompt([
                {
                    type: "list",
                    message: "Will you take the offense and start a fight or attempt to charm your way into their good graces?",
                    choices: ["Fight", "Negotiate"],
                    name: "usrDecision"
                }
            ]).then(function(response){
                if (response.usrDecision === "Fight"){
                    confrontation();
                }else{
                    negotiate();
                }
            });
        }
    }else{
        console.log("The aliens have spotted you! And they look pissed... What's the plan?");
        inquirer.prompt([
            {
                type: "list",
                message: "Will you take the offense and start a fight or attempt to charm your way into their good graces?",
                choices: ["Fight", "Negotiate"],
                name: "usrDecision"
            }
        ]).then(function(response){
            if (response.usrDecision === "Fight"){
                confrontation();
            }else{
                negotiate();
            }
        });
    };
};

function confrontation(){
    var rand = Math.random();
    console.log(rand);
    if (offense>rand){
        console.log("Woo! The team has kept the aliens at bay. Take time to explore and record evidence. Report back findings.")
    }else{
        console.log("Looks like the team has lost the fight... Tend to your injured and return home");
    };
};

function negotiate(){
    var rand = Math.random();
    console.log(rand);
    if (charm>rand){
        console.log("The team has charmed there way into the aliens' hearts. Return home with new fb friends.");
    }else{
        console.log("Oh no! The aliens don't look amused at your persuasion techniques... prepare defenses.");
        var rand2 = Math.random()
        if (defense>rand2){
            console.log("Your defenses are just enough. No time to take evidence, run home and hope eveyone believes your story.");
        }else{
            console.log("Your defenses are too weak. Your team is taken hostage.")
        };
    };
};