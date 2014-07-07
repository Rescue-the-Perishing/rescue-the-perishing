# Rescue the Perishing

The Rescue the Perishing application is designed to increase awareness of how many people die and enter eternity over time. One potential use is to display the application in the background during a sermon to help emphasize the importance of personal evangelism.

This application is able to calculate the number of people estimated to have died over a specified time-frame for a given location. The calculation is performed using either pre-defined defaults or user provided data for the population, crude death rate, and reached rate. The reported number of deaths can be configured to show estimated deaths for only the lost portion of the population or for everyone (i.e., reached and lost). The application also has a real-time mortality counter which shows the number of *lost* individuals estimated to have died in the time elapsed since the application was started.

Defaults, based on world-wide statistics from reliable sources, are provided as a starting point. These defaults can be changed to tailor the program to a specific population segment and/or theological position. Additionally, results can be displayed in multiple languages (currently English, Spanish and Portuguese). Please see below for further information on how to configure and customize the application to meet your needs.

#Table of Contents
- [Demo](#demo)
- [Usage](#usage)
    - [Installing](#installing)
    - [Configuring](#configuring)
- [Customizing](#customizing)
    - [Customizing Defaults](#customizing-defaults)
    - [Customizing Translations](#customizing-translations)
- [Additional Resources](#additional-resources)
    - [Recommended Data Sources](#recommended-data-sources)
    - [About the Provided Defaults](#about-the-provided-defaults)
- [Acknowledgments](#acknowledgments)
    - [Usage](#usage)
- [Licenses](#licenses)
    - [License](#license)
    - [Licenses for other Components](#licenses-for-other-components)

## <a name="demo"></a>Demo

You can test the Rescue the Perishing application at our [demo site](https://rescue-the-perishing.github.io/rescue-the-perishing/).

## <a name="usage"></a>Usage

### <a name="installing"></a>Installing

The Rescue the Perishing application was built with HTML5 and JavaScript to help ensure it works across a variety of platforms. Additionally, the application was specifically programmed to ensure it can run offline because we know Internet connections may not be readily available in places where this might be used.

>_**Tip:** If you have Internet access and do not need to customize the defaults or wording, you may run the application from our [demo site](https://rescue-the-perishing.github.io/rescue-the-perishing/)._

**Local Installation**

*Use this method if you need to use this without an Internet connection and/or would like to make customizations.*

1. Go to our [Latest Release](https://github.com/Rescue-the-Perishing/rescue-the-perishing/releases/latest) page.
2. Click the *Source code (zip)* button to download the application.
3. Save the downloaded file to the desired location on your system.
4. Extract All/Unzip the downloaded file.
5. Access the extracted files and navigate to the `src` directory.
6. Double-click on the on the `rescue-the perishing.html` file to open the program in your default web browser.
7. (Optional) Refer to the [Configuring](#configuring) and [Customizing](#customizing) sections below to learn more about how to use the application.

>_**Tip:** When running locally in Internet Explorer it may be necessary to click the "Allow Blocked Content" button._

**Host It Yourself**

*Use this method if you want to host Rescue the Perishing on your own website and/or would like to make customizations.*

1. Go to our [Latest Release](https://github.com/Rescue-the-Perishing/rescue-the-perishing/releases/latest) page.
2. Click the *Source code (zip)* button to download the application.
3. Save the downloaded file to the desired location on your system.
4. Extract All/Unzip the downloaded file.
5. Access the extracted files and navigate to the `src` directory.
6. Using your preferred method of uploading files to your web server (e.g., FTP, SSH), upload everything within the `src` directory to the area appropriate for your website.
7. Visit the URL corresponding to the location of where the `rescue-the perishing.html` file resides.
8. (Optional) Refer to the [Configuring](#configuring) and [Customizing](#customizing) sections below to learn more about how to use the application.

### <a name="configuring"></a>Configuring

In addition to providing the data used to calculate the death rate for a given population segment, several additional settings can be configured within the application to further customize the program output to meet your needs. Each of the main options, links, and buttons within application are described below to help you understand how to best configure Rescue the Perishing.

- **Configure** - Click Configure to open the configuration menu. This menu allows you to change the program settings and/or preview the pre-configured default values.

- **Basic Options**

	- **Population** - Provide the population for your chosen demographic. The value must be a whole number 12 characters or less in length (the maximum supported value is 999,999,999,999). Decimals and commas are not permitted.

	- **Crude Death Rate** - Input the crude death rate (number of deaths per 1,000 per year) for your chosen demographic. If you need help determining what to enter for this value, refer to the [additional resources](#additional-resources) section. The value must be a number greater than 0.

	- **Reached Rate** - Input the estimated percentage of Christians for your chosen demographic. The value must be a number between 0 and 100 (inclusive) and not include a percentage sign.

	- **Location** - Input the name of the location or region the other values are based upon. Remember to use a location name which corresponds to the selected language. Also, some locations may need to be prefixed with additional text to make the output wording grammatically correct. For example, if "world" is used as the location, the relevant portion of the application's English output would be "people in world... ". To make the output grammatically correct, the value should be entered as "the world".

	>_**Tip:** Refer to the [Recommended Data Sources](#recommended-data-sources) section for ideas on where to find appropriate values to use for the Population, Crude Death Rate, and Reached Rate fields._

- **Additional Options** - Clicking on this will reveal additional configuration options which will help you further refine how the program results will be displayed.

	- **Language** - Use this drop-down to choose which of the available translations is used for the output text.

	- **Summarize Output By** - Use this drop-down to configure whether the reported number of deaths shown is for a second, minute, hour, day, week, or year. Changing this value to a longer time-frame is especially helpful when working with smaller population segments.

	- **Report Summary Total For** - Use this option to change whether the reported number of deaths show estimated deaths for *Everyone* (i.e., reached and lost) or for only the *Lost* portion of the population as determined by the provided Reached Rate.

- **Preview Defaults** - Click this button to insert the default values into the configuration form.

- **OK** - Click this button to accept your settings and update the output accordingly.

- **Start** - Click Start to execute the program. If custom configuration options are not set before starting, pre-configured default values will be used.

>_**Tip:** To stop or re-configure the program after the counters have been started, refresh your web browser (in most browsers, F5 key is the shortcut for refreshing the page). Please note the program will return to the pre-configured defaults each time the web page is refreshed. However, the defaults may be changed as explained in the [customizing](#customizing) section._

## <a name="customizing"></a>Customizing

### <a name="customizing-defaults"></a>Customizing Defaults

The default values are stored within the `defaults.js` file located within the `config` directory.

>_**Tip:** It is recommended making a copy of the `config` directory in case you need to recover the original settings. The copied directory could be named `config-backup` and stored in the location of your choosing._

The steps to customize the defaults are:

1. Browse to the `config` directory (it is in the same directory as the `rescue-the-perishing.html` file).
2. Open the `defaults.js` file with a text editor program of your choice.
3. Change the existing values to the new values you would like to use, ensuring the syntax rules and allowed value specifications defined within the file are strictly followed.
4. Save your changes to the `defaults.js` file.

>_**Tip:** The application must be refreshed before the changes to take effect._

A copy of the relevant portion of the provided `default.js` file is shown below as well as an example of the relevant components of a `default.js` file customized to report on the Americas demographic (excluding the United States).

**Provided Defaults**

```JavaScript
var defaults =
{
    "population" : "7098495231",
    "deathRate" : "7.89",
    "reachedRate" : "7.9",
    "location" : "the world",
    "language" : "English",
    "summarize_output" : "Day",
    "report_summary_total" : "Everyone"
};
```

**Custom Defaults Example**

```JavaScript
var defaults =
{
    "population" : "595774283",
    "deathRate" : "6.34",
    "reachedRate" : "7",
    "location" : "the Americas, not including the USA,",
    "language" : "English",
    "summarize_output" : "Day",
    "report_summary_total" : "Everyone"
};
```

>_**Tip:** Some locations may need to be prefixed with additional text to make the output read correctly. For example, if "world" is used as the location, the relevant portion of the application's English output would be "people in world... ". To make the output grammatically correct, the location should be entered as "the world"._

### <a name="customizing-translations"></a>Customizing Translations

The default values are stored within the `languages.js` file located within the `config` directory.

>_**Tip:** It is recommended making a copy of the `config` directory in case you need to recover the original settings. The copied directory could be named `languages-backup` and stored in the location of your choosing._

The steps to customize the defaults are:

1. Browse to the `config` directory (it is in the same directory as the `rescue-the-perishing.html` file).
2. Open the `languages.js` file with a text editor program of your choice.
3. Change the existing values to the new values you would like to use, ensuring the syntax rules and allowed value specifications defined within the file are strictly followed.
4. Save your changes to the `languages.js` file.

>_**Tip:** The application must be refreshed before the changes will take effect._

A copy of the relevant contents of the provided `languages.js` file is shown below as well as an example of the relevant components of a`languages.js` file customized to use slightly different wording.

**Provided English Translation**

```JavaScript
var english =
{
    rtp_Approximately : "Around",
    rtp_People : "people in",
    rtp_Lost : "<em>lost</em> people in",
    rtp_Eternity : "die every",
    rtp_Began : "Since",
    rtp_Ago : "ago, the following number of those people have entered eternity <em>without Christ</em>:",
    rtp_Download : "Download",
    rtp_Second : "Second",
    rtp_Seconds : "Seconds",
    rtp_Minute : "Minute",
    rtp_Hour : "Hour",
    rtp_Day : "Day",
    rtp_Week : "Week",
    rtp_Year : "Year"
},
```

**Custom English Translation Example**

```JavaScript
var english =
{
    rtp_Approximately : "Around",
    rtp_People : "people in",
    rtp_Lost : "<em>lost</em> people in",
    rtp_Eternity : "die every",
    rtp_Began : "Since our meeting began",
    rtp_Ago : "ago, the following number of those people have entered eternity <em>without Christ</em>:",
    rtp_Download : "Download",
    rtp_Second : "Second",
    rtp_Seconds : "Seconds",
    rtp_Minute : "Minute",
    rtp_Hour : "Hour",
    rtp_Day : "Day",
    rtp_Week : "Week",
    rtp_Year : "Year"
},
```

>_**Tip:** HTML tags for **strong** (`<strong>` and `</strong>`) and *emphasis* (`<em>` and `<em>`) can be used to enhance the output format of words and phrases._

>_**Tip:** In some languages, a preposition should not be added to the end of the `rtp_People` and `rtp_Lost` phrases because the preposition needed may change based on the user's provided location. in Italian, for example, the correct preposition would be "nel" (literally "in the") if the provided location was the Italian equivalent of world. However, if the provided location was the Italian equivalent of Italy, the correct preposition would be "in" (literally "in"). Leaving off the preposition in the translation file helps overcome this issue because the location can be prefixed with the correct preposition in the defaults file and/or by the user at runtime._

## <a name="additional-resources"></a>Additional Resources

### <a name="recommended-data-sources"></a>Recommended Data Sources

To help you tailor the program to specific population segments, we recommend the following as sources of reliable statistics:

- **Population**: [Operation World](http://www.operationworld.org/)

- **Crude Death Rate**: [The World Factbook](https://www.cia.gov/library/publications/the-world-factbook/index.html)

- **Reached Rate**: [Operation World](http://www.operationworld.org/)

*Many government and other related entities publish population and other demographic information. While such websites can be good sources of data, we recommended Operation World for Population and Reached Rate values because their website makes it easy to find this information for most countries and regions of the world.*

>_**Tip:** If you would like to learn more about what is meant by crude death rate, review the [Mortality Rate](https://en.wikipedia.org/wiki/Mortality_rate) article on Wikipedia._

### <a name="about-the-provided-defaults"></a>About the Provided Defaults

- **Population** - The default `population` value is `7098495231`. It is derived from the estimated world population at midyear 2013 as reported by the [United States Census Bureau](http://www.census.gov/population/international/data/idb/region.php?N=%20Results%20&T=6&A=aggregate&RT=0&Y=2013&R=1&C=)

- **Crude Death Rate** - The default `deathRate` is `7.89`. It is based on the 2014 estimated death rate (per 1,000 population) for the world as reported in [The World Factbook](https://www.cia.gov/library/publications/the-world-factbook/geos/xx.html)

- **Reached Rate** - The default `reachedRate` value is `7.9`. It is based on population percentage of Evangelicals in the world as reported by [Operation World](http://www.operationworld.org/wrld) Operation World's [glossary](http://www.operationworld.org/glossary) explains how they define Evangelicals.

- **Location** - The default `location` is set to `the world`.

- **Language** - The default output `language` is set to `English`.

- **Summarize Output By** - The default `summarize_output` is set to `Day`.

- **Report Summary Total For** - The default `report_summary_total` is set to `Everyone`.

*Values used are based on data last retrieved on June 28, 2014.*

## <a name="acknowledgments"></a>Acknowledgments

- [correctingInterval](https://github.com/aduth/correctingInterval)
- [Countdown for jQuery](http://www.keith-wood.name/countdown.html)
- [jQuery](https://jquery.org)
- [formalize](http://formalize.me/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)
- [Normalize.css](http://git.io/normalize)
- [Numeral.js](http://numeraljs.com/)
- [Simple JavaScript Inheritance](http://ejohn.org/blog/simple-javascript-inheritance/)

## <a name="licenses"></a>Licenses
### <a name="license"></a>License

Unless otherwise specified in the [Licenses for other Components](#licenses-for-other-components) section, all code is released under the MIT License (MIT). See [LICENSE.md](LICENSE.md) for details.

All other works are licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

### <a name="licenses-for-other-components"></a>Licenses for other Components

- correctingInterval: [MIT](https://github.com/aduth/correctingInterval/blob/master/LICENSE.txt)
- Countdown for jQuery: [MIT](https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt)
- jQuery: [MIT](https://jquery.org/license/)
- formalize: [GNU GENERAL PUBLIC LICENSE](http://www.gnu.org/licenses/gpl.html) and [MIT](http://opensource.org/licenses/mit-license.php)
- HTML5 Boilerplate: [MIT](https://github.com/h5bp/html5-boilerplate/blob/master/LICENSE.md)
- Magnific Popup: [MIT](https://github.com/dimsemenov/Magnific-Popup/blob/master/LICENSE)
- Normalize.css: [MIT](https://github.com/necolas/normalize.css/blob/v1/LICENSE.md)
- Numeral.js: [MIT](https://github.com/adamwdraper/Numeral-js/blob/master/LICENSE)
- Simple JavaScript Inheritance: [MIT](http://ejohn.org/blog/simple-javascript-inheritance/)