/*Initialize Magnific Popup when a link with class "open-configure-popup-link" is clicked*/
    $('.open-configure-popup-link').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

function calculateLostRate() {
/*Return the calculated lost rate based on the user provided reached-rate*/
    "use strict";
    //Obtain reached-rate form element
    var reachedRate = document.getElementById("reached-rate").value,

        //Calculate lost rate
        lostRate = (100 - reachedRate) / 100;

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
    "use strict";

    //Constant time values
    var SECONDS_PER_MINUTE = 60,
        MINUTES_PER_HOUR = 60,
        HOURS_PER_DAY = 24,
        DAYS_PER_WEEK = 7,
        DAYS_A_YEAR = 365,

        //Calculate seconds per period
        secondsHour = SECONDS_PER_MINUTE * MINUTES_PER_HOUR,
        secondsDay = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY,
        secondsWeek = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_PER_WEEK,
        secondsYear = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_A_YEAR;

    switch (period) {
    case "Minute":
        return SECONDS_PER_MINUTE;
    case "Hour":
        return secondsHour;
    case "Day":
        return secondsDay;
    case "Week":
        return secondsWeek;
    case "Year":
        return secondsYear;
    default:
        //return error message if receive non-expected input
        return "Please provide a string of Minute, Hour, Day, Week, or Year as the period";
    }
}

function calculateDeathsPerPeriod(period, type) {
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

    "use strict";

    //Obtain Population form element
    var population = document.getElementById("population").value,

        //Obtain Death Rate form element
        deathRate = document.getElementById("death-rate").value,

        //Obtain Lost Rate
        lostRate = calculateLostRate(),

        //Convert crude death rate to percentage
        deathRatePercentage = deathRate / 1000,

        //Calculate deaths a year
        deathsYear = deathRatePercentage * population,

        //Calculate deaths per second
        deathsPerSecond = deathsYear / secondsPerPeriod("Year");

    if (type === "Total") {
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

    if (type === "Lost") {
        switch (period) {
        case "Second":
            var deathsPerSecondLost = calculateDeathsPerPeriod("Second", "Total") * lostRate;
            return deathsPerSecondLost;
        case "Minute":
            var deathsPerMinuteLost = calculateDeathsPerPeriod("Minute", "Total") * lostRate;
            return deathsPerMinuteLost;
        case "Hour":
            var deathsPerHourLost = calculateDeathsPerPeriod("Hour", "Total") * lostRate;
            return deathsPerHourLost;
        case "Day":
            var deathsPerDayLost = calculateDeathsPerPeriod("Day", "Total") * lostRate;
            return deathsPerDayLost;
        case "Week":
            var deathsPerWeekLost = calculateDeathsPerPeriod("Week", "Total") * lostRate;
            return deathsPerWeekLost;
        case "Year":
            var deathsPerYearLost = calculateDeathsPerPeriod("Year", "Total") * lostRate;
            return deathsPerYearLost;
        default:
            //return error message if receive non-expected input
            return "Error 2";
        }
    }
}

function calculateCounterRate() {
/*Return the value needed to make the by  mortality rate count-up counter run at the correct rate based on user inputs*/

    "use strict";

    //Calculate variable to be used by setTimeout within the display() function
    var forTimeOut = 100 / calculateDeathsPerPeriod("Second", "Lost");  //not sure why deaths of lost per second is divided into 100, but it works
    return forTimeOut;
}

function startTime() {
/*Configure and display the time elapsed timer (i.e, jquery.countdown)*/

    "use strict";

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
var milisec = 0;
var seconds = 0;
document.counterContainer.counter.value = '0';

function display() {
    "use strict";

    var forTimeOut = calculateCounterRate();

    if (milisec >= 9) {
        milisec = 0;
        seconds += 1;
    } else {
        milisec += 1;
    }

    Number.prototype.insertComma = function () {
        var s = this.toString(),
            temp = '';
        for (var i=s.length-1;i>=0;i-=3) {
            if ((i-3)>=0) temp = "," + s.substr(i-2, 3) + temp;
            else temp = s.substring(0, i+1) + temp;
        }
        return temp;
    };

    document.counterContainer.counter.value = seconds.insertComma();

    setTimeout("display()", forTimeOut);
}

function insertDefaults() {
    //Insert values into configuration form based on world statistics
    $("#population").val("7098495231");
    $("#death-rate").val("7.9");
    $("#reached-rate").val("7.9");
    $("#location").val("the world");
    
    /*
    References:
    - Population: estimated world population at midyear 2013 as reported at http://www.census.gov/population/international/data/idb/region.php?N=%20Results%20&T=6&A=aggregate&RT=0&Y=2013&R=1&C=
    - Crude Death Rate: Based on estimated death rate (per 1,000 population) for the world as reported at https://www.cia.gov/library/publications/the-world-factbook/geos/xx.html
    - Reached Rate: Based on population percentage of Evangelicals at http://www.operationworld.org/wrld
    */

}

function initiateDisplay() {
/*Initiate and display everything when start is invoked by the user*/

    "use strict";

    //obtain the number of deaths for the specified period
    var deathsPerPeriod = calculateDeathsPerPeriod("Day", "Total"),

    //Obtain Location form element
        location = document.getElementById("location").value;

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
    startTime();

    //start the mortality counter
    display();

    //close the configuration pop-up
    $.magnificPopup.close();
    
    //hide the configuration link text
    $("p.configure").hide();
}