var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

// Number 1

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
        console.log("old enough");
    } else {
        console.log("not old enough");
    }
}

// Number 2

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
    }
}

// Number 3

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad.age >= 18 ) {

        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let HIM in")
        } else {
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.");
        }


    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in")
        } else {
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in");
        }
    }
}

// Number 4

var count = 0;
for (var i = 0; i < 101; i++) {
    if (count % 2 === 0) {
        console.log (count + " is even.")
        count ++;
    } else {
        console.log (count + " is odd")
        count ++;
    }
}

// Extra Credit

var light = false;
var switches = [ 3 , 2 ];

for ( var i = 0; i <switches.length; i++) {
    for(var v = 0; v < switches[i]; v++ ) {
        light = !light;
    }
}

console.log (light);
