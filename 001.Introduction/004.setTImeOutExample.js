setTimeout(
    () => {
        console.log('Hello after 4 seconds');
    },
    4000
)

//93055$ node 004.setTImeOutExample.js 
//Hello after 4 seconds

const logFunction = delay => {
    console.log('Hello after ' + delay + ' seconds');
}

setTimeout(logFunction, 1000, 1)
setTimeout(logFunction, 2000, 2);

count = 0
const intervalFunc = logText => {
    console.log(logText)
    count++;
    if (count > 4) {
        clearInterval(intervalId)
    }
}


//const intervalId = setInterval(intervalFunc, 1000, "Logging after 1 sec");


// EXPERIMENT=> Pass a function returning the delay value and keep incrementing the delay. 
// Inference=> This does not work . the getIncrementDelayFunc gets executed only once
_delay = 1;
const getIncrementDelayFunc = () => _delay++;

const newIntervalId = delay => {
    console.log(`Printing after ${_delay} seconds`);
    if (_delay > 10) {
        clearInterval(newIntervalId);
    }
}

setInterval(newIntervalId, getIncrementDelayFunc() * 1000, _delay - 1)