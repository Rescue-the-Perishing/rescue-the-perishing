//Please read the help information at the end of this file before editing
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

    spanish =
        {
            rtp_Approximately : "Acerca de",
            rtp_People : "personas en",
            rtp_Lost : "personas <em>perdidas</em> en",
            rtp_Eternity : "mueren cada",
            rtp_Began : "Desde",
            rtp_Ago : "atrás, el siguiente número de esas personas han entrado a la eternidad <em>sin Cristo</em>:",
            rtp_Download : "Descargar",
            rtp_Second : "Segundo",
            rtp_Seconds : "Segundos",
            rtp_Minute : "Minuto",
            rtp_Hour : "Hora",
            rtp_Day : "Día",
            rtp_Week : "Semana",
            rtp_Year : "Año"
        },

    portuguese =
        {
            rtp_Approximately : "Cerca de",
            rtp_People : "pessoas em",
            rtp_Lost : "pessoas <em>perdidas</em> em",
            rtp_Eternity : "morrem a cada",
            rtp_Began : "Nos últimos",
            rtp_Ago : "o seguinte número dessas pessoas passaram a vida eterna <em>sem Jesus Cristo</em>:",
            rtp_Download : "Baixar",
            rtp_Second : "Segundo",
            rtp_Seconds : "Segundos",
            rtp_Minute : "Minuto",
            rtp_Hour : "Hora",
            rtp_Day : "Dia",
            rtp_Week : "Semana",
            rtp_Year : "Ano"
        };

/*!
 * Help
 *
 * Each of the values to be changed are within double quotes (`"`) following a colon (`: `).
 * Double quotes (`"`) are *not* permitted within the provided values.
 * Nothing else within this file should be changed.
 * If this syntax is not adhered to, the program will not work as expected.
 * Each of the phrases accept alpha-numeric values.
 *
 * In some languages, a preposition should not be added to the end of the `rtp_People` and `rtp_Lost`
 * phrases because the preposition needed may change based on the user's provided location.
 * For example, in Italian the correct preposition would need to be "nel" (literally "in the") if the provided
 * location was the Italian equivalent of world or "in" (literally "in") if the provided location was the
 * Italian equivalent of Italy. Leaving off the preposition in the translation file helps overcome this issue
 * because the location can be prefixed with the correct preposition in the defaults file and/or by the user
 * at runtime.
 */