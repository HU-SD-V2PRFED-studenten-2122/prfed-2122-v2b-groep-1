# use case hoofdstuk

# klasse Cursus

![use case diagram Curus](/docs/fotos/Use%20Case%20Diagram2.cursus.jpg)

## actor beschrijvingen
**examencomissie**, controleert de cursussen en de toetsen of het voldoet aan de eisen.

**onderwijscoördinator**, bepaalt jaarlijks welke cursussen/toetsen er in het bezem-conversie-bestand komen te staan. 

**gebruiker**, bekijkt welk vak hij/zij moet herkansen.

**cursuscoördinator/docent**, plaatst opmerkingen indien het conversievak incorrect of incopleet is weergeven.



## use case beschrijvingen
**Search old course** kan worden uitgevoerd door elke gebruiker. Hierbij typt een gebruiker de naam van de oude cursus in, en op basis van de invoer worden de resultaten gegeven.

**Search new course** is een include van search old course, dus het is bruikbaar voor dezelfde actoren. Een nieuwe cursus wordt opgezocht zodra de oude cursus is bevestigd.

**Approve courses** kan aleen worden uitgevoerd door de onderwijscoördinator en de examencomissie.Een onderwijscoördinator keurt als eerste de cursus goed, en daarna keur de examencomssie de cursus.

**Add old course** kan alleen worden uitgevoerd door de onderwijscoördinator. De onderwijscoördinator voert de cursus in en voegt deze cursus daarna toe aan de draft.

**Add new course** is een include van add old course. De onderwijscoördinator voert de nieuwe cursus in en voegt deze dan toe aan de oude cursus.

**Add test** is een include van add old course en van add new course. Voordat de cursus is toegevoegd aan de draft kan de onderwijscoördinator toetsen toe voegen aan een cursus.

**Place note** kan alleen worden uitgevoerd door een docent of een cursuscoördinator. Een note wordt toegevoegd aan een nieuwe cursus via de draft.

**Delete course** kan alleen worden uitgevoerd door de onderwijscoördinator. De onderwijscoördinator kan een cursus direct verwijderen vanuit de draft

**Delete new course** is kan op twee manieren worden uitgevoerd door een onderwijscoördinator. De eerste manier is om simpelweg de nieuwe cursus te verwijderen uit de draft, en de tweede manier is door de oude cursus te verwijderen uit de draft.

**Delete test** kan alleen worden uitgevoerd door de onderwijscoördinator. Delete test kan op twee manieren worden aangeroepen, de eerste manier is om de toets direct te verwijderen vanuit de draft. De tweede manier is om de cursus te verwijderen, want dan worden de bijbehorende toetsen ook verwijderd.

**Edit course** kan alleen worden uitgevoerd door de onderwijscoördinator. De onderwijscoordinator kan een course editen vanuit de draft.

**Import courses** kan alleen worden uitgevoerd door de onderwijscoördinator. De onderwijscoordinator kan alle courses van het huidige jaar importeren in de draft. Deze draft kan hij/zij dan om tot een nieuwe draft te komen.

# klasse toets

![use case diagram toets](/docs/fotos/Use%20Case%20Diagram.toets.jpg)

## actor beschrijvingen
**onderwijscoördinator**, bepaalt jaarlijks welke cursussen/toetsen er in het bezem-conversie-bestand komen te staan. 



## use case beschrijvingen
**enter test** kan alleen worden uitgevoerd door de onderwijscoördinator. Een toets kan worden ingevoerd bij het toevoegen van een oude cursus.

**enter replacing test** kan alleen worden uitgevoerd door de onderwijscoördinator. Een vervangende toets wordt ingevoerd bij een vervangende cursus.

**edit test** kan alleen worden uitgevoerd door de onderwijscoördinator. Een toets kan worden geëdit vanuit de draft.

**delete test** kan alleen worden uitgevoerd door de onderwijscoördinator. Een toets wordt verwijderd bij het verwijderen van een cursus.



