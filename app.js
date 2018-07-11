// A local nightclub is having a Battle of the Bands night in a few months. They want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.


const bandNumber = 1
let num = 0;

const takeNumber = function(bandName) {
    num++;
    return `${num}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum) 

const under = takeNumber("Underdogs")
console.log(under)

const stones = takeNumber("The Rolling Stones");
console.log(stones);