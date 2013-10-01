/* Assignment a3's JavaScript file
 * a3 is a JavaScript Retirement Calculator*/

/*we need to ask the user for year of birth, current savings,
 expected retirement age, and life expectancy.
This user's input becomes our "basic" object class.
When the user clicks calculate, we run this function.*/

function basicInput(){

	var currentYear = new Date().getFullYear();
	//check that birth year is positive
	if(document.getElementById("birthYear").value>0){

		//check that birth year is in the past
		if(document.getElementById("birthYear").value < currentYear){	
	
		this.birthYear = document.getElementById("birthYear").value;		
		var greaterNum = currentYear - document.getElementById("birthYear").value;
		return greaterNum;
		}
	}else{
	
		document.writeln("Please provide a positive birth year that is in the past.");
		var greaterNum = 0;
	}

	/*//check that current savings are a number
	var testSave = document.getElementById("current").value;

	if(isNaN(testSave)){
		alert("Please enter a numerical value for savings.");
	}else{
			 this.currentSavings = testSave;
	}

	//check that the expected retirement age is a number and is in the future
	//we subtract the current year from the user's year of birth to get the number
	//that the user must have a retirement age greater than
	
	var testRA = document.getElementById("expectedRA").value;
	
	//we calculate the greater number below

	
	var goodAge = greaterNum - testRA;
	if(goodAge > testRA){
		this.expectedRA = document.getElementById("expectedRA").value;
	}else{
		document.writeln("Please provide a numerical retirement age that is in the future.");
	}
	*/


	//check that life expectancy is a number and that it is in the future
	//beyond the expected retirement age
	/*	if(isNaN(document.getElementById("lifeExpectancy").value) || document.getElementById("lifeExpectancy").value - expectedRA){
		document.writeln("Your life expectancy must be a number, in the future, and should be beyond the expected retirement age.");
	}else{
		this.lifeExpectancy = document.getElementById("lifeExpectancy").value;

	} */

}

/*we also want to get user input about a scenario object--its name, rate of investment return
 * while the user is working, their investment rate while retired, and their
 * desired retirement yearly income*/

function scenarioInput(){
	//check to see if we have a scenario name and it isn't composed of whitespace
	if(document.getElementById("scenarioName").value==""){
		document.writeln("Please enter a valid scenario name.");
	}else{
		this.scenarioName = document.getElementById("scenarioName").value;
	}


	//now we check the rates of return to make sure they're greater than 0
	if(document.getElementById("work").value<=0){
		document.writeln("Please enter a rate greater than 0.");
	}else{
		this.workReturn = document.getElementById("work").value;
	}
	
	if(document.getElementById("retire").value <= 0){
		document.writeln("Please enter a rate greater than 0.");
	}else{
		this.workReturn = document.getElementById("retire").value;

	}


	//now we check that the desired yearly income is a positive value
	if(document.getElementById("yearly").value<=0){
		document.getElementById("errors").innerHTML = "Please enter a positive yearly income.");
	}else{
		this.yearlyIncome = document.getElementById("yearly").value;
	}
}

//here's our fun little formula

var savings = "blah blah blah";

