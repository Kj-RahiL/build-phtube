const seconds = 3800;

// Calculate the number of hours
const hours = Math.floor(seconds / 3600);

// Calculate the remaining seconds after removing hours
const remainingSeconds = seconds % 3600;

// Calculate the number of minutes from the remaining seconds
const minutes = Math.floor(remainingSeconds / 60);
const second = seconds % 60

console.log(hours + 'hrs', minutes + 'min', second + 's')


const secMinHrs = (seconds) =>{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) /60);
    const second = seconds % 60;
    const result = hours + 'hrs ' + minutes + 'min ' + second + 's';
    console.log(result)
}
const Total = secMinHrs(39055)
// console.log(Total)