/* Assignment a3's JavaScript file
 * a3 is a JavaScript Retirement Calculator*/

/*we need to ask the user for year of birth, current savings,
 expected retirement age, and life expectancy, plus scenario info.
When the user clicks calculate, we run this function.*/

function basicInput(){

	//we'll need the current year for other operations later on
	var currentYear = parseFloat(new Date().getFullYear());

	//make the birth year we get from user input into a number
	birthYear = parseFloat(document.getElementById("birthYear").value);
	console.log("this is birthyear: "+birthYear);
	//check that birth year is positive
	if(birthYear > 0){
	//check that birth year is in the past
		if(birthYear < currentYear){	

			this.birthYear = birthYear;

		}else if(birthYear > currentYear){

			document.getElementById('errors').innerHTML += 'Please provide a birth year that is in the past.\</br>';

		}
	}else if(birthYear == ""){

		document.getElementById('errors').innerHTML += 'Please provide a positive birth year that is in the past.\</br>';
		
	}else if(isNaN(birthYear)){

		document.getElementById('errors').innerHTML += 'Please provide a numerical birth year.\</br>';

	}


	//check that current savings are a number
	var current = parseFloat(document.getElementById("current").value);

	//use isNaN function
	if(current==""){

		document.getElementById('errors').innerHTML += 'Please enter a number for your savings.\</br>';

	}else if( isNaN(current) ){

		document.getElementById('errors').innerHTML += 'Please enter a number for your savings.\</br>';

	}else{

		this.current = current;

	}


	//check that the expected retirement age is a number and is in the future
	//we subtract the current year from the user's year of birth to get the number
	//that the user must have a retirement age greater than
	var retireAge = parseFloat(document.getElementById("expectedRA").value);
	var testNumber = currentYear - birthYear;

	//use isNaN function first and check that retireAge is greater than the testing number
	if(isNaN(retireAge) || retireAge < testNumber){

		document.getElementById('errors').innerHTML += 'Please provide a retirement age that is a number and in the future.\</br>';

	}else{

		this.retireAge = document.getElementById("expectedRA").value;

	}

	//check that life expectancy is a number and that it is in the future
	//beyond the expected retirement age
	var life = parseFloat(document.getElementById("lifeExpectancy").value);

	//use is NaN, then check to see if it's greater than retirement age
	if(isNaN(life)){

		document.getElementById('errors').innerHTML += 'Please provide a life expectancy that is a number.\</br>';


	}else if(retireAge > life){


		document.getElementById('errors').innerHTML += 'Please provide a life expectancy in the future that is beyond your expected retirement age.\</br>';
		document.getElementById('errors').innerHTML += 'The error is with retireAge\</br>';
		document.getElementById('errors').innerHTML += 'retireAge is '+retireAge+'\</br>';
		document.getElementById('errors').innerHTML += 'life is '+life+'\</br>';

	}else if(life < testNumber){


		document.getElementById('errors').innerHTML += 'Please provide a life expectancy in the future that is beyond your expected retirement age.\</br>';


	}else{

		this.life = life;
	
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


	var work = parseFloat(document.getElementById("work").value);
	//now we check the rates of return to make sure they're greater than 0
	if(work<=0){
		document.getElementById('errors').innerHTML += 'Please enter a work rate greater than 0.\</br>';
		
	}else{
		this.work = work;
	}

	var retire = parseFloat(document.getElementById("retire").value);
	if(document.getElementById("retire").value <= 0){
		document.getElementById('errors').innerHTML += 'Please enter a retirement rate greater than 0.\</br>';
		
	}else{
		this.retire = retire;
	}


	//now we check that the desired yearly income is a positive value
	var yearlyIncome = parseFloat(document.getElementById("yearly").value);
	if(yearlyIncome<=0){
		document.getElementById('errors').innerHTML += 'Please enter a positive yearly income.\</br>';
		
	}else{
		this.yearlyIncome = yearlyIncome;
	}

	//call the calculate function and pass all the variables we got out of this one
	calculate(birthYear, current, retireAge, life, work, retire, yearlyIncome, scenarioName, currentYear);

}

//here's our fun little formula

function calculate(birthYear, current, retireAge, life, work, retire, yearlyIncome, scenarioName, currentYear){

	//creating some variables to make writing the formula a little easier
	var workingYears = retireAge - (currentYear - birthYear);
	var retireYears =  life - retireAge;
	var adding = 1.0;
	var rateWorkReturn = work + adding;
	var rateRetireReturn = retire + adding;

	var minusOne = retireYears - 1;

	//taking care of the powers so that they don't have to be done mid-formula
	gToA = Math.pow(rateRetireReturn, minusOne);
	gToM = Math.pow(rateRetireReturn, retireYears);
	rToN = Math.pow(rateWorkReturn, workingYears);


	//breaking parts of the formula down
	var partA = (yearlyIncome / gToA);
	var partB = ((1 - gToM) / (1 - rateRetireReturn));
	var partC = (current * rToN);
	var partD = ( (1 - rateWorkReturn) / (1 - rToN));


	//full-fledged formula
	var savePerYear = ((partA * partB) - (partC)) * (partD);
	//now that we've done that...
	//let's trim savePerYear some, get rid of multitude of decimal places
	var fixedSavePerYear = parseFloat(savePerYear).toFixed(2);
	

	//let's clear out any errors from earlier
	clearErrors();

	//create a space where we'll see the results year by year. could be prettier
	document.getElementById("answers").innerHTML += '<p>Your Scenario is called '+scenarioName+'\</br>';
	document.getElementById("answers").innerHTML += '<table>';
	document.getElementById("answers").innerHTML += '<th><td>Year</td><td> Total Savings</td></th>\</br>';
	//we need to know the total number of years they'll be saving for our loop to run
	var totalYears = workingYears + retireYears;
	for(var i = 1; i <= totalYears; i++){

		if(isNaN(savePerYear)){

			break;

		}else{
		//variable to determine how much we'll have in savings each year
		var calculatedSavings = parseFloat(fixedSavePerYear * i).toFixed(2);
		document.getElementById("answers").innerHTML += '<tr><td>Year '+i+':</td> <td>'+calculatedSavings+"</td></tr>\</br>";

		//fixedSavePerYear += fixedSavePerYear;
		}
	}

	//close our table
	
}

//a function for clearing errors

function clearErrors(){

	var remover = document.getElementById("errors");
	for(var x = remover.length; x++;){

		remover[x].parentNode.removeChild(remover[x]);

	}

}