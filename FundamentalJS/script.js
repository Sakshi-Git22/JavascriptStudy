'use strict';

const Sakshi = {
    firstName : 'Sakshi',
    lastName :'Kumari',
    age : 21,
    job : 'Student',
    friends: ['Ankita','Manu','Sima','Kunjan'],

};
console.log(Sakshi.age);
//we can also write it as:=
console.log(Sakshi['age']);

// printing the value with concatinating a string

const nameKey='Name';
console.log(Sakshi['first'+ nameKey]);
console.log(Sakshi['last'+ nameKey]);

// prompt function;

const question = prompt('What do you want to knwo about Sakshi? Choose between firstName, lastName,age,job and friends');
if(Sakshi[question]){
    console.log(Sakshi[question]);
}
else {
    console.log('Wrong Input');
}

// challenge
// printing "Sakshi has 4 friends, and her best friend name is Ankita"

let m = Sakshi.friends.length;
console.log(`Sakshi has ${m} friends, and her best friend name is ${Sakshi.friends[0]}`);

// adding more objects 

Sakshi.location = 'Delhi';
Sakshi.Github = '@Sakshi-Git22';
console.log(Sakshi);