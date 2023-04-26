class Clock {
    constructor() {
        const currentTime = new Date()
        this.hours = currentTime.getUTCHours();
        this.minutes = currentTime.getUTCMinutes();
        this.seconds = currentTime.getUTCSeconds();
        
        console.log(this.printTime());
        
        setInterval(this._tick.bind(this), 1000);
    };

    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`
        console.log(`${time}`);
    };

    _tick() {
        this.seconds++
        if (this.seconds === 60) {
            this.seconds = 0
            this.minutes++
        }
        if (this.minutes === 60) {
            this.minutes = 0
            this.hours++
        }
        if (this.hours === 24) {
            this.hours = 0
        }
        this.printTime();
    };
};

// const clock = new Clock()

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let addNumbers = function(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         rl.question("Give me a number", response => {
//             numsLeft--
//             console.log(sum = sum + parseInt(response));
//             if (numsLeft === 0) {
//                 console.log(completionCallback(sum));
//                 rl.close();
//             };
//             addNumbers(sum, numsLeft, completionCallback)
                
//         });
//     };

    
// };

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// Function.prototype.myBind = function(context) {
//     let that = this
//     let arrow = function(){
//         that.apply(context)
//     }
//     return arrow
// }

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}?(type yes or no)`, response => {
        if (response === 'yes') {
            callback(true)
        }
        else {
            callback(false)
        };
    });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps)
    }
    else if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
            if (isGreaterThan === true) {
                let first = arr[i]
                let second = arr[i+1]
                arr[i] = second
                arr[i+1] = first
                madeAnySwaps = true
            };
        });
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    };
};

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        }
        else { 
            sortCompletionCallback(arr)
        };
    };
    outerBubbleSortLoop(true)
  };

// let test = function(bool){
//     console.log(bool)
// }

// askIfGreaterThan(10, 5, test)

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });
