/*Initialize Magnific Popup when a link with class "open-configure-popup-link" is clicked*/
    $('.open-configure-popup-link').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    
/*Initialize Magnific Popup when a link with class "open-help-popup-link" is clicked*/
    $('.open-help-popup-link').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

//Show/hide advanced configuration options when clicked via jQuery library
    $( ".show-advanced-options" ).click(function() {
        $( "#advanced-options" ).toggle( "fast", function() {
        });
    });

function calculateLostRate() {
/*Return the calculated lost rate based on the user provided reached-rate*/
    "use strict";
    //Obtain reached-rate form element
    var reachedRate = document.getElementById("reached-rate").value,
        lostRate = "";

    if (reachedRate === "") {
        reachedRate = defaults.reachedRate;
    }

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
"Everyone"
"Lost"
*/

    "use strict";

    //Obtain Population form element
    var population = document.getElementById("population").value,

        //Obtain Death Rate form element
        deathRate = document.getElementById("death-rate").value,

        lostRate = calculateLostRate(),
        deathRatePercentage = "",
        deathsYear = "",
        deathsPerSecond = "";

    if (population === "" && deathRate === "") {
        population = defaults.population;
        deathRate = defaults.deathRate;
    }

    //Convert crude death rate to percentage
    deathRatePercentage = deathRate / 1000;

    //Calculate deaths a year
    deathsYear = deathRatePercentage * population,

    //Calculate deaths per second
    deathsPerSecond = deathsYear / secondsPerPeriod("Year");

    if (type === "Everyone") {
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
            var deathsPerSecondLost = calculateDeathsPerPeriod("Second", "Everyone") * lostRate;
            return deathsPerSecondLost;
        case "Minute":
            var deathsPerMinuteLost = calculateDeathsPerPeriod("Minute", "Everyone") * lostRate;
            return deathsPerMinuteLost;
        case "Hour":
            var deathsPerHourLost = calculateDeathsPerPeriod("Hour", "Everyone") * lostRate;
            return deathsPerHourLost;
        case "Day":
            var deathsPerDayLost = calculateDeathsPerPeriod("Day", "Everyone") * lostRate;
            return deathsPerDayLost;
        case "Week":
            var deathsPerWeekLost = calculateDeathsPerPeriod("Week", "Everyone") * lostRate;
            return deathsPerWeekLost;
        case "Year":
            var deathsPerYearLost = calculateDeathsPerPeriod("Year", "Everyone") * lostRate;
            return deathsPerYearLost;
        default:
            //return error message if receive non-expected input
            return "Error 2";
        }
    }
}

function startTime(languageCode) {
/*Configure and display the time elapsed timer (i.e, jquery.countdown)*/

    "use strict";

    $(function () {

        //set variable used by jquery.countdown to the current time
        var austDay = new Date();

        //configure jquery.countdown to start counting up (i.e., since) from the variable defined above
        //make the display format pretty
        $('#defaultCountdown').countdown($.extend({since: austDay, format: 'yodhmS', layout: '{d<}{dn} {dl}, {d>}{h<}{hn} {hl}, {h>}{m<}{mn} {ml}, {m>}{sn} {sl}'},$.countdown.regionalOptions[languageCode]));

    });
}

function realTimeMortalityCounter() {
/*Execute the real-time mortality counter every second (1000 milliseconds) */

    "use strict";

    var deathsPerSecond = calculateDeathsPerPeriod("Second", "Lost"),
        counterTimeOutID = setCorrectingInterval(incrementCounter, 1000),
        i = 0;

    //Using custom setInterval because setInterval and setTimeout are not reliable enough.
    setCorrectingInterval(counterTimeOutID);

    //Nested the incrementCounter function inside to avoid needing global variables for for the real-time mortality counter
    function incrementCounter() {
    /*Increment the real-time mortality counter by deaths per second*/

        var prettyFormat = "",
            rtpCurrentCount = 0;

        ++i;

        //Each time tickCounter() runs, update the counter to show the number of deaths that have occurred.
        //because this runs every second, the death count equals deaths per second times the number of times this code has run (once a second)
        rtpCurrentCount = deathsPerSecond * i;

        //use the numeral-js default format to round the counter and insert thousands separator.
        prettyFormat = numeral(rtpCurrentCount).format();

        //Update the display of the counter via jQuery
        $("#counter").val(prettyFormat);
    }
}

function insertDefaults() {
    //Insert values into configuration form based on world statistics
    $("#population").val(defaults.population);
    $("#death-rate").val(defaults.deathRate);
    $("#reached-rate").val(defaults.reachedRate);
    $("#location").val(defaults.location);
}

function obtainLanguageCode(language) {
/*Return the language code based on user selected language*/

    "use strict";

    var languageCode = "";

    //language codes used must match one of the provided translation files within src/js/vendor/countdown and src/js/vendor/numeral-js/languages
    switch (language) {
    case "Spanish":
        languageCode = "es";
        break;
    case "Italian":
        languageCode = "it";
        break;
    case "Portuguese":
        languageCode = "pt-br";
        break;
    default:
        //default to blank if none of the above match (a blank language code will use English)
        languageCode = "";
    }

    return languageCode;
}

function setWording(language) {
/*Update the wording based on the provided language, defaults to English if the language provided is not supported*/

    "use strict";

    //Obtain output-type form element
    var period = document.getElementById("output-type").value,

    //Obtain summary type (everyone or lost)
        type = $('input[name="summary-type"]:checked').val(),

    //obtain the number of deaths for the specified period and summary type
        deathsPerPeriod = calculateDeathsPerPeriod(period, type),

    //Obtain Location form element
        location = document.getElementById("location").value,

    //Initiate a variable object to hold translations
        phrases =
            {
                rtpApproximately : "",
                rtpPeople : "",
                rtpLost : "",
                rtpEternity : "",
                rtpIn : "",
                rtpBegan : "",
                rtpAgo : "",
                rtpDownload : "",
                rtpSecond : "",
                rtpSeconds : "",
                rtpMinute : "",
                rtpHour : "",
                rtpDay : "",
                rtpWeek : "",
                rtpYear : "",
                rtpDefaultCountdown : ""
            };

    //Update phrases variable to match the selected translation
    switch (language) {
    case "Spanish":
        phrases.rtpApproximately = spanish.rtp_Approximately;
        phrases.rtpPeople = spanish.rtp_People;
        phrases.rtpLost = spanish.rtp_Lost;
        phrases.rtpEternity = spanish.rtp_Eternity;
        phrases.rtpIn = spanish.rtp_In;
        phrases.rtpBegan = spanish.rtp_Began;
        phrases.rtpAgo = spanish.rtp_Ago;
        phrases.rtpDownload = spanish.rtp_Download;
        phrases.rtpSecond = spanish.rtp_Second;
        phrases.rtpSeconds = spanish.rtp_Seconds;
        phrases.rtpMinute = spanish.rtp_Minute;
        phrases.rtpHour = spanish.rtp_Hour;
        phrases.rtpDay = spanish.rtp_Day;
        phrases.rtpWeek = spanish.rtp_Week;
        phrases.rtpYear = spanish.rtp_Year;
        break;
    case "Italian":
        phrases.rtpApproximately = italian.rtp_Approximately;
        phrases.rtpPeople = italian.rtp_People;
        phrases.rtpLost = italian.rtp_Lost;
        phrases.rtpEternity = italian.rtp_Eternity;
        phrases.rtpIn = italian.rtp_In;
        phrases.rtpBegan = italian.rtp_Began;
        phrases.rtpAgo = italian.rtp_Ago;
        phrases.rtpDownload = italian.rtp_Download;
        phrases.rtpSecond = italian.rtp_Second;
        phrases.rtpSeconds = italian.rtp_Seconds;
        phrases.rtpMinute = italian.rtp_Minute;
        phrases.rtpHour = italian.rtp_Hour;
        phrases.rtpDay = italian.rtp_Day;
        phrases.rtpWeek = italian.rtp_Week;
        phrases.rtpYear = italian.rtp_Year;
        break;
    case "Portuguese":
        phrases.rtpApproximately = portuguese.rtp_Approximately;
        phrases.rtpPeople = portuguese.rtp_People;
        phrases.rtpLost = portuguese.rtp_Lost;
        phrases.rtpEternity = portuguese.rtp_Eternity;
        phrases.rtpIn = portuguese.rtp_In;
        phrases.rtpBegan = portuguese.rtp_Began;
        phrases.rtpAgo = portuguese.rtp_Ago;
        phrases.rtpDownload = portuguese.rtp_Download;
        phrases.rtpSecond = portuguese.rtp_Second;
        phrases.rtpSeconds = portuguese.rtp_Seconds;
        phrases.rtpMinute = portuguese.rtp_Minute;
        phrases.rtpHour = portuguese.rtp_Hour;
        phrases.rtpDay = portuguese.rtp_Day;
        phrases.rtpWeek = portuguese.rtp_Week;
        phrases.rtpYear = portuguese.rtp_Year;
        break;
    default:
        phrases.rtpApproximately = english.rtp_Approximately;
        phrases.rtpPeople = english.rtp_People;
        phrases.rtpLost = english.rtp_Lost;
        phrases.rtpEternity = english.rtp_Eternity;
        phrases.rtpIn = english.rtp_In;
        phrases.rtpBegan = english.rtp_Began;
        phrases.rtpAgo = english.rtp_Ago;
        phrases.rtpDownload = english.rtp_Download;
        phrases.rtpSecond = english.rtp_Second;
        phrases.rtpSeconds = english.rtp_Seconds;
        phrases.rtpMinute = english.rtp_Minute;
        phrases.rtpHour = english.rtp_Hour;
        phrases.rtpDay = english.rtp_Day;
        phrases.rtpWeek = english.rtp_Week;
        phrases.rtpYear = english.rtp_Year;
    }

    //Change people to lost phrase if lost is selected
    if (type === "Lost") {
        phrases.rtpPeople = phrases.rtpLost;
   }

    //If location is blank, use the default
    if (location === "") {
        location = defaults.location;
   }

    //change 0 seconds place-holder wording based on language code
    phrases.rtpDefaultCountdown = "0 " + phrases.rtpSeconds;

    //set language for numeral-js based on provided language code
    numeral.language(obtainLanguageCode(language));

    //Set period text based on user's selection (Second, Minute, Hour, Day, Week, or Year) and corresponding translation
    switch (period) {
    case "Second":
        period = phrases.rtpSecond;
        break;
    case "Minute":
        period = phrases.rtpMinute;
        break;
    case "Hour":
        period = phrases.rtpHour;
        break;
    case "Day":
        period = phrases.rtpDay;
        break;
    case "Week":
        period = phrases.rtpWeek;
        break;
    case "Year":
        period = phrases.rtpYear;
        break;
    default:
        //return error message if receive non-expected input
        alert('Please provide a string of Second, Minute, Hour, Day, Week, or Year as the period');
    }

    //format the deaths per period using the default format
    deathsPerPeriod = numeral(deathsPerPeriod).format();

    //Insert the corresponding text into page via jQuery library
    $('.rtp-approximately').html(phrases.rtpApproximately);
    $('.rtp-people').html(phrases.rtpPeople);
    $('.rtp-eternity').html(phrases.rtpEternity);
    $('.rtp-in').html(phrases.rtpIn);
    $('.rtp-began').html(phrases.rtpBegan);
    $('.rtp-ago').html(phrases.rtpAgo);
    $('#defaultCountdown').html(phrases.rtpDefaultCountdown);
    $('.rtp-download').html(phrases.rtpDownload);
    $('.summary-type-holder').html(phrases.rtpPeople);
    $('.period-holder').html(period.toLowerCase());
    $('#deathsPerPeriod').html(deathsPerPeriod);
    $('.location-holder').html(location + "."); //add a period to the location because it's the last phrase in the first sentence.

}

function ok() {
/*Update the wording and close the pop-up when ok button is clicked*/

    "use strict";

    //Obtain language form element
    var language = document.getElementById("language").value;

    //Update the wording based on selected settings
    setWording(language);

    //close the configuration pop-up
    $.magnificPopup.close();

}

function initiateDisplay() {
/*Start counter and timer when start is invoked by the user, using defaults if user does not configure values before starting*/

    "use strict";

    //Obtain necessary form elements
    var population = document.getElementById("population").value,
        deathRate = document.getElementById("death-rate").value,
        location = document.getElementById("location").value,
        reachedRate = document.getElementById("reached-rate").value,
        language = document.getElementById("language").value;

    //if form is blank, insert and accept default values before running
    if (population === "" && deathRate === "" && location === "" && reachedRate === "") {
        $("#population").val(defaults.population);
        $("#death-rate").val(defaults.deathRate);
        $("#reached-rate").val(defaults.reachedRate);
        $("#location").val(defaults.location);
        ok();
    }

    //start the time elapsed timer, passing in selected language
    startTime(obtainLanguageCode(language));

    //start the mortality counter
    realTimeMortalityCounter();

    //hide the configuration link text
    $("p.configure").hide();
}

$(document).ready(function () {
/*insert defaults when the page is loaded*/

    "use strict";

    //Obtain default for 'Summarize Output By'
    var period = defaults.summarize_output,

    //Obtain default for 'Report Summary Total For'
        type = defaults.report_summary_total,

    //Set deaths per period to value calculated based on defaults
        deathsPerPeriod = calculateDeathsPerPeriod(period, type);

    //format the deaths per period
    deathsPerPeriod = numeral(deathsPerPeriod).format();

    //change dropdown form selection to match the language set in the defaults file
    switch (defaults.language) {
    case "English":
        $("#language option[value='English']").attr("selected", "selected");
        break;
    case "Spanish":
        $("#language option[value='Spanish']").attr("selected", "selected");
        break;
    case "Portuguese":
        $("#language option[value='Portuguese']").attr("selected", "selected");
        break;
    default:
        alert("The default language is set to " + defaults.language + ", which is not currently supported option. Please set a supported language in the config/defaults.js file");
    }

    //change dropdown form selection to match the summarize_output set in the defaults file
    switch (defaults.summarize_output) {
    case "Day":
        $("#output-type option[value='Day']").attr("selected", "selected");
        break;
    case "Second":
        $("#output-type option[value='Second']").attr("selected", "selected");
        break;
    case "Minute":
        $("#output-type option[value='Minute']").attr("selected", "selected");
        break;
    case "Hour":
        $("#output-type option[value='Hour']").attr("selected", "selected");
        break;
    case "Week":
        $("#output-type option[value='Week']").attr("selected", "selected");
        break;
    case "Year":
        $("#output-type option[value='Year']").attr("selected", "selected");
        break;
    default:
        alert('The default "Summarize Output By" is set to "' + defaults.summarize_output + '". Please set a supported value in the config/defaults.js file');
    }

    //change radio button form to match the report_summary_total set in the defaults file
    switch (defaults.report_summary_total) {
    case "Everyone":
        $('input:radio[name="summary-type"]').filter('[value="Everyone"]').prop('checked', true);
        break;
    case "Lost":
        $('input:radio[name="summary-type"]').filter('[value="Lost"]').prop('checked', true);
        break;
    default:
        alert('The default "Report Summary Total For" is set to "' + defaults.report_summary_total + '". Please set a supported value in the config/defaults.js file');
    }

    //Insert items not set by the setWording function
    $('#deathsPerPeriod').html(deathsPerPeriod);
    $('.period-holder').html(period.toLowerCase());

    //Ensure the real-time mortality counter returns to 0 on page reload (without doing this IE retains old counter value)
    $('#counter').val("0");

    //make page wording show the selected translation
    setWording(defaults.language);

    //Insert the location, followed by a period.
    $('.location-holder').html(defaults.location + ".");
});