---
layout: page
title: "Home"
description: ""
---
{% include JB/setup %}

<p class="instructor">Deze les bestaat voor een groot deel uit het behandelen van het gemaakte huiswerk. Maar ik merk dat het laatste deel ook veel tijd in beslag neemt, dus houdt de tijd strak in de gaten.</p>

<p>Het is alweer tijd voor les 3 van apps om in te lijsten. Deze week gaan we kijken naar de mogelijkheden van de muis. </p>

<p>De vorige keer hebben we gekeken naar if-statements, kleurgebruik, for-loops en random. Deze week bouwen we voort op deze elementen maar introduceren we daarbij interactiviteit met een gebruiker.</p>

<p>Interactiviteit is iets wat moeilijk te bereiken is met andere creatieve media, dus leren hoe je op een goede manier een respons kan krijgen uit een gebruiker en hoe zij op een boeiende manier kunnen spelen met je werk is iets wat het bestuderen waard is.
</p>

<p>De makkelijkste vorm van interactiviteit is de muis, omdat iedereen weet hoe een muis werkt. Op Android tablets geld een aanraking ook meteen als muis, dus dat is een mooie bonus.</p>

<p>
De muis gebruiken in Processing is makkelijk, zo is de positie van de muis op te vragen door middel van <a href="http://processing.org/reference/mouseX.html" target="_blank">mouseX</a> en <a href="http://processing.org/reference/mouseY.html" target="_blank">mouseY</a>.
</p>

<pre>
<code>
void setup(){
  size(300,300);
}

void draw(){
    background(0);
    ellipse(mouseX,mouseY,20,20);  
}
</code>
</pre>


<p>Zoals je ziet volgt de cirkel nu keurig de muis. Dit is het meest simpele voorbeeld dat je kan maken met mouseX en mouseY dus laten we het uitbouwen tot een klein tekenprogrammatje.</p>

<h2>Een tekenprogrammatje</h2>

<p>Voor een tekenprogramma kun je, zoals we in de vorige les lieten zien, de background uit de vorige code weghalen. Op die manier worden de cirkels niet van het scherm gehaald en ontstaat er een slinger van cirkels.</p>

<pre>
<code>
void setup(){
  size(300,300);
}

void draw(){
    background(0);
    ellipse(mouseX,mouseY,20,20);  
}
</code>
</pre>

<p>
Nou is een cirkel met slingers best kunstig. Maar wat als we wat meer een traditionele lijn zouden willen tekenen? Processing heeft een <a href="http://processing.org/reference/line_.html" target="_blank">line</a> functie maar het probleem is dat je een begin en eindpunt voor de lijn nodig hebt.
</p>


<p>
Dus hoe weet je waar je muis de vorige frame was? mouseX en mouseY geven alleen aan waar de muis op dit moment uithangt. Gelukkig heeft Processing ook variabelen waar de muis de vorige frame uithing namelijk <a href="http://processing.org/reference/pmouseX.html" target="_blank">pmouseX</a> en <a href="http://processing.org/reference/pmouseY.html" target="_blank">pmouseY</a>. Zo kunnen we een programma maken dat lijnen kan tekenen.
</p>

<pre>
<code>
void setup(){
  size(300,300);
  background(0);
}

void draw(){
    stroke(255);
    line(pmouseX, pmouseY, mouseX, mouseY);
}
</code>
</pre>

<h2>Muiskliks en spelen met variabelen</h2>

<p>
Dus we weten dat we iets kunnen doen met de positie van de muis, maar met een muis kun je ook klikken. Dus hoe doe je daar iets mee?
</p>

<p>
Als je kijkt in de Processing <a href="http://processing.org/reference/" target="_blank">reference</a> zie je onder input heel wat opties met de muis. Daar zitten ook verschillende manieren in om het klikken van de muis te gebruiken, maar wij richten ons op <a href="http://processing.org/reference/mousePressed.html" target="_blank">mousePressed</a>.
</p>


<p>MousePressed is net als mouseX en mouseY een variabele, maar in plaats van een getal is mousePressed een boolean. Een boolean is een variabele die true of false is, net zoiets als een lichtknopje dat aan of uit kan. Door een if statement te gebruiken kun je acties koppelen aan een muisklik.</p>

<pre>
<code>
void setup(){
  size(300,300);
  
}

void draw(){
  if (mousePressed == true) {
    println("de muis wordt ingedrukt!");
  }
}
</code>
</pre>

<p>Op deze manier zou je het tekenprogramma kunnen voorzien van een mogelijkheid om het scherm leeg te maken.</p>

<pre>
<code>
void setup() {
  size(300, 300);
  background(0);
}

void draw() {
  if (mousePressed == true) {
    background(0);
  }

  stroke(255);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

</code>
</pre>

<p>Wees niet te verlegen om de variabelen van de muis voor onlogische dingen te gebruiken. Dit leidt vaak tot interessante resultaten. Bijvoorbeeld als je de kleuren van je lijn koppelt aan de positie van de muis.</p>


<pre>
<code>
void setup() {
  size(300, 300);
  background(0);
  strokeWeight(4);
}

void draw() {
  if (mousePressed == true) {
    background(0);
  }

  stroke(mouseX,mouseX,mouseY);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
</code>
</pre>

<h2>Het reproduceren van een interactief werk</h2>

<p>
Nu dat we een idee hebben van de basis, laten we net als vorige week kijken naar een bestaand kunstwerk en dat reproduceren. Dit keer is dat <a href="http://primitives.acjs.net/" target="_blank">Primitives</a> van Alexander Christiaan Jakobs.
</p>

<img src="http://setuputrecht.github.io/appsomintelijsten/assets/img/primitives.jpg"/>

<p>
Net als vorige keer breken we het werk eerst af in simpele elementen en stappen om te zien wat het werkt nou eigenlijk doet.
</p>

<ul>
<li>verschillende vormen</li>
<li>verschillende kleuren</li>
<li>vormen geplaatst in een raster</li>
<li>Als je met de muis beweegt over een vorm verandert het</li>
</ul>


<p class="instructor"> Ik kan me voorstellen dat bij een minder ervaren groep je niet te veel tijd wil besteden aan het tekenen van de verschillende vormen. Maak het werk gerust met minder vormen of verspreid die code alvast onder de studenten.</p>

<p>Zoals je ziet zijn er een aantal delen hetzelfde als bij 1025 Farben. Je hebt te maken met een raster en willekeurige kleuren. Dus dit zijn onderdelen die we gedeeltelijk kunnen over nemen.</p>



<h2>Het berekenen van je muis positie</h2>

<p>Het moeilijkste aan dit kunstwerk is het bekijken wanneer er een nieuw vakje op het scherm getekend moet worden, dus daar gaan we mee beginnen. Dit vereist enige denkwerk om zo goed mogelijk te doen.</p>

<p>De raster waarin de vormen getekend worden zijn allemaal vierkant van vorm, laten we in onze reproductie zeggen dat het 30 bij 30 pixels is. Maar hoe controleer je nou op welk vierkant je muis uithangt? Door mouseX en mouseY weet je alleen de pixel waarop de muis uithangt dus als je dat door if statments zou willen berekenen wordt het iets als het onderstaande.</p>

<pre>
<code>
//snap je niet zo goed wat hier staat
//bekijk http://processing.org/reference/if.html
//en http://processing.org/reference/logicalAND.html

if(mouseX &gt;= 60 &amp;&amp; mouseX &lt;= 90){
    if(mouseY &gt;= 30 &amp;&amp; mouseY &lt;= 60){
        println("we zitten op het 3e vakje op de 2e         rij!");
    }
}
</code>
</pre>

<p>Dit is heel veel code om voor elk vierkant te schrijven. Daarnaast is het probleem dat om het moment dat je meer of minder vierkantjes wil je veel code moet aanpassen.</p>

<p>Een betere oplossing is als je het raster waarin de vormen worden getekend een eigen co&#246;rdinaten stelsel meegeeft, a la zeeslagje.  Op die manier kunnen we de positie van het muis terug rekenen naar de vorm op het scherm die moet veranderen.</p>

<img src="http://setuputrecht.github.io/appsomintelijsten/assets/img/rasterles3.png"/>

<p>Nu kunnen we heel snel het juiste co&#246;rdinaat vinden door de positie van de muis te delen door de breedte van het vakje.</p>

<pre>
<code>
//Eerst geven we aan hoe groot een blokje in het raster is
int cellSize=30;


void setup() {
  //We spelen een beetje vals door de grootte van het canvas makkelijk deelbaar maken door de grote van een vorm
  size(600, 600);

  //Voor het tekenen van "nette" afbeeldingen
  smooth();

  //Een zwarte achtergrond
  background(0);
}

void draw() {
  //Hier rekenen we uit in welk rastervierkantje de muis uithangt
  int mouseXArea = floor(mouseX/cellSize);  
  int mouseYArea = floor(mouseY/cellSize);
}
</code>
</pre>

<p>Als mouseX nu 180 is weeten mouseXArea dat we in het zesde vakje van links zitten. Het probleem is dat als mouseX 183 is, mouseXarea denkt dat we in vakje 8.1 inzitten. Omdat we een heel getal terug willen hebben en niet een notatie als "vakje 8.1" ronden we alle getallen af naar beneden, dit kan door de functie <a href="http://processing.org/reference/floor_.html" target="_blank">floor</a>. De code is dan als volgt.</p>

<pre>
<code>
//Eerst geven we aan hoe groot een blokje in het raster is
int cellSize=30;


void setup() {
  //We spelen een beetje vals door de grootte van het canvas makkelijk deelbaar maken door de grote van een vorm
  size(600, 600);

  //Voor het tekenen van "nette" afbeeldingen
  smooth();

  //Een zwarte achtergrond
  background(0);
}

void draw() {
  //Hier rekenen we uit in welk rastervierkantje de muis uithangt
  int mouseXArea = floor(mouseX/cellSize);  
  int mouseYArea = floor(mouseY/cellSize);

  fill(random(255), random(255), random(255));
  rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);

  println("de muis zit in vakje "+mouseXArea+" bij "+mouseYArea);
}

</code>
</pre>


<p class="instructor">Dit is voor veel mensen een hele moeilijke stap heb ik gemerkt, dus zorg dat je controleert of mensen deze stap snappen.</p>

<p>We hebben dus nu een methode om te berekenen welke vorm op het scherm opnieuw getekend moet worden, en we zetten voorlopig een vierkant neer met een willekuerige kleur als vorm.</p>

<p>Dit is al leuk, maar als je muis stil staat dan blijft het geheel knipperen. Dat is niet handig, dus we hebben een check nodig die kijkt of de muis niet al in hetzelfde vakje aanwezig was.</p>

<p>Om dit te doen hebben we een if statement die kijkt of de muis zich in een ander vakje bevindt op de horizontale OF verticale regel. in een van de eerdere voorbeeld lieten we stilletjes al <a href="http://processing.org/reference/logicalAND.html" target="_blank">&amp;&amp;</a> in een if statment zien, wat kijkt of beide zaken die je wil controleren waar zijn. In ons geval hoeven ze niet allebei waar zijn, mag wel, daarvoor gebruiken we  <a href="http://processing.org/reference/logicalOR.html" target="_blank">&#124;&#124;</a>, wat zoveel betekend als OR.</p>

<p>Hier mee kunnen we aan een if statement beide onderdelen controleert en als een van de vergelijkingen waar is dat de code wordt uitgevoerd. Dus zo kunnen we kijken of de muis zich op een ander horizontaal OF verticaal vakje bevindt.</p>

<pre>
<code>
//Eerst geven we aan hoe groot een blokje in het raster is
int cellSize=30;


void setup() {
  //We spelen een beetje vals door de grootte van het canvas makkelijk deelbaar maken door de grote van een vorm
  size(600, 600);

  //Voor het tekenen van "nette" afbeeldingen
  smooth();

  //Een zwarte achtergrond
  background(0);
}

void draw() {
  //Hier rekenen we uit in welk rastervierkantje de muis uithangt
  int mouseXArea = floor(mouseX/cellSize);  
  int mouseYArea = floor(mouseY/cellSize);
//We kijken nu ook naar de positie van de muis tijdens het vorige frame
  int pmouseXArea = floor(pmouseX/cellSize);  
  int pmouseYArea = floor(pmouseY/cellSize);

  if (mouseXArea != pmouseXArea || mouseYArea != pmouseYArea) {
    fill(random(255), random(255), random(255));
    rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
  }
}
</code>
</pre>

<p>
In bovenstaande code staat nog iets wat we nog niet eerder hebben behandeld, namelijk de <a href="http://processing.org/reference/inequality.html" target="_blank">!=</a>. != betekend zoveel als niet gelijk aan. Dus als mouseXArea en pmouseXArea niet gelijk zijn of hetzelfde geld voor mouseYArea en pmouseYArea, dan teken je een nieuw vierkantje.
</p>

<h2>Verschillende vormen tekenen</h2>
<p>
We hebben nu een belangrijk deel van de interactie af. Het juiste blokje verandert van kleur als we er met de muis over heen gaan en blijft niet knipperen op het moment dat we stil staan. Maar het originele werk heeft meer vormen dan alleen vierkanten, dus die moeten er ook komen.
</p>

<p>
Voor het tekenen van verschillende vormen gebruiken we een if statement in combinatie met random. Op deze manier kunnen we verschillende vormen tekenen. Laten we beginnen met een cirkel en een vierkantje.
</p>

<p>In de code hieronder zie je dat we de functie <a href="http://processing.org/reference/ellipseMode_.html" target="_blank">ellipseMode</a> gebruiken. Door deze in te stellen op CORNER komt de x en de y positie van de cirkel in de linkerbovenhoek te liggen. Omdat dit bij vierkanten standaard is kunnen we vierkant en cirkels op dezelfde manier tekenen zonder ons druk te hoeven maken over verschillende vormen van plaatsen.</p>

<pre>
<code>
//Eerst geven we aan hoe groot een blokje in het raster is
int cellSize=30;

void setup() {
  //We spelen een beetje vals door de grootte van het canvas makkelijk deelbaar maken door de grote van een vorm
  size(600, 600);

  //Voor het tekenen van "nette" afbeeldingen
  smooth();

  //Een zwarte achtergrond
  background(0);
  
  //vergeet ellipseMode niet toe te voegen 
  //http://processing.org/reference/ellipseMode_.html
  ellipseMode(CORNER);
}

void draw() {
  //Hier rekenen we uit in welk rastervierkantje de muis uithangt
  int mouseXArea = floor(mouseX/cellSize);  
  int mouseYArea = floor(mouseY/cellSize);
  int pmouseXArea = floor(pmouseX/cellSize);  
  int pmouseYArea = floor(pmouseY/cellSize);

  int shape = floor(random(2));
  if (mouseXArea != pmouseXArea || mouseYArea != pmouseYArea) {
    fill(random(255), random(255), random(255));
    
    if(shape ==0){
    rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    } else if(shape == 1){
      ellipse(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    }
  }
}
</code>
</pre>

<p>
Als je deze code nu runt zie je het probleem dat de cirkels niet helemaal over de vierkanten heen vallen. Dit lossen we, heel flauw, op door er een zwart vierkant te tekenen voordat we een nieuwe vorm er over heen tekenen.
</p>

<pre>
<code>
//Eerst geven we aan hoe groot een blokje in het raster is
int cellSize=30;

void setup() {
  //We spelen een beetje vals door de grootte van het canvas makkelijk deelbaar maken door de grote van een vorm
  size(600, 600);

  //Voor het tekenen van "nette" afbeeldingen
  smooth();

  //Een zwarte achtergrond
  background(0);
  noStroke();
  
  //vergeet ellipseMode niet toe te voegen 
  //http://processing.org/reference/ellipseMode_.html
  ellipseMode(CORNER);
}

void draw() {
  //Hier rekenen we uit in welk rastervierkantje de muis uithangt
  int mouseXArea = floor(mouseX/cellSize);  
  int mouseYArea = floor(mouseY/cellSize);
  int pmouseXArea = floor(pmouseX/cellSize);  
  int pmouseYArea = floor(pmouseY/cellSize);

  int shape = floor(random(2));
  if (mouseXArea != pmouseXArea || mouseYArea != pmouseYArea) {
    
    //Nu tekenen we er dus altijd een zwart vakje achter, zodat cirkels die over een vierkant heen
    //vallen niet nog het vierkant er achter laten zien
    fill(0);
    rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    
    fill(random(255), random(255), random(255));
  
    if(shape ==0){
    rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    } else if(shape == 1){
      ellipse(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    }
  }
}
</code>
</pre>

<p>Mocht je meer vormen willen toevoegen, dan kan dit natuurlijk altijd. We hebben hier wat voorbeeld code waar in we de andere vormen van Primitives uitleggen. Maar mocht je niet zoveel interesse hebben in vormen, dan kun je ook verder zonder de uitleg te lezen. De belangrijkste toevoeging is de functie <a href="http://processing.org/reference/arc_.html" target="_blank">arc</a> die je in staat stelt delen van een cirkel te tekenen. Let daarbij op dat Processing gebruikt maakt van radianen als notering om het start en eindpunt van de cirkel aan te geven. Mocht je dat onhandig vinden dan kun je met <a href="http://processing.org/reference/radians_.html" target="_blank">randians</a> functie gewoon het 360 graden systeem gebruiken.</p>

<h2>Het scherm aan het begin vullen</h2>
<p>Dus nu kunnen we op de juiste manier nieuwe vormen laten verschijnen en over oude vormen heen tekenen. Maar we beginnen met een leeg scherm. Dat is natuurlijk niet hoe het originele werkt begint.</p>

<p>Gelukkig is het vullen van het scherm niet heel moeilijk en bestaat het uit de code die we al hebben geschreven in draw te combineren met de code van vorige week met 1025 Farben. Daar vulde we ook een scherm in een rastervorm. Hier hebben we naast het vierkant echter ook andere vormen.</p>

<pre>
<code>
//Eerst geven we aan hoe groot een blokje in het raster is
int cellSize=30;

void setup() {
  //We spelen een beetje vals door de grootte van het canvas makkelijk deelbaar maken door de grote van een vorm
  size(600, 600);

  //Voor het tekenen van "nette" afbeeldingen
  smooth();

  //Een zwarte achtergrond
  background(0);
  noStroke();

  //vergeet ellipseMode niet toe te voegen 
  //http://processing.org/reference/ellipseMode_.html
  ellipseMode(CORNER);

  //Twee for loops om het raster te vullen
  for (int y=0;y&lt;height/cellSize;y= y+1) {
println("y " + y);
    for (int x=0;x&lt;width/cellSize;x= x+1) {
      int shape = floor(random(2));

      //Hier doen we hetzelfde als in draw maar vervangen we mouseXArea met x en mouseYarea met y
      fill(random(255), random(255), random(255));

      if (shape ==0) {
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      } 
      else if (shape == 1) {
        ellipse(x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

void draw() {
  //Hier rekenen we uit in welk rastervierkantje de muis uithangt
  int mouseXArea = floor(mouseX/cellSize);  
  int mouseYArea = floor(mouseY/cellSize);
  int pmouseXArea = floor(pmouseX/cellSize);  
  int pmouseYArea = floor(pmouseY/cellSize);

  int shape = floor(random(2));
  if (mouseXArea != pmouseXArea || mouseYArea != pmouseYArea) {

    //Nu tekenen we er dus altijd een zwart vakje achter, zodat cirkels die over een vierkant heen
    //vallen niet nog het vierkant er achter laten zien
    fill(0);
    rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);

    fill(random(255), random(255), random(255));

    if (shape ==0) {
      rect(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    } 
    else if (shape == 1) {
      ellipse(mouseXArea*cellSize, mouseYArea*cellSize, cellSize, cellSize);
    }
  }
}
</code>
</pre>

<h2>De optionele puntjes op de i</h2>

<p>Omdat het tekenen van de verschillende vormen nu op twee plekken plaats vind het je op twee plekken dezelfde code. Omdat dat onnodige is kun je hiervoor een zogenaamde functie gebruiken. Hoewel het gebruik van functies verder gaat dan we gaan uitleggen bij Apps om in te lijsten hebben we voor nieuwsgierigen ook <a href="http://studio.sketchpad.cc/kUNTipUqz3" target="_blank">een versie</a> gemaakt van Primitives die functies gebruikt.</p>



<h2>Afsluiting en huiswerk</h2>

<p>De volgende les is alweer de laatste, dus als huiswerk ga je aan de slag met het maken van je eigen werk. Pak hierbij gerust iets wat we tijdens de les behandeld hebben of verzin je eigen concept. Alles wat je interessant lijkt in de <a href="http://processing.org/reference/" target="_blank">reference</a> zou ik zeker eens proberen, zo leer je immers het snelst en wie weet wat voor idee je er aan over houdt.</p>


