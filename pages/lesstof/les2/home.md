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


<p>Laten we beginnen bij het begin en een vierkant tekenen op het scherm.</p>

<p class="instructor">Schrijf bij het uitleggen de code mee op een scherm.</p>
<p class="instructor">De invulling van veel van deze onderdelen is sterk afhankelijk van het publiek van je workshop. Als je er doorheen vliegt neem gerust de tijd om moeilijkere concepten uit te leggen zoals rectMode en ellipseMode. Als de klas al vol zit met met met Processing basiskennis kun je kijken naar push en popMatrix</p>

<p>In Processing zet je een vierkant met de functie rect, gevolgd door vier getallen. Om te beginnen willen we de plaats aangeven x en een y coordinaat [cartesisch systeem, (0,0) is linksboven ipv midden in beeld]. Vervolgens hebben we een breedte en een hoogte nodig.</p>

<img src="http://processing.org/tutorials/drawing/imgs/1.5.jpg" />

<p>Dus schrijft het onderstaande over en klik op play!</p>
<p class="instructor">Schrijf code weer mee.</p>

<pre>
<code>
//Dit gaan we vervangen met een sketchpad, zodat je het meteen kan runnen
void setup(){
	size(400,400);
	rect(100,50,20,20);
}
</code>
</pre>

<p>Probeer eens een vierkant te rekenen, maar dan op een andere plek of een andere vorm.Bijvoorbeeld rechts bovenin, of precies in het midden. Probeer een wat dingen uit en lees dan pas verder.</p>

<p class="instructor">Ga vragen stellen: hoe maak je de rechthoek breder, groter, op een andere plek, etc. Schenk daarbij ook aandacht aan de rechterhoek omdat veel studenten niet nadenken over het punt waarbij het tekenen begint. Als je tijd over hebt laat ook ellipse ziet en het verschil hoe beiden op het scherm gezet worden</p>

<h2>Flexibele code</h2>

<p>Je merkt dat echt in het midden tekenen een hoop rekenwerk vergt, je moet rekening houden met de breedte en de hoogte van het canvas en het scherm. Dat is lastig als je te maken hebt met een programmatje dat je later misschien op een andere grootte wil uit proberen. Dit kun je oplossen door gebruik te maken van variabelen, die we ook in de vorige les zagen.</p>

<pre>
<code>
//Dit gaan we vervangen met een sketchpad, zodat je het meteen kan runnen
void setup(){
	size(400,400);
	rect((width/2)-10,(height/2)-10,20,20);
}
</code>
</pre>

<p>De variabelen <a href="http://processing.org/reference/width.html" target="_blank">width</a> en <a href="http://processing.org/reference/height.html" target="_blank">height</a> geven altijd de breedte en de hoogte van het scherm in pixels terug. Als we deze door twee delen komen we precies in het midden uit. Omdat de coordinaten die je op geeft van een vierkant overeenkomen met de linker boven hoek van een vierkant, moet je nog de helft van de opgegeven breedte en hoogte van de coordinaten aftrekken om echt in het midden uit te komen.</p>

<p>Hoewel dit al sneller is, is het nog steeds niet heel handig omdat elke keer als je een vierkant wil laten verschillen in grootte je op meerdere plekken de code moet aanpassen. Niet alleen bij de breedte en hoogte van rect, maar ook in de coordinaten. Dit los je op door dit ook te koppelen aan variabelen, zoals we hier onder laten zien.</p>

<pre>
<code>
//Dit gaan we vervangen met een sketchpad, zodat je het meteen kan runnen
int rectWidth = 20;
int rectHeight = 20;

void setup(){
	size(400,400);
    //Zoals je ziet wordt het rectangle commando heel cryptisch, maar nu het je een enorm flexibele
    //manier om vierkanten te tekenen.
	rect((width/2)-(rectWidth/2),(height/2)-(rectHeight/2),rectWidth,rectHeight);
}
</code>
</pre>

<p>Door alles aan het vierkant in variabele te vangen krijg je een vierkant dat zich snel kan aanpassen aan wat je nodig hebt. Maar er zit wel een nadeel aan.</p>

<p>Zoals je ziet worden regels code, ondanks dat ze heel flexibel worden, op deze manier moeilijker om te lezen. Daarom is het belangrijk dat je je variabelen heldere namen geeft om het begrijpelijk te houden. Verder is het een hele gangbare manier om te beginnen met snelle code en deze gaande weg code flexibeler te maken op het moment dat je het nodig hebt. Zo houdt je het voor jezelf overzichtelijk.</p>

<p>Een vierkant is een ding, maar hij is een beetje saai met een zwarte randje en een witte vulling. Dus laten we nu eens kijken hoe kleur werkt in Processing. Mocht je trouwens andere vormen willen tekenen check de 2d primitives in de <a href="http://processing.org/reference/" target="_blank">reference</a></p>


<h2>Kleuren, fill en stroke</h2>

<p>Processing werkt normaal met kleuren in een RGB kleurstelsel, wat staat voor Red Green Blue. Een kleur bestaat hierin dan ook altijd uit drie waarden, waarbij het minimum 0 en het maximum 255 is. Zo krijg je 256 tot de derde, oftewel 16.777.216 variaties. Het RGB model van kleurmening is een zogenaamde additieve kleurmening waarbij 255,255,255 de kleur wit is en 0,0,0 zwart.</p>

<img src="http://processing.org/tutorials/color/imgs/rgb.jpg" />

<p></p>

<pre>
<code>
void setup(){
  size(310,80);
  noLoop();
}

void draw(){
    
  //Eerste vierkant met een grijze omlijning en rode vulling 
    stroke(122,122,122);
    fill(255,0,0);
    rect(20,20,40,40);
    
    //Tweede vierkant met een zwarte omlijning en een bruinige vulling
    stroke(0,0,0);
    fill(122,255,20);
    rect(100,20,40,40);
    
      //Derde vierkant zonder omlijning en met een groene vulling
    noStroke();
    fill(0,0,255);
    rect(180,20,40,40);
    
    //Vierde vierkant zonder vulling en een dikkere blauwe lijn.
    strokeWeight(3);
    stroke(0,0,255);
    noFill();
    rect(260,20,40,40);
}
</code>
</pre>

<p>Nu weten we hoe we vierkanten tekenen en deze voorzien van een kleurtje. Maar wat als we 100 vierkanten willen tekenen. Moeten ze dan allemaal vol uit worden geschreven in de code?</p>

<h2>For loops</h2>

<p>Gelukkig zijn computers zelfs heel goed in herhaling en de bekenste daarvan is de for loop. Voor loops zijn herhalingen die de computer uitvoert zolang er niet voldaan wordt aan een bepaalde voorwaarde.</p>

<p>Een for loop ziet er als volgt uit</p>

<pre>
<code>
   
   for(int i=0;i&lt;5;i= i+1){
        //Hier staat het deel van de code dat herhaalt moet worden
    }
    
</code>
</pre>

<p>Bij een for loop maakt je de eerst een variable aan, die in de meeste programmeurs \'i\' noemen. Deze variabele gaat dienen als een tellertje,
bij de volgende stap zeg je hoe vaak de for loop herhaalt moet worden, in dit geval zeg je: zolang i kleiner is dan 5, herhaal je deze code. Omdat i begint bij 0 wordt deze code 5 keer herhaalt waarbij i een waarde heeft oplopende van 0 tot en met 4.
Als laatste geef je aan de elke keer als de code tussen de accolades is uitgevoerd i toeneemt met 1. </p>

<p>Omdat i een variabele is kun je hem gebruiken om mee te rekenen in je code op deze manier kun je keurig vijf vierkanten op een rij tekenen.</p>

<pre>
<code>

for(int i=0;i&lt;5;i+=1){
    rect(20*i,0,20,20);
}

</code>
</pre>

<p>
Hierdoor hoef je niet meer heel veel kubussen te tekenen! Maar er komt wel altijd precies hetzelfde uit. Het is natuurlijk nog veel leuker als er voor onszelf wat meer een verrassingselement zit in wat de computer uiteindelijk op het scherm laat zien. Om daartoe te komen ga ik er wat willekeur bij betrekken.
</p>

<h2>Willekeurige getallen</h2>

<p>
De achterliggende techniek is vrij complex en gaan we in deze cursus niet behandelen, maar wij kunnen er wel gebruik van maken dankzij een handige functie van Processing, genaamd random. Wat deze functie doet is een kommagetal, dus een float, tussen een opgegeven onder en bovengrens teruggeven. Dus bijvoorbeeld random(20, 50) geeft een getal tussen de 20 en de 50 terug, maar wel altijd een komma getal zoals 23.24284240. Als je liever een geheel getal wilt hebben kun je het afronden met round(). 
</p>

<div class="instructor">

<pre>
<code>
    float randomNumber = random(1, 100);
    int roundedNumber = round( random(1, 100) );
</code>
</pre>
</div>

<p class="instructor">Vervang de waarden van de variabelen in je vierkantjes-app door een random-functie en laat het resultaat zien door de applicatie meerdere keren te renderen.</p>

<p>Een random kun je gebruiken om delen van je code onvoorspelbaar te maken, bijvoorbeeld door de plaatsing van de vierkantjes of de kleuren die het vierkantje krijgt. Hieronder tekenen we bijvoorbeeld non-stop dezelfde vierkantjes op verschillende plekken.</p>

<pre>
<code>
    void setup(){
  size(400,400);
}

void draw(){
    //Vierde vierkant zonder vulling en een dikkere blauwe lijn.
    strokeWeight(3);
    stroke(0,0,255);
    noFill();
    rect(random(0,width),random(0,height),20,20);
}
</code>
</pre>

<p class="instructor">Laat studenten lekker pielen en vertel ondertussen door.</p>

<p>Een goede manier om snel iets interessants te maken is een balans te vinden tussen duidelijk gedefinieerde instructies en random-variabelen. Op deze manier kun je iets maken dat elke keer (net iets) anders is, maar wel elke keer aan je bedoelingen voldoet.</p>

<p>Dat laatste is, en dat is niet toevallig, precies wat we nu gaan ondernemen met de verschillende elementen die we vandaag geleerd hebben.</p>

<h2>1025 Farben</h2>

<img src="http://www.christies.com/lotfinderimages/d52216/d5221605l.jpg" />

<p>Dit is een foto van het schilderij 1025 Farben van Gerhard Richter. Wat wij gaat proberen is een digitale interpretatie te maken van dit werk, waarbij een balans gaan zoeken tussen regels en willekeur.</p>

<p>Om tot een dergelijke balans te kunnen komen moeten wij eerst weten wat de regels zouden kunnen zijn en daarvoor zullen wij het werk moeten afbreken of beschrijven in onderdelen. Wie zou een aantal regels kunnen benoemen die dit schilderij beschrijven?</p>


<p class="instructor">Laat de cursisten dingen roepen. Houdt er rekening mee dat ze dingen gaan zeggen waar je zelf nog niet aan had gedacht.</p>

<p>
We hebben te maken met:
<ul>
<li>verticale en horizontale herhaling; een raster van rechthoeken;</li>
<li>rechthoeken die telkens even groot zijn;</li>
<li>witruimte tussen de rechthoeken, of witte lijnen om de rechthoeken heen.</li>
<li>verschillende kleuren</li>
</ul>
</p>

<h2>Stap 1: Herhaling</h2>
<p>Eerder hebben we al herhaling gebruikt om meerdere vierkantjes te tekenen. Maar dat beperkte zich tot vijf vierkantjes op een rij. Wat als we wilde proberen om een hele lijn aan vierkantjes te tekenen, die flexibel is zoals het voorbeeld aan het begin van deze les waar we een vierkantje in het midden probeerde te tekenen?</p>

<p>We pakken dat op de volgende manier aan. We willen bovenaan aangeven hoeveel blokjes we op een rij willen hebben. Dit is veel praktische dan te zeggen hoe breed een blokje is om vervolgens te moeten uitrekenen of er wel 5 blokjes op een rij passen. Vervolgens laten we Processing zelf uitrekenen hoe breed een blokje moet zijn.</p>

<pre>
<code>


float amountOfSquaresWidth =12.0;
float squareWidth;

void setup(){
  size(400,400);
  squareWidth = width/amountOfSquaresWidth;
}

void draw(){
    for(int i=0;i&lt;amountOfSquaresWidth;i=i+1){
      rect(0+(i*squareWidth),0,squareWidth,20);
     }
}

</code>
</pre>

<p>Door Processing het rekenwerk te laten doen, is dit scriptje meteen heel geschikt geworden om snel een aantal blokjes op een rij te laten tekenen die precies past op het scherm. Maar wat als we nou niet willen stoppen bij een rij, maar het hele scherm willen vullen?</p>

<p>Dit doen we door een for loop in een for loop te plaatsen. Dit lijkt heel raar maar eigenlijk is het heel logisch. Je laat de computer eerst een horizontale rij vullen en als hij klaar is laat je hem het opnieuw doen maar een rij lager. Op die manier vul je het scherm. Net als bij het vorige voorbeeld laten we Processing berekenen hoe hoog een blokje moet worden.</p>

<pre>
<code>

float amountOfSquaresWidth =12.0;
float squareWidth;

float amountOfSquaresHeight =12.0;
float squareHeight;

void setup() {
  size(400, 400);
  squareWidth = width/amountOfSquaresWidth;
  squareHeight = height/amountOfSquaresHeight;
}

void draw() {
  //Let op hoe ik i heb verandert is x en y
  for (int y=0;y&lt;amountOfSquaresHeight;y=y+1) {  
    for (int x=0;x&lt;amountOfSquaresWidth;x=x+1) {
      rect(0+(x*squareWidth), 0+(y*squareHeight), squareWidth, squareHeight);
    }
  }
}


</code>
</pre>

<p>Iets wat veel mensen vergeten als je for loops in for loops plaatsen is dat de variabele i niet twee keer kan voor komen. Daarom is het belangrijk dat je in dit geval de naam i aanpast in twee verschillende namen. Ik heb hier gekozen voor x en y, waarbij x de herhalingen doet op de horizontale as en y op de verticale as.</p>

<h2> Stap 2: Kleuren</h2>
<p>Het raster aan vakjes is er klaar voor. Voor de kleuren pakken we het iets anders aan en laten we dat lekker over aan de computer door de kleuren te laten bepalen met de random functie. Zoals je kan herinneren lopen kleuren van 0 tot 255 dus kunnen we een willekeurige kleur maken door de volgende code</p>

<pre>
<code>

fill(random(0,255),random(0,255),random(0,225));

</code>
</pre>

<p>Als we dit toevoegen aan het script ziet dat er als volgt uit</p>

<pre>
<code>

float amountOfSquaresWidth =12.0;
float squareWidth;

float amountOfSquaresHeight =12.0;
float squareHeight;

void setup() {
  size(400, 400);
  squareWidth = width/amountOfSquaresWidth;
  squareHeight = height/amountOfSquaresHeight;
}

void draw() {
  //Let op hoe ik i heb verandert is x en y
  for (int y=0;y&lt;amountOfSquaresHeight;y=y+1) {  
    for (int x=0;x&lt;amountOfSquaresWidth;x=x+1) {
      fill(random(0,255),random(0,255),random(0,225));
      stroke(255);
      rect(0+(x*squareWidth), 0+(y*squareHeight), squareWidth, squareHeight);
    }
  }
}


</code>
</pre>

<p>Mocht je dat nou heel onrustig vinden kun je in de setup, de functie <a href="http://processing.org/reference/noLoop_.html" target="_blank">noLoop()</a> zetten. Daardoor wordt het deel in draw niet herhaald en wordt er elke keer dat je het script start er keurig een 1025 Farben werk gemaakt. Ook zie je dat we een witte lijn om de vakjes hebben heen gemaakt, door maar een waarde op te geven bij kleuren maak je grijs waardes.</p>

<h2> Stap 3: Bonus</h2>
<p>Als laatste nemen we alvast een voorproefje op volgende week en gaan we kijken naar hoe we de muis kunnen gebruiken om eindeloos nieuwe 1025 farben werken te maken. Haal de noLoop() uit de setup functie weg en bekijk de <a href="http://processing.org/reference/mousePressed.html" target="_blank">mousePressed</a> variabele op de Reference pagina.</p>
<p>als het deel dat de blokken tekenen in de mousePressed statement plaatsen. Worden er alleen nieuwe kleuren gemaakt op het moment dat we de muis indrukken. Hierdoor hoeven we niet elke keer het script opnieuw op te starten op het moment dat we een nieuwe versie van ons werk willen zien.</p>

<pre>
<code>

    float amountOfSquaresWidth =12.0;
    float squareWidth;
    
    float amountOfSquaresHeight =12.0;
    float squareHeight;
    
    void setup() {
      size(400, 400);
      squareWidth = width/amountOfSquaresWidth;
      squareHeight = height/amountOfSquaresHeight;
    }
    
    void draw() {
      if (mousePressed== true) {
        //Let op hoe ik i heb verandert is x en y
        for (int y=0;y&lt;amountOfSquaresHeight;y=y+1) {  
          for (int x=0;x&lt;amountOfSquaresWidth;x=x+1) {
            fill(random(0, 255), random(0, 255), random(0, 225));
            stroke(255);
            rect(0+(x*squareWidth), 0+(y*squareHeight), squareWidth, squareHeight);
          }
        }
      }
    }


</code>
</pre>

<h2>Huiswerk</h2>
<p>Zoals gezegd gaan we de volgende week aan de slag met de muis om interactieve werken te produceren! Maar eerst laten wat huiswerk bekijken.</p>

<p>
Huiswerk:<br />
Kies een van de volgende werken en probeer het om te zetten naar code.<br />
<ul>
<li><a href="http://en.wikipedia.org/wiki/File:Theo_van_Doesburg_Composition_VII_(the_three_graces).jpg
" target="_blank">Theo van Doesburg Compositie 7</a></li>
<li><a href="http://crowquills.com/Wallpaper-1" target="_blank">Andy Gilmore - Wallpaper</a></li>
<li><a href="http://www.damienhirst.com/argininosuccinic-acid" target="_blank">Damien Hirst - Argininosuccinic Acid </a></li>
</ul>
</p>
