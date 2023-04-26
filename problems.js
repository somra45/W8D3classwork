// class Clock {
//     constructor() {
//         const currentTime = new Date()
//         this.hours = currentTime.getUTCHours();
//         this.minutes = currentTime.getUTCMinutes();
//         this.seconds = currentTime.getUTCSeconds();
        
//         console.log(this.printTime());
        
//         setInterval(this._tick.bind(this), 1000);
//     };

//     printTime() {
//         let time = `${this.hours}:${this.minutes}:${this.seconds}`
//         console.log(`${time}`);
//     };

//     _tick() {
//         this.seconds++
//         if (this.seconds === 60) {
//             this.seconds = 0
//             this.minutes++
//         }
//         if (this.minutes === 60) {
//             this.minutes = 0
//             this.hours++
//         }
//         if (this.hours === 24) {
//             this.hours = 0
//         }
//         this.printTime();
//     };
// };

// const clock = new Clock()

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let addNumbers = function(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Give me a number", response => {
            numsLeft--
            console.log(sum = sum + parseInt(response));
            if (numsLeft === 0) {
                console.log(completionCallback(sum));
                rl.close();
            };
            addNumbers(sum, numsLeft, completionCallback)
                
        });
    };

    
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
