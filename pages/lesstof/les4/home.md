---
layout: page
title: "Home"
description: ""
---
{% include JB/setup %}

<p>En opeens zijn we al bij les 4 van de cursus Apps om in te lijsten. In de fysieke workshop is dit vooral een les om je project af te maken, dus de beschrijving van dit verhaal zal redelijk kort zijn.</p>

<p class="instructor">Hoe staat iedereen ervoor met zijn of haar projecten? [Even checken.]</p>

<p class="instructor">
Deze week wil ik vooral jullie helpen bij het afmaken van jullie projecten, maar tussendoor zal ik ook iets vertellen over hoe je je werk naast de Tablet kan delen op verschillende manieren:
- Als afbeelding
- Als PDF
- Op volledig scherm met bijvoorbeeld een beamer
- Op het internet

Maar eerst kun je zelf aan de slag, dus pak je laptop en ga lekker aan de slag.
</p>


<h2>Je werkt delen met de wereld</h2>
Plaatjes

<p>Nu dat we bijna klaar zijn en jullie allemaal met wat zelfvertrouwen zelf projecten kunnen uitdenken en realiseren, wordt het tijd om het te hebben over hoe je je werk kan delen met anderen. Daarom als tussendoortje tijdens deze laatste bijeenkomst een overzicht van hoe je je werk kan delen.
</p>

<p>
Als eerste gaan we kijken naar het exporteren van een afbeelding vanuit Processing. Zo kun je je werk delen op het internet. Dat kan door het toevoegen van de regel 
</p>

<pre>
<code>
void draw(){
    rect(20,20,5,5);
//Deze regel
  save('frame.tiff');
}

</code>
</pre>

<p>
Aan je werk. Zoals je ziet is het niet heel moeilijk, je geeft aan dat hij het moet opslaan en als parameter geef je een bestandsnaam op. Naast tif kan Processing ook opslaan in jpg of png, ook kun je Processing directories aanlaten maken door bijvoorbeeld
</p>

<pre>
<code>
void draw(){
    rect(20,20,5,5);
//Deze regel
  save("afbeelding/frame.tiff");
}
</code>
</pre>
<p>
te doen.
</p>
<p>
nu kun je save() in draw() stoppen, maar dan overschrijft Processing steeds hetzelfde plaatje wat niet echt op schiet. Vaak wil je zelf een specifiek moment uitkiezen dus is het logischer op een muisklik te zetten
</p>
<pre>
<code>
if (mousePressed == true) {
    save("afbeeldingen/plaatje.jpg");
  }
void MousePressed(){
    save("afbeeldingen/plaatje.jpg");
}
</code>
</pre>
<p>
Op deze manier slaat hij alleen een afbeelding op op het moment dat je de muis indrukt. Hij overschrijft nog steeds de bestaande afbeelding, maar nu kun je nog kiezen.
</p>

<p>
Mocht je het handiger vinden om als je vaker klikt Processing er een nieuw bestand van maakt, dan is daar ook een optie voor, die heeft niet save() maar saveFrame() en die ziet er zo uit.
</p>


<pre>
<code>
saveFrame("afbeeldingen/plaatje-####.jpg");
</code>
</pre>

<p>
Zoals je ziet is het bijna hetzelfde behalve dat je een aantal # hekjes toevoegd. Processing vult die straks in met een een getal zodat elk plaatje een uniek nummer heeft zoals plaatje-0001.jpg, plaatje-0002.jpg.
</p>


<p class="instructor">Als docent tijd over heeft kan hij dit voordoen, anders verwijzen naar de site</p>

<h2>Video's maken</h2>
<p>
Omdat video eigenlijk niets anders is dan heel veel plaatjes achter elkaar zetten, kun je door saveFrame in draw te zetten heel veel plaatjes laten maken en deze met de tools->Movie maker ombouwen tot een video. Hoe dat werkt is te vinden op de Appsomintelijsten site.
</p>

<p>Movie maker:
Uitleg movie maker</p>

<h2>Kiosk Mode</h2>
<p>
Het exporteren van een video is best technisch, dus we gaan nu iets makkelijkers doen, het full-screen presenteren van je code. Dit kan heel makkelijk met ctrl+shift+r of cmd+shift+r op een Mac. Nu zie je dat Processing automatisch alles in je scherm zwart maakt en in het midden je werk zet.
</p>

<p>
Nou is dit best fraai, maar het is natuurlijk nog mooier als je sketch schermvullend was. Dat kan door in size, je resolutie in te vullen, maar dit is lastig als je je werk ook op andere plaatsen wil laten zien. Daarom kun je ook gebruik maken van displayWidth en displayHeight, dit werkt ook op Tablets dus zo is je werk altijd schermvullend. Dit werkt trouwens niet in Javascript modus waar we zo naar gaan kijken.
</p>



<pre>
<code>
size(displayWidth,displayHeight);
</code>
</pre>

<p>
Mocht je nou meerdere schermen hebben en je werkt op het tweede schermen willen laten zien. Dan vindt je onder Preferences de optie &#34;Run sketches on display&#34; waarna je het scherm nummer kan aanpassen.
</p>

<h2>Javascript mode</h2>
<p>Het laatste wat ik wil laten zien is de Javascript mode, dit is net als de Anroid Mode een alternatieve mode in Processing die ervoor zorgt dat je werk niet als Java of Android applicatie wordt uitgeschreven maar als website element. Zo kun je bijvoorbeeld de achtergronden om je website interactieve maken.</p>

<p>
ProcessingJS zit standaard niet in Processing maar is makkelijk te installeren als extra mode. Als je rechts bovenin kijkt zie je een blokje &#34;JAVA&#34;. Als je hier op klikt zie je in het menu de optie, add mode. Als je hierop klikt laad er een lijst met extra modes die Processing nieuwe opties geeft, de ModeManager. Kies nu Javascript Mode, deze download en installeert zich dan. Als dat klaar is herstart je processing en kies je rechts bovenin JavaScript.
</p>

<p>
Alles blijft hetzelfde ,maar op het moment dat je op Play drukt exporteert Processing een website met daarin je werkende programma. Het mapje web-export dat in dezelfde map staat als je opgeslagen bestand kun je online ergens neer zetten om aan anderen te laten zien. 
</p>

<p>
In Javascript mode mogen soms dingen niet, die in normaal Processing wel mogen en andersom. Daarom is het goed om als je een groter project maakt dat naast gewoon Processing ook javascript gebruikt, tussendoor te testen zodat je niet hele stukken opnieuw hoeft te schrijven omdat je ergens iets doet dat niet mag in Javascript mode.
</p>

<p class="instructor">
Nog even 20 minuten de laatste details en dan het elkaar laten zien.</p>

<p>
Ik wil jullie allemaal erg bedanken voor het meedoen. Ik hoop dat jullie veel geleerd hebben. Je kunt nu natuurlijk nog lang geen GTA maken over programmeren voor Google, maar hopelijk denk je nu als je zoiets als je games of software ziet dat je nadenkt over hoe je het in kleine stukjes kan hakken zodat
</p>

<p>
Kijk vooral nog eens op AppsomInTeLijsten.nl voor meer tips. </p>

<p class="instructor">
Wijzen op het moeilijke script van Hay!
</p>

<p class="instructor">
LES 4 - Export
3.10 0.00 - Welkom
3.20 0.05 - Studenten werken aan project. Docent loopt rond en springt bij
3.30 0.45 - Export opties
3.40 0.45 - Plaatjes
3.50 0.50 - Movie maker
3.60 1.05 - Beamer (kiosk mode)
3.70 1.10 - Processing.js
3.80 1.20 - Studenten werken aan project. Docent loopt rond en springt bij
3.90 1.40 - Afronding
4.00 1.45 - Nogmaals wijzen op de documentatie, forum etc.
</p>

