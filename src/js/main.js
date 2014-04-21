function calculateLostRate() {
/*Return the calculated lost rate based on the user provided reached-rate*/
	//Obtain reached-rate form element
	var reachedRate = document.getElementById("reached-rate").value;
	
	//Calculate lost rate
	var lostRate = (100 - reachedRate) / 100;
	
	return lostRate;
}

function secondsPerPeriod(period) {
/*Return the calculated number of seconds based on a time period argument*/
/*The 'period' argument is expected to be one of the following strings:
"Minute"
"Hour"
"Day"
"Week"
"Year"
*/
	
	//Constant time values
	var SECONDS_PER_MINUTE = 60;
	var MINUTES_PER_HOUR = 60;
	var HOURS_PER_DAY = 24;
	var DAYS_PER_WEEK = 7;
	var WEEKS_PER_YEAR = 52;
	var DAYS_A_YEAR = 365;

	switch (period) {
		case "Minute":
			return SECONDS_PER_MINUTE;
		case "Hour":
			var secondsHour = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
			return secondsHour;
		case "Day":
			var secondsDay = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;
			return secondsDay;
		case "Week":
			var secondsWeek = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_PER_WEEK;
			return secondsWeek;
		case "Year":
			var secondsYear = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_A_YEAR;
			return secondsYear;
		default:
			//return error message if receive non-expected input
			return "Please provide a string of Minute, Hour, Day, Week, or Year as the period";
	}	
}

function calculateDeathsPerPeriod(period,type) {
/*Return the number of people who die based on the provided period of time argument and the type argument (total deaths or deaths of lost)*/
/*The 'period' argument is expected to be one of the following strings:
"Second"
"Minute"
"Hour"
"Day"
"Week"
"Year"

*The 'type' argument is expected to be one of the following strings:
"Total"
"Lost"
*/

	//Obtain Population form element
	var population = document.getElementById("population").value;

	//Obtain Death Rate form element
	var deathRate = document.getElementById("death-rate").value;		

	//Obtain Reached Rate form element
	var reachedRate = document.getElementById("reached-rate").value;
	
	//Obtain Lost Rate
	var lostRate = calculateLostRate();

	//Convert crude death rate to percentage
	var deathRatePercentage = deathRate / 1000;

	//Calculate deaths a year
	var deathsYear = deathRatePercentage * population;
	
	//Calculate deaths per second
	var deathsPerSecond = deathsYear / secondsPerPeriod("Year");

	if (type == "Total") {
		switch (period) {
			case "Second":
				return deathsPerSecond;
			case "Minute":
				var deathsPerMinute = deathsPerSecond * secondsPerPeriod("Minute");
				return deathsPerMinute;
			case "Hour":
				var deathsPerHour = deathsPerSecond * secondsPerPeriod("Hour");
				return deathsPerHour;
			case "Day":
				var deathsPerDay = deathsPerSecond * secondsPerPeriod("Day");
				return deathsPerDay;
			case "Week":
				var deathsPerWeek = deathsPerSecond * secondsPerPeriod("Week");
				return deathsPerWeek;
			case "Year":
				var deathsPerYear = deathsPerSecond * secondsPerPeriod("Year");
				return deathsPerYear;
			default:
				//return error message if receive non-expected input
				return "Error 1";
		}
	}
	else if (type == "Lost") {
		switch (period) {
			case "Second":
				var deathsPerSecondLost = calculateDeathsPerPeriod("Second","Total") * lostRate;
				return deathsPerSecondLost;
			case "Minute":
				var deathsPerMinuteLost = calculateDeathsPerPeriod("Minute","Total") * lostRate;
				return deathsPerMinuteLost;
			case "Hour":
				var deathsPerHourLost = calculateDeathsPerPeriod("Hour","Total") * lostRate;
				return deathsPerHourLost;
			case "Day":
				var deathsPerDayLost = calculateDeathsPerPeriod("Day","Total") * lostRate;
				return deathsPerDayLost;
			case "Week":
				var deathsPerWeekLost = calculateDeathsPerPeriod("Week","Total") * lostRate;
				return deathsPerWeekLost;
			case "Year":
				var deathsPerYearLost = calculateDeathsPerPeriod("Year","Total") * lostRate;
				return deathsPerYearLost;
			default:
				//return error message if receive non-expected input
				return "Error 2";
		}
	}
	else {
		//return error message if receive non-expected input
		return "Error 3";
	}
}

function calculateCounterRate() {
/*Return the value needed to make the by  mortality rate count-up counter run at the correct rate based on user inputs*/

	//Calculate variable to be used by setTimeout within the display() function
	var forTimeOut = 100 / calculateDeathsPerPeriod("Second","Lost");  //not sure why deaths of lost per second is divided into 100, but it works
	return forTimeOut;
}

function initiateDisplay() {
/*Initiate and display everything when start is invoked by the user*/

	//obtain the number of deaths for the specified period
	var deathsPerPeriod = calculateDeathsPerPeriod("Day","Total");

	//Obtain Location form element
	var location = document.getElementById("location").value;

	/*reformat the output numbers*/
	
	//set numeral-js default format to rounded number with comma (e.g., 1,000)
	numeral.defaultFormat('0,0');	
	
	//format the deaths per period using the default format
	deathsPerPeriod = numeral(deathsPerPeriod).format();
	
	//Insert the calculated deaths per day into page via jQuery library
	$('#deathsPerPeriod').html(deathsPerPeriod);
	
	//Insert the location into page via jQuery library
	$('.location-holder').html(location);
	
	//start the time elapsed timer
	startTime()
	
	//start the mortality counter
	display()
}

function startTime() {
/*Configure and display the time elapsed timer (i.e, jquery.countdown)*/

		$(function () {
		//set variable used by jquery.countdown to the current time
		var austDay = new Date();

		//configure jquery.countdown to start counting up (i.e., since) from the variable defined above
		//make the display format pretty
		$('#defaultCountdown').countdown({since: austDay, format: 'yodhmS', layout: '{d<}{dn} {dl}, {d>}{h<}{hn} {hl}, {h>}{m<}{mn} {ml}, {m>}{sn} {sl}'});
		});
}	
	
/*Display the mortality rate count-up counter, inserting commas as necessary*/
/*By George Chiang. (JK's ultimate JavaScript tutorial and free JavaScripts site!)
http://www.javascriptkit.com
Credit MUST stay intact for use*/
	var milisec=0
	var seconds=0
	document.d.d2.value='0'

	function display(){
		if (milisec>=9){
			milisec=0
			seconds+=1
		}
		else
			milisec+=1

		Number.prototype.insertComma = function(){
			var s = this.toString();
			var temp = '';
			for (var i=s.length-1;i>=0;i-=3){
				if ((i-3)>=0) temp = "," + s.substr(i-2, 3) + temp;
				else temp = s.substring(0, i+1) + temp;
			}
			return temp;
		}

		document.d.d2.value = seconds.insertComma() 

		var forTimeOut = calculateCounterRate()
		setTimeout("display()",forTimeOut) 
	}