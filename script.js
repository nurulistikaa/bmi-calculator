var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height = height / 100;
	bmi = weight / (height * height);
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is <strong>" + bmi + " </strong> which means " + "you are <strong>Underweight</strong>";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is <strong>" + bmi + " </strong> which means " + "You are <strong>Normal</strong>";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is <strong>" + bmi + " </strong> which means " + "You are <strong>Overweight</strong>";
	} else if (bmi >= 30) {
		measure = "Your BMI is <strong>" + bmi + " </strong> which means " + "You are <strong>Obese</strong>";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
