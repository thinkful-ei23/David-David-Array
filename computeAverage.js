function average(numbers){
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    return sum / numbers.length;
}

let numbers = [4, 5, 2, 1, 9, 5];
console.log(average(numbers));