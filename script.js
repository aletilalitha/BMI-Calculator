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

