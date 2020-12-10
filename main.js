// console.log("20 12 10 JS Object Literals Primary"); // check that files are linked

// Robotics Club Members
// Create 4 objects using object literal notation that represent Club Members for a high school robotics club with the following properties
let clubMember1 = {
    name : "Autumn",
    role : "Vice President",
    email : "autumn@email.com",
    number : 9011234567,
}
// console.log(clubMember1);
let clubMember2 = {
    name : "Kevin",
    role : "President",
    email : "kevin@email.com",
    number : 9011244967,
}
// console.log(clubMember2);
let clubMember3 = {
    name : "Janice",
    role : "general member",
    email : "janice@email.com",
    number : 9011734367,
}
// console.log(clubMember3);
let clubMember4 = {
    name : "Alyssa",
    role : "treasurer",
    email : "alyssa@email.com",
    number : 9018731367,
}
// console.log(clubMember4);

// Create a function that takes a club member object and prints all of the properties of that club member and use it to print the details of any one club member
function printClubMember(member){
    console.log(`Name : ${member.name}\nRole : ${member.role}\nEmail : ${member.email}\nNumber : ${member.number}`);
}
// printClubMember(clubMember4);

// Add all 4 club members to an array called clubMembers
let clubMembers = [clubMember1, clubMember2, clubMember3, clubMember4];
// console.log(clubMembers);

// Create a Club Registry by looping through the clubMembers array and printing each club member's details and the total number of club members 
console.log("---- Club Registry ----");
for(let i = 0; i < clubMembers.length; i++){
    printClubMember(clubMembers[i]);
}
console.log(`Number of members : ${clubMembers.length}`);

// Create 4 objects using object literal notation that represent dogs at a local shelter with the following properties with at least one dog unavailable
let dog1 = {
    name: "Ace",
    breed: "Poodle",
    age: 4,
    available: true
}
let dog2 = {
    name: "Benny",
    breed: "Boxer",
    age: 1,
    available: false
}
let dog3 = {
    name: "Milo",
    breed: "German Shepard",
    age: 7,
    available: true
}
let dog4 = {
    name: "Oliver",
    breed: "Dachshund",
    age: 2,
    available: true
}
// Add all 4 dogs to an array called dogsForAdoption
let dogsForAdoption = [dog1, dog2, dog3, dog4];
// Create an Adoption List by looping through the dogsForAdoption array and printing each dog details and a count of available dogs. If a dog is unavailable do not include it in the count of available dogs

/*
Adoption List

Name: Scooby
Breed: Golden Retriever
age: 3
Available: false 

Name: Scrappy
Breed: Terrier
age: 1
Available: true

Available Dogs : 1
*/
console.log("---- Adoption List ----");
for(let i = 0; i < dogsForAdoption.length; i++){
    console.log(`Name : ${dogsForAdoption[i].name}\nBreed : ${dogsForAdoption[i].breed}\nAge : ${dogsForAdoption[i].age}\nAvailable : ${dogsForAdoption[i].available}\n`);
}
let availableDogs = 0;
for(let i = 0; i < dogsForAdoption.length; i++){
    if(dogsForAdoption[i].available == true){
        availableDogs++; // availableDogs = availableDogs + 1
    }
}
console.log(`Number of Available Dogs : ${availableDogs}`);