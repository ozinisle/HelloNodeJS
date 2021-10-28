console.log('Current user is ', process.env.USER);

console.log('\nScript executed with:');

console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);

// (base) AMBIN01978:001.Introduction 493055$ VAL1=10 VAL2=20 node 006.customEnvVariable.js
// Current user is  493055

// Script executed with:
// VAL1 equal to: 10
// VAL2 equal to: 20

// (base) AMBIN01978:001.Introduction 493055$ export VAL1=100
// (base) AMBIN01978:001.Introduction 493055$ export VAL2=200
// (base) AMBIN01978:001.Introduction 493055$ node 006.customEnvVariable.js
// Current user is  493055

// Script executed with:
// VAL1 equal to: 100
// VAL2 equal to: 200


// (base) AMBIN01978:001.Introduction 493055$ node -p "process.argv" hello 42
// [ '/usr/local/bin/node', 'hello', '42' ]

// > process.stdout.write("this is console.log")
// this is console.log