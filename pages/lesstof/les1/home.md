---
layout: page
title: "Home"
description: ""
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

<p>De meeste van deze voorbeelden zijn voor ons als workshop schrijvers ook enorm intimiderend qua complexiteit. Maar we raden je aan toch even te kijken gewoon om te zien wat er mogelijk is met Processing.</p>

<p class="instructor">Toon voorbeelden van kunst, toepassingen en computerspellen waarbij beeld door code evident is. Dit is ook een goed moment om eigen Processing werk te tonen.</p>


<p>Omdat Processing ook gebouwd is vanuit een educatief standpunt, heeft allemaal handige tools, een goede online documentatie en veel expert die online mensen verder helpen met hun vragen.
</p>

<p class="instructor">Laat de website van Processing zien; het downloaden; het installeren; het openen en de documentatie. Bespreek vooral hoe een pagina in de reference is opgebouwd, dit bleek een waardevolle toevoeging.</p>



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
De uitgangspunten in setup die ik zojuist noemde heten voortaan variabelen. Dat zijn--kort gezegd--namen voor dingen. In ons geval zullen het vooral namen zijn van getallen. Zo kan een variabele hoogte bijvoorbeeld de ene keer staan voor 10 en de andere keer voor 20 (pixels). De naam van een variabele kan van alles zijn, maar het is altijd wel handig om ze een naam te geven die ergens op slaat.
</p>

<pre><code class="processing">
    int getal = 3; //Int staat voor interger, of een heel getal
    float kommaGetal = 3.5; //float is een komma getal
    String tekst = "Drie"; // String is een tekst, let op dat je String altijd met een hoofdletter schrijft
    boolean aanUit = true; // boolean kun je zien als een lichtknopje en heet twee waardes true of false.
</code>
</pre>

<p class="instructor">kort iets uitleggen over types: float, int, boolean en String. Wijd niet te diep uit over het verschil tussen float en int. Wij merkte dat het niet per se nodig is en het mensen alleen verward</p>

<p>Insert korte inleiding van Hay hier over wat dit script is en doet.
Vanaf hier kan het meer naar achteren, want hier gaan we alvast licht tweaken met het script
</p>

<p class="instructor">Type in Processing de naam van een variabele en verander de waarde.</p>

<p>Na functies en variabelen zijn condities de grote spelers waar we mee e maken krijgen. Een conditie is eigenlijk niets anders dan zeggen als dit, dan dat. Ze zeggen niet eens wat er dan gebeurt, maar puur dat er iets gebeurt. De condities die dit het beste illustreren zijn if en else.</p>

<p>
Dit in het script van Hay laten zien bij de verschillende boolean if statments
Misschien ook goed om een vergelijking tussen getallen te laten zien naar alleen maar booleans?
Is hier nog ruimte voor studenten om te tweaken? Zou mooi zijn
</p>

<p class="instructor">
Illustreer op het scherm het gebruik van if en else.
</p>



<p>
Er zijn nog andere condities, maar die gaan we niet allemaal gebruiken. Eentje die wel superhandig is voor wat wij willen bereiken is de for-conditie. Dit zegt eigenlijk \'doe dit zoveel keer\'.
</p>

<p>
Hierbij komt gelijk de kracht van programmeren om de hoek kijken. Tot nu toe hebben we een paar dingen behandeld die met een computer eigenlijk net iets omslachtiger zijn dan zonder. Op het moment dat we een bepaalde instructie echter 100.000 keer willen uitvoeren, is dat doormiddel van programmatuur ineens aanzienlijk makkelijker.
</p>


<p>
Net zoals je graag een boek schrijft zonder spelfouten en met interpunctie is het handig om je code ook netjes te schrijven zodat je het over zes maanden nog steeds snapt. Gelukkig helpt Processing je hier mee met de functie \'auto-format\'.
</p>

<p class="instructor">
Illustreer het gebruik van een for conditie, bijvoorbeeld in combinatie met een println die \"Hello world\" print.
</p>


<p>Als je fouten wilt opsporen kun je dat doen met "println"</p>

<p class="instructor">
 Toon voorbeeld van hoe je telt van 1 tot 100 met prinln 
</p>

<p>
Nog even background aan stippen? Dit zit anders pas eind les drie en het geeft nu al een sterk verschillend resultaat. Misschien een mooi bruggetje naar les twee, waar dieper in wordt gegaan op Processing zelf.
</p>

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