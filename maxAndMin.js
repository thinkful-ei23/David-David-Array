function max(numbers){
    let i = 0;
    let currentMax = numbers[0];

    while (i < numbers.length){
        if (numbers[i] > currentMax){
            currentMax = numbers[i];
        }
        i++;
    }
    return currentMax;
}

let numbers = [3, 4, 6, 2, 5];
console.log(max(numbers));

function min(numbers){
    let i = 0;
    let currentMin = numbers[0];

    while (i < numbers.length){
        if (numbers[i] < currentMin){
            currentMin = numbers[i];
        }
        i++;
    }
    return currentMin;
}

console.log(min(numbers));