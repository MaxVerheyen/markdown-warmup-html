# JavaScript

## Opdrachten serie 2

## Hulpmiddelen
Gebruik deze site om uw zelf te helpen.
Het is het antwoord op alle vragen die je hebt. De samenvatting staat links (niet rechts zoals op Bootstrap). Zoeken, kijken, kijken, kijken, zoeken naar wat je nodig hebt. Help elkaar ook!
- [De Javascript documentatie op de website van Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)


## Oefeningen

Maak een HTML-bestand voor elke oefening Bijv: "ex01.html", "ex02.html",.....

### **Oefening 1** - een functie schrijven

Maak een knop "Bereken het oppervlak van een rechthoek". Zorg ervoor dat wanneer u op de knop klikt, de `surfaceRectagle()` functie start. Deze functie zal u vragen om een breedte en lengte in te voeren en het oppervlak van de corresponderende rechthoek weer te geven.

Maak vervolgens een nieuwe knop "Bereken de omtrek van een rechthoek". Zorg ervoor dat wanneer u op de knop klikt, de `perimeterRectangle()` functie start. Deze functie zal u vragen om een breedte, een lengte en de omtrek van de rechthoek in te voeren.

Om de resultaten weer te geven, vergeet niet om tekst rondom het antwoord te plaatsen zodat we weten waar de uiteindelijke antwoorden naar verwijzen!

### **Oefening 2** - het schrijven van een functie die een waarde terug geeft

Creëer een functie die:
- vraagt om het invoeren van een straal;
- geeft het oppervlak van de cirkel van deze straal weer.
Geef vervolgens het resultaat van de prompt naar deze functie weer door op een knop te klikken.

### **Oefening 3** - het schrijven van een functie met parameters

1. Maak twee globale variabelen `a` en `b`, defineer de variabelen met 3 en 2.
2. Creëer een `tripple` functie door een argument x te nemen en het resultaat van de vermenigvuldiging x met 3 terug te geven.
3. Creëer een `display` functie, die aangeroepen wordt wanneer er op een knop wordt geklikt. In de `display` functie word de formule eerst met de variabel a berekend, en vervolgens de zelfde formule maar dan met de `b` variabel.
Toon het resultaat van beide formules in een alert().


### **Oefening 4** - gebruik van een array

1. Maak een array genaamd `tab` waarvan het eerste element -2 is, het tweede 1 en het derde 4
2. Creëer een `add` functie die een argument x neemt en het resultaat van de optelling van x met 2 terug geeft.
3. Creëer een `display` functie, aangeroepen wanneer er op een knop wordt geklikt, die in achtereenvolgende waarschuwingsvakken het resultaat van `add` weergeeft met het eerste element, dan op het laatste element van de array.
(Maak gebruik van de `lengte` eigenschap).

### **Oefening 5** - wiskundige operatoren

b is altijd geïnitialiseerd met de waarde 2. Wat is het resultaat van de volgende operaties?

- `a=b++;`
- `a=++b;`
- `a=b--;`
- `a=--b;`
- `a+=b++;`
- `a=1; a+=++b;`
- `a=1; a-=b++;`
- `a=1; a-=++b;`
- `a=1; a+=b--;`
- `a=1; a+=--b;`

Geef voor elk van de bewerkingen de uitgevoerde formule, de waarde van `a` na de bewerking en de waarde van `b` na de bewerking weer.

### **Oefening 6** - Aanroepen van een functie die een waarde terugstuurt

1. Maak een array genaamd `tab` met het eerste element -2, het tweede element 1 en het derde element 4
2. Maak een `subtract` functie waarbij een argument x wordt genomen en hiervan de eerste waarde uit de array (-2) wordt afgetrokken. indien x positief of nul is, geef de tekst weer: "Getal positief". Geef anders de tekst weer: "Negatief getal!".
3. Maak een `display` functie, die aangeroepen wordt wanneer u op de knop klikt. De functie geeft achtereenvolgens het resultaat van de aftrekking van het eerste element en het resultaat als het met de laatste element van de array gebeurd (Maak gebruik van de `length` eigenschap).


### **Oefening 7** - Maak gebruik van switch

Maak een knop. Wanneer u op deze knop klikt, start u de functie `makeChoice()`.

Deze functie vraagt de gebruiker door middel van een `prompt()` te kiezen tussen 1, 2 of 3.

- als hij voor 1 kiest, tonen we met een alert: "1. Thank you".
- als hij er 2 kiest, tonen we met een alert: "2. Hello"
- als hij er 3 kiest, tonen we met een alert: "3. Good bye".
- als hij iets anders kiest, posten we met een alert: "Excuse me, what do you want?

### **Oefening 8** - Gebruik maken van de switch en het datumobject

Maak een knop. Wanneer op deze knop wordt geklikt, start de `weekday()` functie. Deze functie bepaalt de dag van de week en toont de waarde zondag, maandag, dinsdag, dinsdag, enz. tot zaterdag.

### **Oefening 9** - Gebruik maken van de while-lus

Maak een knop. Wanneer op deze knop wordt geklikt, start u de `testWhile()` functie. Deze functie vraagt de gebruiker om een string in te voeren die de letter `p` bevat, en vraagt dit net zo lang totdat de gebruiker dit heeft gedaan. Vervolgens wordt de in aanhalingstekens ingevoerde tekenreeks weergegeven.

### **Oefening 10** - Gebruik maken van de for-lus

Maak een knop. Wanneer u op deze knop klikt, start u de `sum` functie. Deze functie vraagt de gebruiker drie keer om een getal in te voeren en toont vervolgens de som van deze drie getallen.

### **Oefening 11** - Maak gebruik van lussen

Maak een knop. Wanneer op deze knop wordt geklikt, start de `calcAverage()` functie.

Deze functie berekent het gemiddelde van de getallen die in een alert worden ingevoerd.

- vraag de gebruiker om een geheel getal in te voeren.
- Als de gebruiker iets anders dan een geheel getal invoert, geef via een alert() de fout aan en vraag de gebruiker om opnieuw een geheel getal in te voeren.
- Zolang het ingevoerde getal positief of nul is, slaat de functie dit getal op en voegt het toe aan de andere eerder ingevoerde getallen.
- Als het getal positief is, berekent de functie het gemiddelde van alle ingevoerde getallen door de totale som te delen door het aantal ingevoerde waarden.
- de functie geeft het aantal ingevoerde waarden weer
- de functie geeft het gemiddelde weer

### **Oefening 12** - Celsius, Fahrenheit en Kelvin temperatuurconversie

Maak een knop. Wanneer op deze knop wordt geklikt, wordt de functie `TemperatureConversion` gestart.

De gebruiker kiest eerst in het getoonde menu wat voor soort conversie hij wil, hij geeft zijn keuze aan door middel van een javascript prompt het overeenkomstige nummer in het menu aan te geven.

Vervolgens zal een tweede prompt de gebruiker vragen naar om de temperatuur in te geven die hij wenst te converteren. geef het resultaat weer via een alert.

Het menu :

0. End of the program
1. Celsius to Fahrenheit
2. Celsius to Kelvin
3. Fahrenheit to Celsius
4. Fahrenheit to Kelvin
5. Kelvin to Celsius
6. Kelvin to Fahrenheit

Om de omrekening te berekenen, gebruikt u de volgende formules :

	[°F] = ([°C] x 9/5) + 32
	[K] = [°C] + 273,15
	[°C] = ([°F] - 32) / (9/5)
	[K] = (([°F] - 32) x (5/9)) + 273,15
	[°C] = [K] - 273,15
	[°F] = ([K] x 9/5) - 459,67

	waarin[K] de temperatuur in Kelvin vertegenwoordigt
	waarin [°F] de temperatuur in graden Fahrenheit vertegenwoordigt
	waarin [°C] de temperatuur in graden Celsius vertegenwoordigt

Voorbeelden van te testen waarden:
- 0 K = -273,15 °C = -459,67 °F
- 283,15 K = 10 °C = 50 °F
- 273,15 K = 0 °C = 32 °F
- 373,15 K = 100 °C = 212 °F
- 233,15 K = -40 °C = -40 °F


### **Oefening 13** - Berekening van de BMI

De BMI of Body Mass Index wordt gebruikt om de gezondheidsrisico's van volwassenen met overgewicht te beoordelen.
Deze wordt berekend door het gewicht uitgedrukt in kg te delen door het kwadraat van de hoogte uitgedrukt in meters.

    Bijvoorbeeld:
    - Een persoon die 95 kg weegt en 1,81 M meet, heeft een BMI van 95/(1,81*1,81)= ongeveer 29,0
    - Een persoon die 48 kg weegt en 1,69 M meet, heeft een BMI van 48/(1,69*1,69)= ongeveer 16,8
    - Een persoon die 61 kg weegt en 1,57 M meet, heeft een BMI van 61/(1,57*1,57)= ongeveer 24,7

Afhankelijk van de verkregen waarde kan de corpulentie als volgt worden geschat:

    - Minder dan 16,5: ondervoeding of hongersnood
    - 16,5 <= BMI <18,5 : dunheid
    - 18,5 <= BMI <= BMI < 25 : normale bouw
    - 25 <= BMI <30 : overgewicht
    - 30 <= BMI <= BMI < 35 : matige overgewicht
    - 35 <= BMI <40 : ernstige overgewicht
    - meer dan 40: morbide obesitas

Maak een knop. Wanneer op deze knop wordt geklikt, start de `calcBMI` functie.

Deze functie vraagt om een gewicht en een hoogte, bereken daarmee de BMI, geef deze waarde met 2 decimalen weer en geeft tenslotte een bericht weer waarin staat in welke gewichtklasse u valt.

## Cat tax
![Colonel Meow for the Cat Tax](Colonel-Meow.jpg)