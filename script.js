let buttonCalculate = document.querySelector(".btn");
buttonCalculate.addEventListener('click', BMICalculate);

function BMICalculate() {
    let height = parseInt(document.querySelector(".height").value);
    let weight = parseInt(document.querySelector(".weight").value);
    let resultValue = document.querySelector(".result")
    if (height === "" || isNaN(height)) {
        alert("please Enter the Height in Cm");
        // resultValue.innerHTML="please enter the height"
    }
    else if (weight === "" || isNaN(weight)) {
        alert("please enter the Weight in Kgs")
        //resultValue.innerHTML="please enter the weight"
    }
    else {
         let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 16) {
            resultValue.innerHTML = `Under Weight  ${bmi}`
        }
        else if (bmi >= 18 && bmi < 24) {
            resultValue.innerHTML = `Normal Weight ${bmi}`
        }
        else {
            resultValue.innerHTML=`Over Weight ${bmi}`
        }
    }
}

// let x = [0, 0],
//   y = [0, 0],
//   segLength = 50;

// function setup() {
//   createCanvas(710, 400);
//   strokeWeight(20.0);
//   stroke(255, 100);
// }

// function draw() {
//   background(0);
//   dragSegment(0, mouseX, mouseY);
//   dragSegment(1, x[0], y[0]);
// }

// function dragSegment(i, xin, yin) {
//   const dx = xin - x[i];
//   const dy = yin - y[i];
//   const angle = atan2(dy, dx);
//   x[i] = xin - cos(angle) * segLength;
//   y[i] = yin - sin(angle) * segLength;
//   segment(x[i], y[i], angle);
// }

// function segment(x, y, a) {
//   push();
//   translate(x, y);
//   rotate(a);
//   line(0, 0, segLength, 0);
//   pop();
// }
