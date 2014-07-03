//Please read the help information at the end of this file before editing
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

/*!
 * Help
 *
 * Each of the values to be changed are within double quotes (`"`) following a colon (`: `).
 * Double quotes (`"`) are *not* permitted within the provided values.
 * Nothing else within this file should be changed.
 * If this syntax is not adhered to, the program will not work as expected.
 *
 * The expectations for each of the default values are as follows:
 *
 * - population: The value must be 12 characters or less in length
 * (the maximum supported value is 999,999,999,999). Decimals and commas are not permitted.
 *
 * - deathRate: The value must be a number greater than 0, a decimal value is permitted.
 *
 * - reachedRate: The value must be between 0 and 100 (inclusive) and not include a percentage sign.
 *
 * - location: Any alpha-numeric value up to 48 characters in length is permitted.
 * Some locations may need to be prefixed with text to make the output wording grammatically correct.
 *
 * - language: Supported languages are "English", "Spanish", and "Portuguese". Remember to use a location name which corresponds to the default language.
 *
 * - summarize_output: The only values supported are "Second", Minute", "Hour", "Day", "Week", and "Year"
 *
 * - report_summary_total: The only values supported are "Everyone" and "Lost"
 */