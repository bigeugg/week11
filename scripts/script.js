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
    return Math.PI * radius * radius;
}

let area = circleArea(r); //'let area' stores the values of r (which was what the user inputted)
alert(`The area of the circle with radius ${r} is ${area}`) //alerts the output