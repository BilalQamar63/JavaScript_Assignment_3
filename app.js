// *******************{Chapter 14-16 (Q1)*********************}

// var studentName1 = prompt("Enter First Student Name");
// var studentName2 = prompt("Enter Second Student Name");
// var studentName3 = prompt("Enter Third student Name");

// var arr = [];
// arr.push(studentName1  + "<br>"+ studentName2 + "<br>"+studentName3);
// document.write(arr);

// *******************{Chapter 14-16 (Q2)*********************}

// let studentNames = [];


// *******************{Chapter 14-16 (Q3)*********************}


// var animals = ["lion","snake","bear","dog","tiger","cat","deer"];

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);
// console.log(animals[5]);
// console.log(animals[6]);



// *******************{Chapter 14-16 (Q4)*********************}

// var number = ["1234","5678","9012","3456","7890"];

// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);

// *******************{Chapter 14-16 (Q5)*********************}


// var boolean = ["True","False"];

// console.log(boolean[0]);
// console.log(boolean[1]);


// *******************{Chapter 14-16 (Q6)*********************}


// var arr1 = ["abc", 100, true, "Bilal"];

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

// *******************{Chapter 14-16 (Q7)*********************}

// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.fill","PhD"];
// console.log(qualifications[0]);
// console.log(qualifications[1]);
// console.log(qualifications[2]);
// console.log(qualifications[3]);
// console.log(qualifications[4]);
// console.log(qualifications[5]);
// console.log(qualifications[6]);


// *******************{Chapter 14-16 (Q8)*********************}

// var studentNames4 = ["Micheal","John","Tony"];
// var obtMarks = [320,230,480];
// var totalMarks = [500]
// var percentage = (obtMarks / totalMarks) *100;

// for (var i = 0; i < studentNames4.length; i++) {
//     var Name = studentNames4[i];
//     var score = obtMarks[i];


//     console.log(Name + "'s Score: " + score);
//     console.log(Name + "'s Percentage: " + percentage + "%");
//     console.log();
// }





// *******************{Chapter 14-16 (Q9)**********************}

// var color = ["blue","green","yellow"];
// console.log(color)
// *******************{Chapter 14-16 [====Q9=====(a)====]**********************}
// color.unshift(prompt("enter any color name"));
// console.log(color);

// *******************{Chapter 14-16 [====Q9=====(b)====]**********************}

// color.push(prompt("enter any color name"));
// console.log(color);


// *******************{Chapter 14-16 [====Q9=====(c)====]**********************}

// color.unshift(prompt("enter first color name"));
// color.unshift(prompt("enter second color name"));
// console.log(color);

// *******************{Chapter 14-16 [====Q9=====(d)====]**********************}

// color.shift();
// console.log(color);

// *******************{Chapter 14-16 [====Q9=====(e)====]**********************}


// color.pop();
// console.log(color);
// *******************{Chapter 14-16 [====Q9=====(f)====]**********************}

// var index = prompt("Enter the index where you want to add a color:");
// var colorAdd = prompt("Enter the color name to add at that index:");
// color.splice(index, 0, color);
// console.log("Updated Array (Added at Specific Index): " + colorAdd);


// *******************{Chapter 14-16 [====Q9=====(g)====]**********************}

// color.shift();

// color.unshift("lahore");

// color.splice(3, 1, true);

// var copyArr = color.slice(2, 3);

// console.log(copyArr);
// console.log(color);

// *******************{Chapter 14-16 (Q10)*********************}

// var studentScores = [320, 230, 420, 180];

// console.log("Initial Array: " + studentScores);

// console.log("Ascending Order: ","1)", studentScores[3]);
// console.log("2)",studentScores[1]);
// console.log("3)",studentScores[0]);
// console.log("4)",studentScores[2]);

// *******************{Chapter 14-16 (Q11)*********************}

// var cityName = ["Karachi", "Lahore", "Islamabad","Quetta","Sadiqabad"];

// console.log(cityName);

// var slectCities = cityName.slice(2,5);
// console.log(slectCities);

// *******************{Chapter 14-16 (Q12)*********************}

// var arr = ["This", "is" , "my", "Cat"];
// var singleString = arr.join(" ");
// console.log(singleString);

// *******************{Chapter 14-16 (Q13)*********************}

// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// console.log("Devices:",devices)

// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// console.log("Out:" ,devices[0]);
// console.log("Out:" ,devices[1]);
// console.log("Out:" ,devices[2]);
// console.log("Out:" ,devices[3]);


// *******************{Chapter 14-16 (Q14)*********************}

// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// console.log("Devices:",devices)

// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// console.log("Out:" ,devices[3]);
// console.log("Out:" ,devices[2]);
// console.log("Out:" ,devices[1]);
// console.log("Out:" ,devices[0]);

// *******************{Chapter 14-16 (Q15)*********************}


var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"];

document.write(
  "<select>" +
    "<option>" +
    arr[0] +
    "</option>" +
    "<option>" +
    arr[1] +
    "</option>" +
    "<option>" +
    arr[2] +
    "</option>" +
    "<option>" +
    arr[3] +
    "</option>" +
    "<option>" +
    arr[4] +
    "</option>" +
    "<option>" +
    arr[4] +
    "</option>"+
    "</select>"
);