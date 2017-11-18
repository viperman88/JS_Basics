let money = 0.01;
for (let i = 1; i <= 30; i++) {
    console.log(money);
    money *= 2;
}

//Create a function that can take a start point, end point, and skip amount, to
//print all numbers in the range.
const printRange = (start, end, skip) => {
    for (let i = start; i <= end; i += skip)
        console.log(i);
}
printRange(0, 35, 5);

//Fancy array. print array of names with index followed by fancy symbol, then names
// ex. '0 => Jill', or '1 <=> Rob'
let arr = ['Robert', 'Maggie', 'Franklin']
const fancyArr = (fancySymbol) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i + ' ' + fancySymbol + ' ' + arr[i]);
    }
}
fancyArr('< === >');

//Make a function that takes a number of quarters (10 quarters = 1 game).
// There is a 1 in 50 chance to win the slot machine (which will give you between
// 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).
// While the user still has quarters, use Math.random to determine if they won.
// If they ever win, return the number of quarters (ex: they had 50 remaining quarters
// and won 90, so it should return 140).
// Return 0 if all the quarters were wasted.
let quarters = 1000;
let bet = 10;

const testYourLuck = () => {
    while (quarters >= bet) {
        let playersNum = Math.floor(Math.random() * 51);
        let slotNum = Math.floor(Math.random() * 51);
        let winnings = Math.floor(Math.random() * 50) + 50;
        if (playersNum == slotNum) {
            console.log(`Your number was ${playersNum}, the slots was ${slotNum}. You won ${winnings} quarters! You now have ${quarters} left.`);
            quarters += winnings - bet;
        } else if (playersNum !== slotNum) {
            console.log(`Your number was ${playersNum}, the slots was ${slotNum}. You lost ${bet} quarters! You now have ${quarters} left.`);
            quarters -= bet;
        }
    }
    console.log(`Your pot is at ${quarters}. That is lower than the minimum bid. Go home!`);
}
testYourLuck()

//Make a function that copies an array, ONLY accepting the items that are numbers.
//second challenge to make one that removes them from original array
const numbersOnly = (arr) => {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
numbersOnly([1, "apple", -3, "orange", 0.5, 22, "hello", 6])

//Removes them
const numbersOnly = (arr) => {

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}
numbersOnly([1, "apple", -3, "orange", 0.5, 22, "hello", 6])


//Results should be like this
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel
var students = [{
        first_name: 'Michael',
        last_name: 'Jordan'
    },
    {
        first_name: 'John',
        last_name: 'Rosales'
    },
    {
        first_name: 'Mark',
        last_name: 'Guillen'
    },
    {
        first_name: 'KB',
        last_name: 'Tonel'
    }
]

const studentNames = () => {
    students.forEach(student => {
        console.log(`${student.first_name} ${student.last_name}`);
    });
};
studentNames()


//Results should look like this with index +1 name and length
// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13
let users = {
    'Students': [{
            fName: 'Michael',
            lName: 'Jordan'
        },
        {
            fName: 'John',
            lName: 'Rosales'
        },
        {
            fName: 'Mark',
            lName: 'Guillen'
        },
        {
            fName: 'KB',
            lName: 'Tonel'
        }
    ],
    'Instructors': [{
            fName: 'Michael',
            lName: 'Choi'
        },
        {
            fName: 'Martin',
            lName: 'Puryear'
        }
    ]
}



const studentNames = () => {

    for (let title in users) {
        console.log(title)
        for (let i = 0; i < users[title].length; i++) {
            let fullname = users[title][i].fName + users[title].lName
            console.log(`${i} - ${users[title][i].fName} ${users[title][i].lName} - ${fullname.length}`)
        }
    }

};
studentNames()
