---
layout: page
title: "Home"
description: ""
---
{% include JB/setup %}

<p class="instructor">Zorg dat je er dit keer wat eerder bent voor de mensen die vastgelopen zijn met het installeren van de Android SDK</p>

<p>Hallo en welkom bij les 2 van de cursus Apps om in te lijsten.</p>

<p class="instructor">Check of iedereen echt zijn tablet werkend heeft</p>

<p>Vorige keer hebben wij een introductie gehad in het maken van beeld door code. Wij hebben een aantal basisregels van programmeren behandeld en gewerkt met Processing. Vandaag nemen we een stapje terug beginnen we bij nul en kijken we naar de volgende basis stappen:</p>
<ul>
<li>loops</li>
<li>kleuren</li>
<li>vierkantjes (of andere rechthoeken) en cirkels</li>
<li>if en else</li>
</ul>

<p class="instructor">Laten wij nu eerst even kijken naar wat iedereen naar aanleiding van vorige week gemaakt heeft.
</p>


Laten we beginnen bij het begin en een vierkant tekenen op het scherm.

<p class="instructor">Schrijf bij het uitleggen de code mee op een scherm.</p>
<p class="instructor">De invulling van veel van deze onderdelen is sterk afhankelijk van het publiek van je workshop. Als je er doorheen vliegt neem gerust de tijd om moeilijkere concepten uit te leggen zoals rectMode en ellipseMode. Als de klas al vol zit met met met Processing basiskennis kun je kijken naar push en popMatrix</p>

<p>In Processing zet je een vierkant met de functie rect, gevolgd door vier getallen. Om te beginnen willen we de plaats aangeven x en een y coordinaat [cartesisch systeem, (0,0) is linksboven ipv midden in beeld]. Vervolgens hebben we een breedte en een hoogte nodig.</p>

<p>VOEG HIER EEN AFBEELDING VAN EEN CARTESISCH COORDINATEN STESEL TOE</p>

<p>Dus schrijft het onderstaande over en klik op play!</p>
<p class="instructor">Schrijf code weer mee.</p>

<pre>
<code>
void setup(){
	size(400,400);
	rect(100,50,20,20);
}
</code>
</pre>

<p>Probeer eens een vierkant te rekenen, maar dan op een andere plek of een andere vorm.</p>

<p class="instructor">Ga vragen stellen: hoe maak je de rechthoek breder, groter, op een andere plek, etc. Schenk daarbij ook aandacht aan de rechterhoek omdat veel studenten niet nadenken over het punt waarbij het tekenen begint. Als je tijd over hebt laat ook ellipse ziet en het verschil hoe beiden op het scherm gezet worden</p>

<p>Een vierkant is een ding, maar hij is een beetje saai met een zwarte randje en een witte vulling. Dus laten we nu eens kijken hoe kleur werkt in Processing. Mocht je trouwens andere vormen willen tekenen check de 2d primitives in de <a href="http://processing.org/reference/" target="_blank">reference</a></p>

<p>Kleuren definieren wij gedurende deze cursus in RGB, wat staat voor Red Green Blue. Een kleur bestaat hierin dan ook altijd uit drie waarden, waarbij het minimum 0 en het maximum 255 is. Zo krijg je 256 tot de derde, oftewel 16.777.216 variaties. Het RGB model van kleurmening is een zogenaamde additieve kleurmening waarbij 255,255,255 de kleur wit is en 0,0,0 zwart.</p>

<p>VOEG HIER ADDITIVE KLEURMENING MODEL TOE</p>

<pre>
<code>
void setup(){}

void draw(){
    //Eerste vierkant met een grijze omlijning en 
    fill(122,255,20);
    stroke(122,122,122);
    
    //Tweede vierkant met een zwarte omlijning en een bruinige vulling
    rect(100,50,40);
    stroke(0,0,0);
    fill(122,255,20);
    rect(100,50,40,40);
}
</code>
</pre>

<p>Nu weten we hoe we vierkanten tekenen en deze voorzien van een kleurtje. Maar wat als we 100 vierkanten willen tekenen. Moeten ze dan allemaal vol uit worden geschreven in de code?</p>

<p>Gelukkig zijn computers zelfs heel goed in dingen die mensen saai vinden en is daar iets op gevonden namelijk de for loop. Voor loops zijn herhalingen die de computer uitvoert zolang er niet voldaan wordt aan een bepaalde voorwaarde.</p>

<p>Een for loop ziet er als volgt uit</p>

<pre>
<code>
   <![CDATA[
   for(int i=0;i<5;i+=1){
        //Hier staat het deel van de code dat herhaalt moet worden
    }
    ]]>
</code>
</pre>

<p>Bij een for loop maakt je de eerst een variable aan die \'i\' heet. Deze variabele gaat dienen als een tellertje,
bij de volgende stap zeg je hoe vaak de for loop herhaalt moet worden, in dit geval zeg je: zoals i kleiner is dan 5, herhaal je deze code. Omdat i begint bij 0 wordt deze code 5 keer herhaalt waarbij i een waarde heeft oplopende van 0 tot en met 4.
Als laatste geef je aan de elke keer als de code tussen de accolades is uitgevoerd i toeneemt met 1. </p>

<p>Omdat i een variabele is kun je hem gebruiken om mee te rekenen in je code op deze manier kun je keurig vijf vierkanten op een rij tekenen.</p>

<pre>
<code>
<![CDATA[
for(int i=0;i<5;i+=1){
    rect(20*i,0,20,20);
}
]]>
</code>
</pre>

<p>
Hierdoor hoef je niet meer heel veel kubussen te tekenen, maar er komt wel altijd precies hetzelfde uit. Het is natuurlijk nog veel leuker als er voor onszelf wat meer een verrassingselement zit in wat de computer uiteindelijk op het scherm laat zien. Om daartoe te komen ga ik er wat willekeur bij betrekken.
</p>

<p>
De achterliggende techniek is vrij complex en gaan we in deze cursus niet behandelen, maar wij kunnen er wel gebruik van maken dankzij een handige functie van Processing, genaamd random. Wat deze doet is een (rationeel) getal \'teruggeven\' tussen twee getallen. Dus bijvoorbeeld random(20, 50) geeft een getal tussen de 20 en de 50, maar wel rationeel (23.24284240). Als je liever een geheel getal wilt hebben kun je het afronden met round(). 
</p>

<div class="instructor">
<p>Leg dit als volgt uit:</p>
<pre>
<code>
    <![CDATA[
    float randomNumber = random(1, 100);
    int roundedNumber = round( random(1, 100) );
    ]]>
</code>
</pre>
</div>

<p class="instructor">Vervang de waarden van de variabelen in je vierkantjes-app door een random-functie en laat het resultaat zien door de applicatie meerdere keren te renderen.</p>


<p>Een random kun je gebruiken om delen van je code onvoorspelbaar te maken, bijvoorbeeld door de plaatsing van de vierkantjes of de kleuren die het vierkantje krijgt.</p>

<p class="instructor">Onderstaande heb ik toegevoegd als extra, sla dit gerust in de les over.</p>

<p>Random is overigens niet de enige manier om willekeurige getallen terug te krijgen. Mocht je meer willen weten over deze methode check de extra lesstof over de verschillende manieren van random.</p>

<p class="instructor">Laat studenten lekker pielen en vertel ondertussen door.</p>

<p>Een goede manier om snel iets interessants te maken is een balans te vinden tussen duidelijk gedefinieerde instructies en random-variabelen. Op deze manier kun je iets maken dat elke keer (net iets) anders is, maar wel elke keer aan je bedoelingen voldoet.</p>

<p>Dat laatste is, en dat is niet toevallig, precies wat we nu gaan ondernemen met de verschillende elementen die we vandaag geleerd hebben.</p>

<p>FOTO INVOEGEN VAN 1025 FARBEN</p>

<p>Dit is een foto van het schilderij 1025 Farben van Gerhard Richter. Wat wij gaat proberen is een digitale interpretatie te maken van dit werk, waarbij een balans gaan zoeken tussen regels en willekeur.</p>

<p>Om tot een dergelijke balans te kunnen komen moeten wij eerst weten wat de regels zouden kunnen zijn en daarvoor zullen wij het werk moeten afbreken of beschrijven in onderdelen. Wie zou een aantal regels kunnen benoemen die dit schilderij beschrijven?</p>


<p class="instructor">Laat de cursisten dingen roepen. Houdt er rekening mee dat ze dingen gaan zeggen waar je zelf nog niet aan had gedacht.</p>

<p>
We hebben te maken met:
<ul>
<li>verticale en horizontale herhaling; als het ware een raster van rechthoeken;</li>
<li>rechthoeken die telkens even groot zijn;</li>
<li>witruimte tussen de rechthoeken</li>
<li>verschillende kleuren</li>
<li>precies passend op het canvas.</li>
</ul>
</p>


