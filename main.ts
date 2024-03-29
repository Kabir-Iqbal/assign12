// 12. Greetings: 
// Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be 
// personalized with the person’s name.
let names : string[]= ["Kabir", "Iqbal", "Ali", "Rehman", "Hamza"]
//For loop 
//For each 
//For of loop 
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]} are you today ? `);
}
///for each
names.forEach(friends => {
    console.log(`Hello ${friends} how are you today ?`);
});
//for of loop
for (const friend1 of names) {
    console.log(`Hello ${friend1} how are you today ? `);
}