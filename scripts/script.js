// function greet(user, time = "day")
// {
//     console.log(`Good ${time} ${user}`)
// }

// greet("Eugene");
// greet("Eugene", "Night", "Morning");


// function greet(user) 
//{
//     console.log (`Hello ${user}`); 
//     //* this is basically console.log('Hello '+ user);
// }

// const greet = function(user) 
//{
//     console.log (`Hello ${user}`); 
//     //* this is basically console.log('Hello '+ user);
// }


// const greet = (user) => 
//{
//     console.log(`Hello ${user}`);
// }

// greet();

let r = prompt("Enter a radius."); //Gives us the pop up of "Enter a radius"

function circleArea (radius)
{
    const radiusP = document.querySelector("#radius");
    const resultP = document.querySelector("#result");
    radiusP.textContent = radius;
    let calculatedArea = Math.PI * radius * radius;
    resultP.textContent = calculatedArea;
    return calculatedArea;
}

let area = circleArea(r).toFixed(2); //'let area' stores the values of r (which was what the user inputted), the .toFixed rounds the decimal point

alert(`The area of the circle with radius ${r} is ${area}`) //alerts the output

