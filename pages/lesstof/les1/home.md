---
layout: page
title: "Les 1"
description: "De lesstof van les 1"
---
{% include JB/setup %}

<h3>Bekijk je deze pagina als Docent of Student?</h3>
<div class="btn-group ">
  <button id="student" type="button" class="btn btn-default">Student</button>
  <button id="teacher" type="button" class="btn btn-default">Docent</button>
</div>
<p class="instructor"> <br />Deze optie geeft extra teksten weer met instructies voor docenten van de workshop. Aan het einde van elke les wordt ook een tijdsindeling gegeven hoe lang elk deel ongeveer moet duren.</p>

<h1>Welkom</h1>

<p>Welkom bij de cursus Apps om in te lijsten. Dit is de eerste van vier lessen waarin de wereld van beeld door code zullen betreden. In deze eerste les gaan we kijken naar Processing zelf. Daarna gaan we zelf aan de slag om dingen aan te passen in een voorbeeld script. Zo leer je dat experimenteren op andersmans code een snelle manier is om nieuwe dingen te leren en heb je aan het einde van de les meteen iets leuks op je scherm staan.</p>

<p class="instructor">Vandaag gaan wij elkaar eerst even leren kennen; we gaan wat voorbeelden bekijken van de mogelijkheden van beeld door code als je echt heel goed bent; daarna duiken we in de basis van de materie, ofwel het daadwerkelijke programmeren; als we dat hebben gedaan, mogen jullie met die kennis direct aan de slag (zo leer je immers het snelst); de resultaten daarvan gaan we klassikaal behandelen; en tot slot krijgen jullie uiteraard een emmer huiswerk mee.</p>

<p class="instructor">Rondje langs de deelnemers, waarin zij kort over hun respectievelijke achtergrond kunnen vertellen. Probeer hierbij een gevoel te krijgen wat het technisch niveau is van de groep.</p>

<h2>Aan de slag met Processing</h2>

<p>
Het doel van deze cursus is niet dat je na de vierde les een spel als GTA V kunt gaan maken. Het is natuurlijk helemaal prima als je dat wel kunt, maar wij hebben in beginsel een iets minder stressvol ambitieniveau voor ogen. Het lijkt ons gaaf als we na de vierde les iets van beeld kunnen genereren op het tablet.
</p>

<p>
Er zijn heel veel manier om kunst te maken door middel van code, maar deze cursus is veel te kort om alle mogelijkheden te benoemen, laat staan behandelen. Wat wij gaan doen is Java programmeren in Processing. Dat is een programmatje dat je gratis kunt downloaden voor alle grote besturingssystemen en waarmee je snel tot zichtbaar resultaat kunt komen. Op de website van Processing kun je onder <a href="http://processing.org/exhibition/" target="_blank">Exhibtion</a> heel veel voorbeelden zien van werk gemaakt in Processing.</p>

<p class="instructor">Toon voorbeelden van kunst, toepassingen en computerspellen waarbij beeld door code evident is. Dit is ook een goed moment om eigen Processing werk te tonen.</p>


<p>Omdat Processing ook gebouwd is vanuit een educatief standpunt, heeft allemaal handige tools, een goede online documentatie en veel expert die online mensen verder helpen met hun vragen. Daarom zal het niet moeilijk voor je om handvatten te vinden hoe je verder kan met Processing als je klaar bent de workshop.
</p>

<p class="instructor">Laat de website van Processing zien; het downloaden; het installeren; het openen en de documentatie. Bespreek vooral hoe een pagina in de reference is opgebouwd, dit bleek een waardevolle toevoeging.</p>

<p>
Installeer Processing door het te downloaden vanaf de <a href="http://processing.org/download/?processing" target="_blank">processing website</a>, let op dat als je aan de slag wil met Processing draaien op Android apparaten, dat versie 2.03 de laatste versie is die zonder problemen draait.
</p>

<img src="http://processing.org/tutorials/gettingstarted/imgs/Fig_02_01.gif" alt="Processing interface"/>

<p>
De interface is simpel, zodat je snel aan de slag kan. De belangrijkste middelen om je programma te laten starten en stoppen staat in de toolbar. De text editor is het deel waar je je programmacode schrijft. De overige delen zijn op dit moment nog niet zo belangrijk.
</p>

<p>
Een van de belangrijkste dingen om te onthouden is de handleiding van Processing. Deze kun je in de taakbalk vinden onder help->refence voor een versie de werkt zonder internet. Maar ook de Processing website heeft een
<a href="http://www.processing.org/reference/">reference pagina</a> beschikbaar. De pagina legt uit hoe je (bijna) alles in Processing kan doen, inclusief voorbeeld code. Dit is dus een plek waar je veel tijd gaat doorbrengen.</p>

<h1>Functies</h1>

<p>
Misschien heb je al wel eens gehoord dat je met programmeren vaak te maken hebt met functies. Over dit principe gaan wij nu niet uitwijden, maar om te kunnen werken in Processing is het belangrijk er twee te kennen, te weten setup en draw. Met setup definieer je als het ware het canvas en een aantal uitgangspunten. Met draw vertel je de computer wat het uiteindelijk moet tekenen (vandaar de naam). Alles dat binnen de accolades wordt geplaatst hoort bij die functie.
</p>

<pre><code class="processing">
    void setup()
    {
        //Accolades zijn deze haakjes
        //Alles binnen deze haakjes hoort bij de functie setup
    }
    
    void draw(){
        //Accolades zijn deze haakjes
        //Alles binnen deze haakjes hoort bij de functie draw
    }
</code>
</pre>

<p>Een ander belangrijk verschil is is dat de functie setup maar een keer wordt uitgevoerd. Terwijl draw tot zestig keer per seconde herhaalt wordt. Maar daar komen we later op terug.</p>

<p class="instructor">
Bij draw even uitleggen dat hij hier het geheel echt tekent en iets over Frames per secondes etc.
</p>

<h1>Variabelen</h1>

<p>
Variabelen ken je misschien uit de wiskunde. Variabelen bestaan uit een naam waar je een waarde in kan stoppen. In ons geval zullen het vooral namen zijn van getallen. Zo kan een variabele hoogte bijvoorbeeld de ene keer staan voor 10 en de andere keer voor 20 (pixels). De naam van een variabele kan van alles zijn, maar het is altijd wel handig om ze een naam te geven die ergens op slaat.
</p>

<pre><code class="processing">
    int getal = 3; //Int staat voor interger, of een heel getal
    float kommaGetal = 3.5; //float is een komma getal
    String tekst = "Drie"; 
    // String is een tekst en schrijf je altijd met een hoofdletter
    boolean aanUit = true; 
    // boolean kun je zien als een lichtknopje en 
    // heeft twee waardes true of false.
</code>
</pre>

<p class="instructor">kort iets uitleggen over types: float, int, boolean en String. Wijd niet te diep uit over het verschil tussen float en int. Wij merkte dat het niet per se nodig is en het mensen alleen verward</p>

<p>Met variabelen kun je ook rekenen zoals:</p>

<pre><code class="processing">
    int getal1 = 3; 
    println("getal1: "+getal1);
    int getal2 = getal1 + 1;
    println("getal2: "+getal2);
    int getal3 = getal1 + getal2;
    println("getal3: "+getal3);
</code>
</pre>

<p>Let op dat processing hoofdletter gevoelig is dus dat \'getal1\' niet hetzelfde is als \'Getal1'. Verder zie je in de code hier boven het commando <a href="http://processing.org/reference/println_.html" target="_blank">println</a>, dit is handig om te zien wat de waarde is van een betpaalde variabele als je het programma draait.</p>

<h2>Aan de slag</h2>

<p>Omdat je het snelst leert doe het gewoon te doen, gaan we aan de slag! En dat doen we door deze simpele \'sketch\' (zo heet een programma in Processing). Aan te passen tot iets anders</p>

<p>Download de sketch <a href="https://github.com/hay/setup-processing/archive/master.zip" target="_blank">hier</a> en pak hem uit. Wij gaan aan de slag met het de simpele variant. De advanced versie is een mooi startpunt als je klaar met de workshop en dieper in programmeren wil duiken. Open de alife_simple map en dubbelklik op alife_simple.pde. Als je nu op de play knop drukt zie je iets wat lijkt op deze sketch hieronder.</p>

<div>
<iframe id="ifr" width="400" height="335" scrolling="no" style="background: url(http://studio.processingtogether.com/static/img/jun09/pad/connectingbar.gif) no-repeat center 60px;" src="http://studio.processingtogether.com/sp/pad/iframe/ro.9I8-YqBIz$mRg/rev.6?autostart=0">jekyll bug fix</iframe>
</div>
<div>

<p>Deze sketch is qua werking heel simpel. het zijn een aantal vierkanten die op het moment dat ze de rand van het scherm raken aan de andere kant weer verschijnen. Maar de sketch is zo ingericht dat er veel opties zijn om aan de sleutelen. Door dingen te proberen in andermans code leer je vaak heel veel, dus laten we in de code duiken om te zien wat we tegenkomen.</p>

<p class="instructor">Probeer niet alles uit te leggen in een keer, maar toon bij elke stap een beetje wat er op het scherm gebeurd.
</p>

<p>
Als eerste zie je veel regels beginnen met //. Deze regels zijn ook grijs gekleurd in tegenstelling tot de andere regels. Dit zijn namelijk zogenaamde comments. Regels die door de computer worden genegeerd en bedoelt zijn als hulpt middel voor programmeurs om de code van andere programmeurs te begrijpen. Je code voorzien van comments is ook een goed idee voor jezelf omdat je zo over 6 maanden oude code nog steeds begrijpt door je eigen aanwijzingen.
</p>

<p>Na een aantal regels met comments zien we dit blok met verschillende variabelen:</p>
<pre><code class="processing">
// Verander deze waardes voor grappige effecten
int numberOfCells = 50; // het aantal blokjes op het scherm
int cellMinimalSize = 20; // minimale grootte van een blokje 
int cellMaximumSize = 50; // maximale grootte van een blokje
float cellMinimalSpeed = 1; // minimale snelheid van een blokje
float cellMaximumSpeed = 3; // maximale snelheid van een blokje
boolean clearScreen = true; // maak het scherm leeg na elke tekenbeurt
boolean drawRectangles = true; // zet dit op false om cirkels te tekenen
boolean shakyCells = false; // als je dit op true zet krijgen de blokjes Parkinson
</code>
</pre>

<p>Dit soort blokken zie je heel veel in Processing sketches en dit zijn de plekken waar de fundering voor het geheel wordt gelegd. Je ziet bijvoorbeeld het aantal vierkantjes dat getekend gaat worden, of de maximale snelheid die blokjes mogen reizen. Het aan passen van deze variabelen heeft vaak direct effect op de werking.</p>

<p>Verander eens:</p>
<pre><code class="processing">
int numberOfCells = 50; // het aantal blokjes op het scherm
</code>
</pre>

<p>in</p>
<pre><code class="processing">
int numberOfCells = 20; // het aantal blokjes op het scherm
</code>
</pre>

<p>Als je de code nu afspeelt zie je dat het veel rustiger is op je canvas.</p>

<p>Omdat je de code zonder heel veel kennis van programmeren gaat veranderen is het handig om na elke verandering de code even af te spelen met de play knop of te zien of het nog werkt. Als her in plaats van een werkend programma er een foutmelding in het rood ziet, dan gaat er iets mis. Gelukkig kun je met ctrl+z altijd nog een stap terug</p>

<p>
Naast het vaak uitvoeren van je code is het opslaan onder verschillende namen ook een goed idee. Zo heb je op het laatst een leuk overzicht van je experimenten.</p>

<p>Verder kun je tijdelijk regels code ook veranderen in een comments om zo regels binnen het programma te houden zonder dat het programma ze uitvoert. Dit is vooral handig om variaties op bestaande code te testen zonder dat je de originele regels weggooid.
</p>

<pre><code class="processing">
   //int numberOfCells = 50; 
   int numberOfCells = 30; 
</code>
</pre>

<p>Verander nu een aantal getallen in dit blok en zet een aantal van de boolean variabelen van true naar false en andersom. Je zult zien dat je tot steeds hele andere plaatjes uit komt.</p>

<p>Dat je bij het veranderen van getallen komt tot andere resultaten, lijkt logisch. Maar hoe zit dat met die boolean varibelen. Hoe valt dat besluit bij programma's om iets wel of niet te doen als dingen true of false zijn.</p>

<p>Dat gebeurd in zogenaamde if-statements. Naast functies en variabelen zijn if-statement heel belangrijk. Een if-statement is eigenlijk niets anders dan zeggen als \'dit, dan dat\'. Ze zeggen niet eens wat er dan gebeurt, maar puur dat er iets gebeurt.</p>

<p>
Als we iets doorscrollen naar beneden in de code komen wij bijvoorbeeld het volgende stuk tegen.
</p>

<pre><code class="processing">
   if (drawRectangles == true) {
      // drawRectangles staat op true, teken vierkantjes
      rect(cell.x, cell.y, cell.size, cell.size);
    } else {
      // drawRectangles staat op false, teken cirkels
      ellipse(cell.x, cell.y, cell.size, cell.size);
    }
</code>
</pre>

<p>Hier zie je een if statement die reageert op de drawRectangles variabele die je bovenaan zag staan. Als deze op true staat dan tekent hij een vierkantje, te zien aan de functie rect(). Als dat niet zo is, dus als drawRectangles op false staat. Dan voert hij het blok code uit dat bij else staat, namelijk de functie ellipse(). Met het tekenen door middel van rect() en ellipse gaan we overigens de volgende les mee aan de slag.</p>

<p>
Naast dat if statements reageren op boolean variabelen met een betekenis van true of false. Kun je ook if statements allerlei vergelijkingen laten maken met getallen. Zoals je hieronder kan zien:
</p>

<pre><code class="processing">
int getal1 = 50;

//Als getal1 precies 50 is dan....
if(getal1 ==50){
    //Voert het deze code uit
    println("getal1 is gelijk aan 50");
}

//Als getal1 precies 50 is of groter dan 50
if(getal1 >=50){
    //Voert het deze code uit
    println("getal1 is groter dan of gelijk aan 50");
}

//Als getal1 groter is dan 50
if(getal1 >50){
    //Voert het deze code uit
    println("getal1 is groter dan 50");
}

//Als getal1 alles behalve 50 is dan....
if(getal1 !=50){
    //Voert het deze code uit
    println("getal1 is gelijk aan 50");
}

</code>
</pre>


<p>
Je bent nu  wat aan het spelen geweest met code, maar het lijnt niet zo mooi als hij de oorspronkelijk broncode. Code die mooi ingesprongen is leest beter doordat je in een oog opslag kan zien wat nog wel bij een bepaald deel van de code valt. Gelukkig helpt Processing je hier mee met de functie \'auto-format\' die automagisch je code goed doet inspringen. Druk op ctrl+t of cmnd+t op een Mac en je zult zien dat je code er meteen een stuk netter uitziet.
</p>

<h2>Huiswerk voor de volgende les</h2>

<p>
Huiswerk 1<br />
Speel vooral verder met de code, we zijn heel nieuwsgierig waar mensen allemaal op uitkomen. Kijk vooral in de <a href="http://processing.org/reference/" target="_blank">reference</a> als je dingen niet meer weet.
</p>

<p>
Huiswerk 2<br />
Probeer de Android SDK te installeren via deze <a href="http://wiki.processing.org/w/Android" target="_blank">pagina</a>. Ik zal de volgende keer eerder aanwezig zijn om mensen te helpen bij wie dit niet gelukt is.
</p>

<p>
Huiswerk 3 (optioneel)<br />
Kijk eens naar <a href="http://reas.com/compendium_lecture/" target="_blank">deze video</a>hier zie je Raes (een van de makers achter Processing) zijn Process serie uitleggen. Deze serie werken bestaan allemaal uit het generen van beelden door kleine elementen gedragsregels mee te geven. 
</p>
<p>
Het is niet heel spetterend vertelt. Maar het laat zien hoe je heel ingewikkeld werk kan opbreken in kleine beschrijfbare stappen. Deze manier van analyseren gaan we mee aan de slag in les 2 en 3.
</p>

<p class="instructor">
Nog even background aan stippen? Dit zit anders pas eind les drie en het geeft nu al een sterk verschillend resultaat. Misschien een mooi bruggetje naar les twee, waar dieper in wordt gegaan op Processing zelf.
</p>



<p class="instructor">
Naast het Casey Reas verhaal, zou het voor de studenten mooi zijn als ze alvast de Android SDK installeren voor les twee vanaf deze <a href="">pagina</a>.
</p>
</div>
<div class="instructor">
<h3>Tijdsplanning van deze les</h3>
1.10 0:00 - Welkom, video/ppt van je in de cursus gaan leren. <br />
1.15 0:10 - De planning van vandaag <br />
1.20 0:20 - Rondje langs de deelnemers <br />
1.30 0:30 - Leuke voorbeelden van processing kunst: wat kun je maken als je echt goeg bent? Toon: visuals, games (interactive), art, installations, tools.<br />
1.40 0:40 - LES -> Pak Alife script erbij<br />
1.50 0:41 - Basale uitleg over processing basics (canvas, de setup en draw functie, documentatie, auto format)<br />
1.50 0:47 - Basale uitleg over variabelen (niet ingaan op moeilijke zaken, gewoon dat het woorden zijn die veranderende nummertjes representeren)<br />
1.50 0:50 - Basale uitleg over if-statements aan de hand van de voorbeeldcode<br />
1:60 0:55 - Basale uitleg over loops aan de hand van de voorbeeldcode<br />
1.70 1:00 - AAN DE SLAG. Zet studenten naast elkaar zodat ze elkaar kunnen helpen.<br />
1.80 1:01 - Loop langs alle studenten om te kijken of ze op gang zijn<br />
1.90 1:10 - Rondje langs de studenten<br />
1.95 1:20 - Rondje langs de studenten<br />
1.100 1:30 - Klassikaal moment om even langs elkaar's werk te lopen. Leerlingen houden hun laptop even omhoog en vertellen wat ze aan het doen zijn.<br />
1.110 1:35 - Rondje langs de studenten. Zet op je eigen computer voor elke leerling een open processing sketch neer, zodat je daar straks hun code in kan pasten uit het internet.<br />
1.120 1.45 - Leerlingen pasten hun code online in de site (ter backup en als eindproduct van les 1).<br />
1.130 1:50 - Eindpresentatie. Bij grote groepen: probeer het op een groot scherm te tonen. Maar als dat niet lukt: op hun eigen laptops. Als het lukt: laat iemand (leerling) de presentaties opnemen met een smartphone of flipcam.<br />
1.140 2:00 - Einde. Vertel ze waar en wanneer de volgende les is, en wat het huiswerk is.<br />

1.160 - Huiswerk<br />
Android for Processing installeren (als dit niet lukt, kom les 2 eerder)
Kijk deze uitleg van Reas over hoe hij kunst maakt

</div>