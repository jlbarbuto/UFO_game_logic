var inquirer = require("inquirer");

var team = "Avengers";
var teamStealth = 20;
var teamDefense = 60;
var teamOffense = 60;
var teamCharm = 40;

var weight = 10;
var comfort = 10;
var armor = 10;
var weapons = 10;
var tools = 10;
var timeOfDay = 10;

var stealth = 0;
var defense = 0;
var offense = 0;
var charm = 0;

function calcStats(){
    stealth = (-weight-timeOfDay+comfort+teamStealth)/100;
    defense = (armor+comfort+teamDefense-timeOfDay)/100;
    offense = (weapons+comfort+teamDefense-timeOfDay)/100;
    charm = (tools+comfort+teamCharm-timeOfDay)/100;

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
            timeOfDay += 10;
            console.log("Luckily, there's a bridge about a mile south! Unluckily, you had to make is past the troll. The team spends an extra 3 hours getting across.");
        }else{
            comfort -= 30;
            console.log("The team bravely trudges through the river and comes out sopping wet, heavy, and cold. Luckily, no time was wasted and no monsters were encountered!");
        };
        calcStats();
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
            var rand = Math.random();
            if (rand<.25){
                console.log("Ooo! Google translate! This might help us talk to any foreigners we might find.");
                tools += 50;
                comfort += 10;
            }else if (rand<.5){
                console.log("Ooo! A nifty book of recipies! This might give us a casserole to offer any new friends we might find.");
                tools += 20;
                comfort += 10;
            }else if (rand<.75){
                console.log("Ooo! A small beetle. Not sure how this is helpful...");
            }else{
                console.log("Oh boy. A neuralyzer. Your team spends an hour trying to remember where they're headed.");
                comfort -= 20;
                timeOfDay += 20;
                charm -= 30;
            }
        }else{
            console.log("The team leaves the box alone. Everyone will wonder what would have happened forever.");
        };
        calcStats();
        scene3();
    });
}

function scene3(){
    inquirer.prompt([
        {
            type: "list",
            message: "A fork in the road! Which way?",
            choices: ["Head left toward the creepy forest", "Head straight to the steep slope", "Head right toward the sinister mountain"],
            name: "forkChoice"
        }
    ]).then(function(response){
        if (stealth>.5){
            console.log("Your team ventures onward with very little interference.");
        }else if (weapons>.5){
            console.log("Your team ventures onward obliterating the dense bush they find around the corner.");
        }else if(armor>.5){
            console.log("Your team ventures onward and trips across some roots (how embarassing). Luckily, no one was hurt.");
        }else{
            console.log("Your team ventures forward narrowly avoiding a catastrophic trap of roots and bushes.")
        }
        scene4();
    })
}

function scene4(){
    inquirer.prompt([
        {
            type: "list",
            message: "Homebase call and asks if you need any reienforcements. Stock up on anything?",
            choices: ["We need more weapons", "We need more armor", "We need more camoflauge", "We don't want to waste any more time"],
            name: "backupChoice"
        }
    ]).then(function(response){
        if (response.backupChoice === "We need more weapons"){
            weapons += 30;
            timeOfDay += 20;
            console.log("Homebase sends a few more weapons to the team. Team waits for delivery.");
        }else if (response.backupChoice === "We need more armor"){
            armor += 30;
            timeOfDay += 20;
            console.log("Homebase sends a more armor to the team. Team waits for delivery.");
        }else if (response.backupChoice === "We need more camoflauge"){
            comfort += 30;
            timeOfDay += 20;
            console.log("Homebase sends camoflauge to the team. Team waits for delivery.");
        }else{
            console.log("The team bravely continues on without any additional help. No delays here!");
        };
        calcStats();
        outcome();
    });
}

function outcome(){
    if (stealth>0.9){
        stealth = 0.9;
    }
    if (defense>0.9){
        defense = 0.9;
    }
    if (charm>0.9){
        charm = 0.9;
    }
    if (offense>0.9){
        offense = 0.9;
    }
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