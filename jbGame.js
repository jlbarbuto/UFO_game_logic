var win = false;
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
var timeOfDay = 0;

var stealth = 0;
var defense = 0;
var offense = 0;
var charm = 0;

function calcStats(){
    stealth = (-weight-timeOfDay-uncomfort+teamStealth)/100;
    defense = (armor-uncomfort+teamDefense-timeOfDay)/100;
    offense = (weapons-uncomfort+teamOffense-timeOfDay)/100;
    charm = (tools-uncomfort+teamCharm-timeOfDay)/100;

    console.log("stealth is " + stealth);
    console.log("defense is " + defense);
    console.log("offense is " + offense);
    console.log("charm is " + charm);
};

$("#avenge").click(function(){
    team = "The Avengers";
    teamStealth = 10;
    teamDefense = 30;
    teamOffense = 40;
    teamCharm = 20;
    calcStats();
    chooseWeapons();
});

$("#justice").click(function(){
    team = "The Justice League";
    teamStealth = 20;
    teamDefense = 40;
    teamOffense = 30;
    teamCharm = 10;
    calcStats();
    chooseWeapons();
});

$("#super").click(function(){
    team = "The Supernatural Duo";
    teamStealth = 40;
    teamDefense = 20;
    teamOffense = 10;
    teamCharm = 30;
    calcStats();
    chooseWeapons();
});

$("#ghost").click(function(){
    team = "The Ghostbusters";
    teamStealth = 30;
    teamDefense = 10;
    teamOffense = 20;
    teamCharm = 40;
    calcStats();
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

    $("#w0").click(function(){
        weight -=10;
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

    $("#a0").click(function(){
        weight -= 10;
        calcStats();
        scene1();
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
        uncomfort += 10;
        weight += 10;
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
        `<h1 class="action-title text-center">Directly in the path appears a mysterious, glowing box. WHAT'S IN THE BOX!?!?</h1>
        <button class="choice" id="b1">Open the box! It could hold a game winning tool!<button>
        <button class="choice" id="b2">Leave it alone. It smells funny.</button>`
    );

    $("#b1").click(function(){
        var rand = Math.random();
        console.log(rand);
        if (rand<.25){
            $(".jbGame").html(
                `<h1 class="action-title text-center">Ooo! Google translate! This might help us talk to any foreigners we might find.<h1>
                <button class="continue">Continue</button>`
            );
            tools += 50;
            uncomfort -= 10;
            $(".continue").click(function(){
                calcStats();
                scene3();
            });
        }else if (rand<.5){
            $(".jbGame").html(
                `<h1 class="action-title text-center">Ooo! A nifty book of recipies! This might give us a casserole to offer any new friends we might find.<h1>
                <button class="continue">Continue</button>`
            );
            tools += 30;
            uncomfort -= 10;
            $(".continue").click(function(){
                calcStats();
                scene3();
            });
        }else if (rand<.75){
            $(".jbGame").html(
                `<h1 class="action-title text-center">Ooo! A small beetle. Not sure how this is helpful....<h1>
                <button class="continue">Continue</button>`
            );
            $(".continue").click(function(){
                calcStats();
                scene3();
            });
        }else{
            $(".jbGame").html(
                `<h1 class="action-title text-center">Oh boy. A neuralyzer. Your team spends an hour trying to remember where they're headed.<h1>
                <button class="continue">Continue</button>`
            );
            uncomfort += 20;
            timeOfDay += 20;
            tools -= 10;
            $(".continue").click(function(){
                calcStats();
                scene3();
            });
        }
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

function scene3(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">${team} sees a fork in the road a ways in the distance. Which way do you go?</h1>
        <button class="choice" id="f1">Head left toward the creepy forest.<button>
        <button class="choice" id="f2">Head straight to the steep slope.</button>
        <button class="choice" id="f3">Head left to toward the sinister mountain.</button>`
    );
    $(".choice").click(function(){
        if (stealth>=.5){
            $(".jbGame").html(
                `<h1 class="action-title text-center">Your team ventures onward with very little interference.</h1>
                <button class="continue">Continue</button>`
            );
            $(".continue").click(function(){
                scene4();
            });
        }else if(offense>=.5){
            $(".jbGame").html(
                `<h1 class="action-title text-center">Your team ventures onward obliterating the dense bush they find around the corner.</h1>
                <button class="continue">Continue</button>`
            );
            $(".continue").click(function(){
                scene4();
            });
        }else if(defense>=.5){
            $(".jbGame").html(
                `<h1 class="action-title text-center">Your team ventures onward and trips across some roots (how embarassing). Luckily, no one was hurt.</h1>
                <button class="continue">Continue</button>`
            );
            $(".continue").click(function(){
                scene4();
            });
        }else{
            $(".jbGame").html(
                `<h1 class="action-title text-center">Your team ventures forward narrowly avoiding a catastrophic trap of roots and bushes.</h1>
                <button class="continue">Continue</button>`
            );
            $(".continue").click(function(){
                scene4();
            });
        }
    });
}

function scene4(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">Homebase call and asks if you need any reienforcements. Do you need to stock up on anything?</h1>
        <button class="choice" id="bu1">We need more weapons<button>
        <button class="choice" id="bu2">We need more armor</button>
        <button class="choice" id="bu3">We need more camoflauge</button>
        <button class="choice" id="bu4">We don't need to waste anymore time</button>`
    );

    $("#bu1").click(function(){
        weapons += 30;
        timeOfDay += 20;
        weight += 20;
        $(".jbGame").html(
            `<h1 class="action-title text-center">Homebase sends a few more weapons to the team. Team waits for delivery.</h1>
            <button class="continue">Continue to the UFO site</button>`
        );
        $(".continue").click(function(){
            calcStats();
            outcome();
        });
    });

    $("#bu2").click(function(){
        armor += 30;
        timeOfDay += 20;
        weight += 20;
        $(".jbGame").html(
            `<h1 class="action-title text-center">Homebase sends a more armor to the team. Team waits for delivery.</h1>
            <button class="continue">Continue to the UFO site</button>`
        );
        $(".continue").click(function(){
            calcStats();
            outcome();
        });
    });

    $("#bu3").click(function(){
        uncomfort -= 30;
        timeOfDay += 20;
        $(".jbGame").html(
            `<h1 class="action-title text-center">Homebase sends camoflauge to the team. Team waits for delivery.</h1>
            <button class="continue">Continue to the UFO site</button>`
        );
        $(".continue").click(function(){
            calcStats();
            outcome();
        });
    });
 
    $("#bu4").click(function(){
        $(".jbGame").html(
            `<h1 class="action-title text-center">The team bravely continues on without any additional help. No delays here!</h1>
            <button class="continue">Continue to the UFO site</button>`
        );
        $(".continue").click(function(){
            calcStats();
            outcome();
        });
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
    console.log("hello" + rand);
    if (rand>0.08){
        $(".jbGame").html(
            `<h1 class="action-title text-center">The team has made it to the UFO site!</h1>
            <button class="continue">Investigate the site</button>`
        );
        $(".continue").click(function(){
            anythingThere();
        });
    }else{
        $(".jbGame").html(
            `<h1 class="action-title text-center">The team has found their way into a dense forest and is hopelessly lost. They fail to reach the UFO site. Return home in shame.</h1>`
        );
    }
}

function anythingThere(){
    var rand = Math.random();
    console.log(rand);
    if (rand>0.09){
        $(".jbGame").html(
            `<h1 class="action-title text-center">Gasp! ${team} has found aliens!</h1>
            <button class="continue">Sneak up on their landing site</button>`
        );
        $(".continue").click(function(){
            spotted();
        });
    } else {
        var rand2 = Math.random();
        if (rand2>0.5){
            win = ture;
            $(".jbGame").html(
                `<h1 class="action-title text-center">Nothing's here... Guess ${team} should go home and report their findings.</h1>`
            );
        }else{
            win = true;
            $(".jbGame").html(
                `<h1 class="action-title text-center">There's no one here now, but it looks like someone's definitely made a disturbance. Go home and report back evidence.</h1>`
            );
        };
    };
};

function spotted(){
    var rand = Math.random();
    if(stealth>rand){
        win = true;
        $(".jbGame").html(
            `<h1 class="action-title text-center">Looks like the team is flying under the radar. Snoop around undetected. Report back with cool photos and evidence!</h1>`
        );
    }else{
        $(".jbGame").html(
            `<h1 class="action-title text-center">The aliens have spotted you! ...ooo and they look pissed. What's the plan?</h1>
            <button class="choice" id="s1">Fight<button>
            <button class="choice" id="s2">Negotiate</button>`
        );

        $("#s1").click(function(){
            calcStats();
            confrontation();
        });
    
        $("#s2").click(function(){
            calcStats();
            negotiate();
        });
    }
};

function confrontation(){
    var rand = Math.random();
    console.log(rand);
    if (offense>rand){
        win = true;
        $(".jbGame").html(
            `<h1 class="action-title text-center">Woo! The team has kept the aliens at bay. Take time to explore and record evidence. Report back findings.</h1>`
        );
    }else{
        $(".jbGame").html(
            `<h1 class="action-title text-center">Looks like the team has lost the fight... Tend to your injuries and return home.</h1>`
        );
    };
};

function negotiate(){
    var rand = Math.random();
    console.log(rand);
    if (charm>rand){
        win = true;
        $(".jbGame").html(
            `<h1 class="action-title text-center">${team} has charmed their way into the aliens' hearts. Return home with new fb friends.</h1>`
        );
    }else{
        $(".jbGame").html(
            `<h1 class="action-title text-center">Uh oh! The aliens don't look amused at your persuasion techniques...</h1>
            <button class="continue">Prepare defenses</button>`
        );
        $(".continue").click(function(){
            prepare();
        });
    }
}

function prepare(){
    var rand2 = Math.random()
    if (defense>rand2){
        win = true;
        $(".jbGame").html(
            `<h1 class="action-title text-center">Your defenses are just enough. No time to take evidence, run home and hope eveyone believes your story.</h1>`
        );
    }else{
        $(".jbGame").html(
            `<h1 class="action-title text-center">Your defenses are too weak. Your team is abducted.</h1>`
        );
    };
};

function save(){
    $(".jbGame").html(
        `<h1 class="action-title text-center">Save your game?.</h1>
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Enter Player Name</label>
                <input type="text" class="form-control" id="playerName" placeholder="plyr1">
            </div>
            <button class="continue">Submit Game</button>
        </form>
        `
    );
}