// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(chunk);
//     }
// });

// (base) AMBIN01978:001.Introduction 493055$ node 007.process.js 
// hai
// hai
// (base) AMBIN01978:001.Introduction 493055$

//process.stdin.pipe(process.stdout)

// (base) AMBIN01978:001.Introduction 493055$ node 007.process.js 
// hello 
// hello
// hai
// hai
// exit
// exit
// .exit
// .exit
// ^C
// (base) AMBIN01978:001.Introduction 493055$ 

setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
    console.log('Process will exit now. See you later!')
});

console.log('Hello!');