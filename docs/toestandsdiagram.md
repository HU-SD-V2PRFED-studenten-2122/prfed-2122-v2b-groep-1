# klasse BezemConversieSheet

## toestandsmodel

![domeinmodel user story 1](/docs/fotos/State%20Machine%20Diagram3.jpg)

## omschrijving van toestanden

Wanneer een BezemConversieSheet in de toestand "waiting" is, dan is de bezemconversiesheet nog een draft.

Met de toestand "huidig" wordt de bezemconversiesheet van dit jaar bedoeld

Gearchiveerd geeft aan dat de bezemconversiesheet opgeslagen is, en niet meer huidig is.

## validatie

| toestand | goedgekeurd | 
| --- | --- |
| waiting | false | 
| huidig | true | 
| gearchiveerd | true | 


