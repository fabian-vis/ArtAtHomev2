# ArtAtHome

Welkom bij mijn project van de minor Webdesign and development. Het doel van dit vak is het maken van een serverside web applicatie. Ook is het de bedoeling dat als de gebruiker offline gaat op de website dat er informatie gecached word zodat de gebruiker de website ook offline kan gebruiken. Ook moeten we ervoor zorgen dat de prestaties zo snel mogelijk zijn zodat de gebruiker zo min mogelijk hoeft te wachten.

### User story

> As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown.

### Voorbeeld

![Voorbeeld](img/voorbeeldweb.png)

### Proces

[Hier](https://github.com/fabian-vis/ArtAtHomev2/wiki "procesverslag") kan je mijn procesverslag bekijken

### Activitydiagram

![Activitydiagram](img/activitydiagramserverside.png)

### Service worker

Service workers zijn gespecialiseerde JavaScript-middelen die als proxy's tussen webbrowsers en webservers werken. Ze zijn bedoeld om de betrouwbaarheid te verbeteren door offline toegang te bieden en de paginaprestaties te verbeteren.

Hoe werkt het:

Bij de eerste keer word een service worker geregistreerd met de ServiceWorkerContainer.register() method
Daarna gaat de service worker de volgende stappen steeds door.

- Download
- Install
- Activate

Een service worker word gedownload wanneer een user voor het eerst op een website komt die een service worker gebruikt.
Installatie word uitgevoerd wanneer de gedownloade file nieuw is of anders is dan de huidige service worker (byte to byte) versie.

Als het dus de eerste keer is dat er een service worker geinstalleerd word, word deze geinstalleerd en daarna geactiveerd.

Als er al een service worker geinstalleerd staat, word de nieuwe versie gedownload maar nog niet geactiveerd. Deze fase heet waiting. Hij word
pas geactiveerd op het het moment dat er geen page reloaded zijn die op de oude service worker runnen.

### Client-side vs Serverside rendering

**Clientside**

Met een client-side rendering wordt er een verzoek met een HTML-bestand naar de server gestuurd en de server levert het zonder enige inhoud totdat alle JavaScript opgehaalt is en de browser alle files gecompiled heeft voordat alles gerenderd wordt. Met een goede en stabiele internet connectie werkt dit prima.

**Voordelen van Clientside Rendering**

- De applicatie voelt meer responsive omdat je geen flashes ziet tussen pagina navigaties omdat er geen full page refreshes zijn
- Minder HTTP requests

**Nadelen van Clientside Rendering**

- Zwaardere eerste page load vanwege frameworks, applicatie code en assets voor verschillende pagina's
- Heeft meestal een external library nodig
- Alle zoekmachines voeren JavaScript uit tijdens het crawlen en ze kunnen lege inhoud op je pagina zien. Dit schaadt onbedoeld de SEO van je app.

**Serverside**

Wanneer de gebruiker een request maakt naar de webpagina, bereidt de server de html pagina voor door het fetchen van de nodige data vanuit de database en verstuurd het naar de gebruikers device. Daarna presenteert de browser de gerequestde acties op de UI van de gebruiker. Het processen en fetchen word allemaal gedaan in millisecondes.

**Voordelen van Serverside Rendering**

- De eerste load van de pagina sneller
- Goed voor minimalistische websites
- Beter voor SEO vanwege search engine crawlers

**Nadelen van Serverside Rendering**

- Langzame pagina rendering
- Volledige UI reloads
- Veel server requests

### Features

Je kan op deze single page website zoeken in de rijksmuseum API. Je kan de schilderijen bekijken, zien hoe ze heten en zien wie het schilderij gemaakt heeft. Je kan ook zoeken naar een specifiek schilderij of schilder.

### Hoe installeer je dit project op je lokale machine?

1. In je CLI plak deze code: `git clone https://github.com/fabian-vis/ArtAtHomev2` (of gebruik github desktop)

2. Cd progressive-web-apps-2122 of hoe jij de folder genoemd heb

3. typ npm install in de terminal

4. typ npm start om de server te starten

5. kopieer de link gegeven in de terminal en plak deze in een browser naar keuze

vergeet niet om je eigen API key aan te vragen bij de rijksmuseum API. Vervolgens moet je een .env-dev bestand aanmaken en daar zet je je key in.

Je kunt de app ook installeren als web app op je desktop of mobiel. In Google chrome navigeer naar de url en dan helemaal rechts kan je de installatie starten.

### API Documentatie

Ik heb gebruik gemaakt van de Rijksmuseum API. Deze API is gratis te gebruiken en bevat alle schilderijen die zich in het rijksmuseum bevinden. Hier vind je alle informatie over de API: [Rijksmuseum - RijksData API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/rijksmuseum.md)

### Licence

Dit project is voorzien van een MIT licence.

### Resources

Docenten en Student-Assistenten

https://data.rijksmuseum.nl/object-metadata/api/

Medestudenten :)
