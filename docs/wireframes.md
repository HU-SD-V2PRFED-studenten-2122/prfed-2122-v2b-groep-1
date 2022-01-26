# Wireframes

Hieronder ziet u de wireframe voor onze homepagina (index.html). Dit is de eerste pagina waar je als gebruiker op komt. Hier kan je als student gebruik maken van je belangrijkste functie ([user story](https://github.com/HU-SD-V2PRFED-studenten-2122/prfed-2122-v2b-groep-1/issues/5)): het opzoeken van een oude cursus om erachter te komen welke toetsen of andere opdrachten je zult moeten afronden om je studiepunten voor een vak wat je afgelopen jaar (of jaren) niet gehaald hebt, alsnog te halen.   
Vanaf deze pagina kan je naast het opzoeken van een cursus ook naar andere pagina's op onze website navigeren. Boven 'Kop van uitleg' zie je een bovenbalk, deze is hetzelfde voor alle pagina's op onze website. Aan de linkerkant hiervan zie je een plaatje van de HU, als een gebruiker hierop drukt wordt hij of zij naar de homepagina gestuurd. Drukt een gebruiker op B/C Sheets, wordt hij of zij naar de bezem/conversie sheet van het huidige jaar gestuurd, in dit geval dus naar de pagina waar de bezem/conversie sheet van 2021-2022 staat (2021-2022.html). Als een gebruiker op Draft drukt wordt hij of zij eerst naar de inlogpagina (login.html) gestuurd om te verifiëren dat deze persoon wel toegang mag krijgen tot deze pagina. Ook met de Login knop wordt een gebruiker naar de inlogpagina gestuurd.  

Verdere informatie over deze wireframe: de grijze achtergrond is eigenlijk een tweekleuringe achtergrond van lichtblauw en -rood wat in elkaar loopt, dit was echter niet in Visual Paradigm te krijgen dus is gebruik gemaakt van deze grijze achtergrond om de positie van onze achtergrondkleuren van ons te laten zien.  

![wireframe van de hoofdpagina](/docs/fotos/Wireframe%20index.html.jpg)

Je ziet hier midden op de pagina de label 'Zoek vak op naam:' met een tekstgebied wat ingevuld kan worden. Hier kan je, zoals het label beschrijft, een vak invullen en terwijl je typt worden alle resultaten van vakken die overeenkomen met je query al meteen getoond. Zo ziet het eruit als je een vak hebt ingetypt en er 1 resultaat is (meerdere resultaten worden onder elkaar getoond):

![tweede wireframe van de hoofdpagina](/docs/fotos/Wireframe%20index.html%202.0.jpg)

Als je op een gezocht vak drukt, opent zich hieronder een nieuw venster. Ook van deze kan je er meerdere open hebben staan en ook deze zullen dan onder elkaar worden getoond. Je kunt deze cursusdata per cursus ook weer sluiten met de 'Close' knop die eronder wordt getoond. Verder zie je trouwens ook dat de achtergrond mee verlengt met de pagina wanneer nodig.

![derde wireframe van de hoofdpagina](/docs/fotos/Wireframe%20index.html%203.0.jpg)

Zoals eerder verteld kan je dus met de B/C Sheets knop bovenin naar de bezem/conversie sheet van het huidige jaar navigeren. Deze voldoet aan nog een [user story](https://github.com/HU-SD-V2PRFED-studenten-2122/prfed-2122-v2b-groep-1/issues/6), namelijk het kunnen terugvinden van oudere cursussen. Dit is voor zowel studenten als docenten en andere werknemers van de opleiding handig.  
Deze pagina heeft in plaats van een witte achtergrond dezelfde gekleurde achtergrond als de homepagina op het grijze gedeelte. Hieronder de B/C sheet-pagina voor 2021-2022:

![wireframe van de b/c sheet pagina](/docs/fotos/Wireframe%202021-2022.html.jpg)

Hier zie je onder de bovenbalk de tekst 'Jaaropgave 2021-2022' met hiernaast twee knoppen. Hiermee kan je naar de sheets van oudere en nieuwere jaren navigeren (bijv. 2020-2021.html). Deze zien er hetzelfde uit behalve dat de titel en tabellen uiteraard worden gewijzigd. 
Verder kan je op deze pagina naast de label 'Cursuscode:' een cursuscode intypen en opzoeken met de 'Zoeken' knop. Als een gebruiker dit doet krijgen alle rijen waarvan de cursuscodes niet met de zoekopdracht overeenkomen een witte achtergrond, terwijl de rijen waarvan de cursuscodes hier wel mee overeenkomen een lichtrode of lichtblauwe achtergrond krijgen (dezelfde kleuren als de achtergrond), gebaseerd op hun plaats in de tabel. Een voorbeeld hiervan is hieronder te zien:

![tweede wireframe van de b/c sheet pagina](/docs/fotos/Wireframe%202021-2022.html%202.0.jpg)

Zoals eerder verteld zijn er dus twee manieren om op de loginpagina te komen, via 'Draft' en 'Login', allebei in de bovenbalk. De reden dat je hier via Draft ook heengestuurd wordt is omdat de gebruiker wel toegang moet hebben tot de draft-sheet, en dat mag niet iedereen hebben. Degenen die hier officieel toegang tot hebben zijn de docenten, cursuscoördinatoren, onderwijscoördinator en examencommissie. Voor hun is deze functie dus ook een belangrijke [user story](https://github.com/HU-SD-V2PRFED-studenten-2122/prfed-2122-v2b-groep-1/issues/7), namelijk geauthoriseerd en veilig gebruik kunnen maken van de draft-sheet, zonder dat anderen deze zomaar kunnen wijzigen. 
Echter hebben wij geen back-end, hierom is alleen het inloggen zelf vereist en wordt geen gebruik gemaakt van authorisatie. De inlogpagina is hieronder te zien:

![wireframe van de inlogpagina](/docs/fotos/Wireframe%20login.html.jpg)

Dan als laatste: de draft pagina. Hier kun je alleen via de loginpagina komen na ingelogd te hebben. Deze toont de huidige draft-pagina met de optie om er cursussen aan toe te voegen (zie knop 'voeg cursus toe') en geeft de mogelijkheid om er cursussen in op te zoeken, dit werkt op dezelfde manier als getoond op de B/C Sheet pagina. Hieronder ziet u de draft pagina:

![wireframe van de draftpagina](/docs/fotos/Wireframe%20draft.html.jpg)

Het toevoegen van een cursus ziet er als volgt uit, na op 'voeg cursus toe' gedrukt te hebben, wat trouwens nog een belangrijke [user story](https://github.com/HU-SD-V2PRFED-studenten-2122/prfed-2122-v2b-groep-1/issues/19) is, opent zich deze popup:

![tweede wireframe van de draftpagina](/docs/fotos/Wireframe%20draft.html%202.0.jpg)

Hier kun je een oude cursus invoeren (met alle gegevens zoals op het scherm te zien is) en hier nieuwe toetsen aan toevoegen, of je kunt hier een gehele nieuwe cursus voor aanmaken. Dit scherm ziet er als volgt uit:

![derde wireframe van de draftpagina](/docs/fotos/Wireframe%20draft.html%203.0.jpg)

Hier is nog iets meer informatie vereist, aangezien er geen cursus opgezocht moet worden waaraan gegevens gewijzigd moeten worden maar een gehele nieuwe cursus moet worden aangemaakt waar ook nieuwe informatie bij nodig is, zoals bijvoorbeeld wie de cursus coördinator is en in welke periode(s) de cursus actief zal zijn.  
Als er op de knop 'Add toets' wordt gedrukt opent zich een klein venster binnen het scherm waar de gegevens voor deze toets kunnen worden ingevuld en opgeslagen kunnen worden. Hiermee is het ook mogelijk om meerdere toetsen toe te voegen, en dit scherm is hetzelfde voor de 'Voer oude Cursus in' venster als er op de knop 'toets toevoegen' wordt gedrukt.  
Verder dienen de knoppen 'Submit' of 'Add' onderaan uiteraard voor het toevoegen van de gehele ingevoerde cursus en 'Cancel' voor het annuleren van het invoeren van de oude of nieuwe cursus. Hieronder een venster waarbij er 1 keer op de knop 'Add toets' (wat dus hetzelfde resultaat zal geven als de knop 'toets toevoegen' bij het aanpassen van een oude cursus) is gedrukt:

![vierde wireframe van de draftpagina](/docs/fotos/Wireframe%20draft.html%204.0.jpg)
