/* Assignment a3's JavaScript file
 * a3 is a JavaScript Retirement Calculator*/

/*we need to ask the user for year of birth, current savings,
 expected retirement age, and life expectancy.
This user's input becomes our "basic" object class.
When the user clicks calculate, we run this function.*/

function basicInput(){


	//check that birth year is positive and in the past
	if(document.getElementById("").value>0 && ){	
		this.birthYear = document.getElementById("birthYear").value;		
	}else{
		document.write("Please provide a positive birth year that is in the past.");
	}

	//check that current savings are a number
	if(document.getElementById("").value){
		this.currentSavings = document.getElementById("current").value;
	}else{
		document.write("Please enter a numerical value for savings.");
	}

	//check that the expected retirement age is a number and is in the future
	//we subtract the current year from the user's age of birth to get the number
	//that the user must have a retirement age greater than
	
	if(document.getElementById("").value){
		this.expectedRA = document.getElementById("expectedRA").value;
	}else{
		document.write("Please provide a numerical retirement age that is in the future.");
	}

	//check that life expectancy is a number and that it is in the future
	//beyond the expected retirement age
	if(document.getElementById("lifeExpectancy").value){
		this.lifeExpectancy = document.getElementById("lifeExpectancy").value;
	}else{
		document.write("Your life expectancy must be a number, in the future, and should be beyond the expected retirement age.");

	}

}

/*we also want to get user input about a scenario object--its name, rate of investment return
 * while the user is working, their investment rate while retired, and their
 * desired retirement yearly income*/

function scenarioInput(){
	//check to see if we have a scenario name and it isn't composed of whitespace
	if(document.getElementById("scenarioName").value==""){
		document.write("Please enter a valid scenario name.");
	}else{
		this.scenarioName = document.getElementById("scenarioName").value;
	}


	//now we check the rates of return to make sure they're greater than 0
	if(document.getElementById("work").value<=0){
		document.write("Please enter a rate greater than 0.");
	}else{
		this.workReturn = document.getElementById("work").value;
	}
	
	if(document.getElementById("retire").value<=0){
		document.write("Please enter a rate greater than 0.");
	}else{
		this.workReturn = document.getElementById("retire").value;

	}


	//now we check that the desired yearly income is a positive value
	if(document.getElementById("yearly").value<=0){
		document.write("Please enter a positive yearly income.");
	}else{
		this.yearlyIncome = document.getElementById("yearly").value;
	}
}

