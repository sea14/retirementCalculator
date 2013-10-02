/* Assignment a3's JavaScript file
 * a3 is a JavaScript Retirement Calculator*/

/*we need to ask the user for year of birth, current savings,
 expected retirement age, and life expectancy.
This user's input becomes our "basic" object class.
When the user clicks calculate, we run this function.*/

function basicInput(){

	//we'll need the current year for other operations later on
	var currentYear = new Date().getFullYear();
	
	
	
	//check that birth year is positive
	if(document.getElementById("birthYear").value>0){

		//check that birth year is in the past
		if(document.getElementById("birthYear").value < currentYear){	
	
			this.birthYear = document.getElementById("birthYear").value;
			
		}
	}else{
	
		document.getElementById('errors').innerHTML += 'Please provide a positive birth year that is in the past.\</br>';
		var greaterNum = 0;

	}
	
	
	//check that current savings are a number
	var savingsValue = document.getElementById("current").value;
	
	//use isNaN function
	if(isNaN(savingsValue) || savingsValue==""){
	
		document.getElementById('errors').innerHTML += 'Please enter a number for your savings.\</br>';
	
	}else{
	
		this.current = document.getElementById("current").value;
	
	}
	
	
	//check that the expected retirement age is a number and is in the future
	//we subtract the current year from the user's year of birth to get the number
	//that the user must have a retirement age greater than
	var retireAge = document.getElementById("expectedRA").value;
	var testNumber = currentYear - birthYear;
	
	//use isNaN function first and check that retireAge is greater than the testing number
	if(isNaN(retireAge) || retireAge < testNumber){
	
		document.getElementById('errors').innerHTML += 'Please provide a retirement age that is a number and in the future.\</br>';
	
	}else{
	
		this.expectedRA = document.getElementById("expectedRA").value;
	
	}

	//check that life expectancy is a number and that it is in the future
	//beyond the expected retirement age
	var life = document.getElementById("lifeExpectancy").value;
		
	//use is NaN, then check to see if it's greater than retirement age
	if(isNaN(life)){
		
		document.getElementById('errors').innerHTML += 'Please provide a life expectancy that is a number.\</br>';


	}else if(retireAge < life){
	

		document.getElementById('errors').innerHTML += 'Please provide a life expectancy in the future that is beyond your expected retirement age.\</br>';

		
	}else if(life < testNumber){


		document.getElementById('errors').innerHTML += 'Please provide a life expectancy in the future that is beyond your expected retirement age.\</br>';
		

	}else{

		this.lifeExpectancy = document.getElementById("lifeExpectancy").value;

	}

	

/*we also want to get user input about a scenario--its name, rate of investment return
 * while the user is working, their investment rate while retired, and their
 * desired retirement yearly income*/


	//check to see if we have a scenario name and it isn't composed of whitespace
	if(document.getElementById("scenarioName").value==""){
		document.getElementById('errors').innerHTML += 'Please provide valid scenario name that is not composed of whitespace.\</br>';
	}else{
		this.scenarioName = document.getElementById("scenarioName").value;
	}


	//now we check the rates of return to make sure they're greater than 0
	if(document.getElementById("work").value<=0){
		document.getElementById('errors').innerHTML += 'Please enter a work rate greater than 0.\</br>';
	}else{
		this.workReturn = document.getElementById("work").value;
	}
	
	if(document.getElementById("retire").value <= 0){
		document.getElementById('errors').innerHTML += 'Please enter a retirement rate greater than 0.\</br>';
	}else{
		this.retireReturn = document.getElementById("retire").value;
	}

	
	//now we check that the desired yearly income is a positive value
	if(document.getElementById("yearly").value<=0){
		document.getElementById('errors').innerHTML += 'Please enter a positive yearly income.\</br>';
	}else{
		this.yearlyIncome = document.getElementById("yearly").value;
	}

	//call the calculate function and pass all the variables we got out of this one
	calculate(lifeExpectancy, expectedRA, current, birthYear, currentYear, workReturn, retireReturn, yearlyIncome);

}

//here's our fun little formula

function calculate(lifeExpectancy, expectedRA, current, birthYear, currentYear, workReturn, retireReturn, yearlyIncome){

	var workingYears = expectedRA - (currentYear - birthYear);
	var retireYears = lifeExpectancy - expectedRA;



	//we have the yearly retirement income and initial amount of savings from the other functions
	//so...

	var savePerYear = ((((yearlyIncome/(1 + retireReturn)(Math.pow(retireYears-1))) * 1 - ((1 + retireReturn))(Math.pow(retireYears))/1 - (1 + retireReturn))) -
		(current * (1 + workReturn)(Math.pow(workingYears))) * ( (1 - (1 + workReturn))/(1 - (1 + workReturn))(Math.pow(workingYears))));

	document.getElementById("answers").innerHTML += "You have to save "+savePerYear+" per year.";

}