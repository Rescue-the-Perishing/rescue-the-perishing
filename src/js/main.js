function calculateMortalities() {
	//Constant time values
	var SECONDS_PER_MINUTE = 60;
	var MINUTES_PER_HOUR = 60;
	var HOURS_PER_DAY = 24;
	var DAYS_PER_WEEK = 7;
	var WEEKS_PER_YEAR = 52;
	var DAYS_A_YEAR = 365;
	
	//Calculate amount of seconds per each time period
	var secondsHour = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
	var secondsDay = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;
	var secondsWeek = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_PER_WEEK;
	var secondsYear = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_A_YEAR;
		
	//Obtain Population form element
	var population = document.getElementById("population").value;

	//Obtain Death Rate form element
	var deathRate = document.getElementById("death-rate").value;		

	//var reachedRate = document.getElementById("reached-rate").value/100;
	var reachedRate = document.getElementById("reached-rate").value;

	//Convert crude death rate to percentage
	var deathRatePercentage = deathRate / 1000;

	//Calculate deaths a year
	var deathsYear = deathRatePercentage * population;

	//Calculate lost rate
	var lostRate = (100 - reachedRate) / 100;
	
	//Calculate deaths per period of time
	var deathsPerSecond = deathsYear / secondsYear;
	var deathsPerMinute = deathsPerSecond * SECONDS_PER_MINUTE; //extra calculation in case someone wants to use it
	var deathsPerHour = deathsPerSecond * secondsHour; //extra calculation
	//use numeral() for number formatting
	var deathsPerDay = numeral(deathsPerSecond * secondsDay);
	var deathsPerWeek = deathsPerSecond * secondsWeek; //extra calculation
	var deathsPerYear = deathsPerSecond * secondsYear; //extra calculation
	
	//Calculate deaths of lost per period of time
	var deathsPerSecondLost = deathsPerSecond * lostRate;
	var deathsPerMinuteLost = deathsPerMinute * lostRate; //extra calculation
	var deathsPerHourLost = deathsPerHour * lostRate; //extra calculation
	var deathsPerDayLost = deathsPerDay * lostRate; //extra calculation
	var deathsPerWeekLost = deathsPerWeek * lostRate; //extra calculation
	var deathsPerYearLost = deathsPerYear * lostRate; //extra calculation
	
	//Calculate variable to use in setTimeout in the display() function
	var forTimeOut = 100 / deathsPerSecondLost || 69.359765000;  //not sure why deaths of lost per second is divided into 100, but it works

	//Insert the calculated deaths per day into page via jQuery library
	//$('#deathsPerDay').html(Math.round(deathsPerDay))
	
	//set numeral-js default format to rounded number with comma (e.g., 1,000)
	numeral.defaultFormat('0,0');
	//format deathsPerDay
	deathsPerDay = deathsPerDay.format();
	//Insert the calculated deaths per day into page via jQuery library
	$('#deathsPerDay').html(deathsPerDay)
	
	//Stub for checking calculations 
	//Using the jQuery library to insert variables into page
	//$('#results').html("Death Rate: " + deathRatePercentage + "<br /> Lost Rate: " + lostRate + "<br /> Reached Rate: " + reachedRate + "<br /> Deaths a year: " + deathsYear + "<br /> Second per Hour: " + secondsHour + "<br /> Second per Day: " + secondsDay + "<br /> Second per Week: " + secondsWeek + "<br /> Second per Year: " + secondsYear + "<br /> Deaths per Second: " + deathsPerSecond + "<br /> Deaths per Minute: " + deathsPerMinute + "<br /> Deaths per Hour: " + deathsPerHour + "<br /> Deaths per Day: " + deathsPerDay + "<br /> Deaths per Week: " + deathsPerWeek + "<br /> Deaths per Year: " + deathsPerYear + "<br /> Lost Deaths per Second: " + deathsPerSecondLost + "<br /> Lost Deaths per Minute: " + deathsPerMinuteLost + "<br /> Lost Deaths per Hour: " + deathsPerHourLost + "<br /> Lost Deaths per Day: " + deathsPerDayLost + "<br /> Lost Deaths per Week: " + deathsPerWeekLost + "<br /> Lost Deaths per Year: " + deathsPerYearLost + "<br /> Use in Code: " + forTimeOut);

	startTime()
	display()
	return forTimeOut;	
}
 
function startTime() {
	/*****************************************************************************************************		
	If current time isn't desired, change start austDay variable to desired date/time
	*****************************************************************************************************/			
		$(function () {
		var austDay = new Date();
	/****************************************************************************************************
	Define the whether to count up (since: time-variable) or countdown (until: time-variable)
	Define the format (layout) of the counter
	*****************************************************************************************************/
		$('#defaultCountdown').countdown({since: austDay, format: 'yodhmS', layout: '{d<}{dn} {dl}, {d>}{h<}{hn} {hl}, {h>}{m<}{mn} {ml}, {m>}{sn} {sl}'});
		});
}	
	
//main code for the mortality rate count-up counter
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
/*****************************************************************************************************
Define the death rate
//should use forTimeOut which is calculated based on provided inputs
*****************************************************************************************************/
		setTimeout("display()",69.359765000) 
	}