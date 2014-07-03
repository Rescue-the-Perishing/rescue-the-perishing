//Please read the help information at the end of this file before editing
var english =
        {
            rtpApproximately : "Around",
            rtpPeople : "people in",
            rtpLost : "<em>lost</em> people in",
            rtpEternity : "die every",
            rtpBegan : "Since",
            rtpAgo : "ago, the following number of those people have entered eternity <em>without Christ</em>:",
            rtpDownload : "Download",
            rtpSecond : "Second",
            rtpSeconds : "Seconds",
            rtpMinute : "Minute",
            rtpHour : "Hour",
            rtpDay : "Day",
            rtpWeek : "Week",
            rtpYear : "Year"
        },

    spanish =
        {
            rtpApproximately : "Acerca de",
            rtpPeople : "personas en",
            rtpLost : "personas <em>perdidas</em> en",
            rtpEternity : "mueren cada",
            rtpBegan : "Desde",
            rtpAgo : "atrás, el siguiente número de esas personas han entrado a la eternidad <em>sin Cristo</em>:",
            rtpDownload : "Descargar",
            rtpSecond : "Segundo",
            rtpSeconds : "Segundos",
            rtpMinute : "Minuto",
            rtpHour : "Hora",
            rtpDay : "Día",
            rtpWeek : "Semana",
            rtpYear : "Año"
        },

    portuguese =
        {
            rtpApproximately : "Cerca de",
            rtpPeople : "pessoas em",
            rtpLost : "pessoas <em>perdidas</em> em",
            rtpEternity : "morrem a cada",
            rtpBegan : "Nos últimos",
            rtpAgo : "o seguinte número dessas pessoas passaram a vida eterna <em>sem Jesus Cristo</em>:",
            rtpDownload : "Baixar",
            rtpSecond : "Segundo",
            rtpSeconds : "Segundos",
            rtpMinute : "Minuto",
            rtpHour : "Hora",
            rtpDay : "Dia",
            rtpWeek : "Semana",
            rtpYear : "Ano"
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
 * In some languages, a preposition should not be added to the end of the `rtpPeople` and `rtpLost` 
 * phrases because the preposition needed may change based on the user's provided location. 
 * For example, in Italian the correct preposition would need to be "nel" (literally "in the") if the provided 
 * location was the Italian equivalent of world or "in" (literally "in") if the provided location was the 
 * Italian equivalent of Italy. Leaving off the preposition in the translation file helps overcome this issue 
 * because the location can be prefixed with the correct preposition in the defaults file and/or by the user 
 * at runtime. 
 */