/*const x = 10;
console.log(x);
let y = 20;
console.log(y);
y = 40;
console.log(y);
let z = y % 4;
console.log(z);
y++;
console.log(y);
z--;
console.log(z);
console.log("la valeur de y est :" + y);
y += 11; //y=y+11//
console.log(y);
y -= 3; // y=y-3 //
console.log(y);
let chaine = 'chaine"mot en quote"reste de la chaine';
console.log(chaine);
chaine = "it's a good day";
console.log(chaine);
dossier = "dosssier\\mesimages\\image.png";
console.log(dossier);
chaine = "premier ligne\ndeuxiéme ligne";
console.log(chaine);
objet.attribut;
objet.methode();*/

// JSON (javaspcrit object notation comment on va noter un objet !important)//

var person = {
  firstName: "john",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.firstName);
console.log(person.id);
console.log(person.fullName());
function afficherMessage() {
  console.log("un message");
}

afficherMessage();
function some(a, b) {
  return console.log(a + b);
}
some(5, 3);

some(6, 12);

function some2(a, b) {
  return a + b;
}
let x = some2(5, 5);
console.log(x);

let val1 = Math.random() * 11;
let val2 = Math.random() * 10;
let y = some2(val1, val2);

console.log(y);
console.log(val1);
console.log(val2);
/* Math.floor admet un parametre comme Math.random et il ne faut pas oublier que les objets commence tjr par une Masjucule*/

y = Math.floor(Math.random() * 10);
console.log(y);
// la fonction floor permet d'avoir un entier//
l = Math.floor(6.6);
console.log(l);
//  Boolean permet de tester les valeurs et de voir si la condition est vrai ou fausse//
function trueorfalse(a, b) {
  return a == b;
}
console.log(trueorfalse(5, 6));
chaine = " "; // une chaine vide affiche false et une chaine avec juste un espace est consideré comme vrai. voir les execptions sur 3shools//
console.log(Boolean(chaine));

/*he Boolean value of 0 (zero) is false:

var x = 0;
Boolean(x);       // returns false
The Boolean value of -0 (minus zero) is false:

var x = -0;
Boolean(x);       // returns false
The Boolean value of "" (empty string) is false:

var x = "";
Boolean(x);       // returns false
The Boolean value of undefined is false:

var x;
Boolean(x);       // returns false
The Boolean value of null is false:

var x = null;
Boolean(x);       // returns false
The Boolean value of false is (you guessed it) false:

var x = false;
Boolean(x);       // returns false
The Boolean value of NaN is false:

var x = 10 / "H";
Boolean(x);       // returns false 
x=1
y=1
x===y egalite de meme types est donc le Boolean nous indiquera true
si z= 1.2 avec x===z cela est faux
------------------------------------

Les opérateurs de comparaison sont utilisés dans les instructions logiques pour déterminer l'égalité ou la différence entre des variables ou des valeurs.

Compte tenu de cela x = 5, le tableau ci-dessous explique les opérateurs de comparaison:

Operator	Description	Comparing	Returns	Try it
==	equal to	x == 8	false	
x == 5	true	
x == "5"	true	
===	equal value and equal type	x === 5	true	
x === "5"	false	
!=	not equal	x != 8	true	
!==	not equal value or not equal type	x !== 5	false	
x !== "5"	true	
x !== 8	true	
>	greater than	x > 8	false	
<	less than	x < 8	true	
>=	greater than or equal to	x >= 8	false	
<=	less than or equal to	x <= 8	true


Opérateurs logiques
Les opérateurs logiques sont utilisés pour déterminer la logique entre les variables ou les valeurs.

Compte tenu de cela x = 6et y = 3, le tableau ci-dessous explique les opérateurs logiques:

Operator	Description	Example	Try it
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true
--------------------------------------
Exemple du prof : a=b
a!=b false 
&&= and
true && true = true
true && flase =false
f && f =false
|| or = ou
t||t= true
t||f true
f||f false

a = true
a = true ? x = "true": x = "false"
a=5;
b=10;
a < b ? x ="inferieur: x ="superieur" le traitement sera "inférieur"
si a=15 le traitement sera "supérieur"
 
syntaxe du "if": if (condition) {
  //  block of code to be executed if the condition is true
}



*/

function myfunction(hour) {
  let greeting;
  if (hour < 15) {
    greeting = "good day";
  } else if (hour > 20) {
    greeting = "good night";
  } else {
    greeting = "good evening";
  }
  return greeting;
}
console.log(myfunction());

/* L' instruction  switch est utilisée pour effectuer différentes actions en fonction de différentes conditions.
syntaxe du Switch:
 switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
Voilà comment cela fonctionne:

L'expression de commutateur est évaluée une fois.
La valeur de l'expression est comparée aux valeurs de chaque cas.
S'il y a correspondance, le bloc de code associé est exécuté.
S'il n'y a pas de correspondance, le bloc de code par défaut est exécuté.
 
Lorsque JavaScript atteint un break mot - clé, il sort du bloc de commutation.
Cela arrêtera l'exécution à l'intérieur du bloc de commutation.
Il n'est pas nécessaire de casser le dernier cas dans un bloc de commutation. Le bloc se brise (se termine) là de toute façon.
Remarque: Si vous omettez l'instruction break, le cas suivant sera exécuté même si l'évaluation ne correspond pas au cas.
Le defaultmot clé spécifie le code à exécuter s'il n'y a pas de correspondance de casse:
*/

let time = 6;
switch (time) {
  case 6:
    "good morning";
    console.log("good morning");
    break;
  case 10:
    "good day";
    console.log("good day");
    break;
  case 14:
    "good afternoon";
    console.log("good afternoon");
    break;
  case 19:
    "good night";
    console.log("good night");
}

/* javaScript prend en charge différents types de boucles:

for - parcourt un bloc de code plusieurs fois
for/in - boucle sur les propriétés d'un objet
for/of - boucle sur les valeurs d'un objet itérable
while - boucle sur un bloc de code alors qu'une condition spécifiée est vraie
do/while - boucle également à travers un bloc de code tant qu'une condition spécifiée est vraie
Exemple: var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
 
Le resultat de ce script est le suivant:
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
*/

function test1(age) {
  let afficher;
  if (age <= 10) {
    afficher = "Enfant";
  } else if (age <= 15) {
    afficher = "adolescent";
  } else if (age <= 20) {
    afficher = "jeune";
  } else if (age <= 45) {
    afficher = "adulte";
  } else if (age <= 100) {
    afficher = "senior";
  }
  return afficher;
}
console.log(test1(44));

/*Les boucles vont nous permettre d’exécuter plusieurs fois un bloc de code, c’est-à-dire d’exécuter un code « en boucle » tant qu’une condition donnée est vérifiée et donc ainsi nous faire gagner beaucoup de temps dans l’écriture de nos scripts.

Lorsqu’on code, on va en effet souvent devoir exécuter plusieurs fois un même code. Utiliser une boucle nous permet de n’écrire le code qu’on doit exécuter plusieurs fois qu’une seule fois.

Nous disposons de six boucles différentes en JavaScript :

La boucle while (« tant que ») ;
La boucle do… while (« faire… tant que ») ;
La boucle for (« pour ») ;
La boucle for… in (« pour… dans») ;
La boucle for… of (« pour… parmi ») ;
La boucle for await… of (« pour -en attente-… parmi »).
Le fonctionnement général des boucles est toujours le même : on pose une condition qui sera généralement liée à la valeur d’une variable et on exécute le code de la boucle « en boucle » tant que la condition est vérifiée.

Pour éviter de rester bloqué à l’infini dans une boucle, vous pouvez donc déjà noter qu’il faudra que la condition donnée soit fausse à un moment donné (pour pouvoir sortir de la boucle).
ncrémenter une valeur signifie ajouter 1 à cette valeur tandis que décrémenter signifie enlever 1.

Les opérations d’incrémentation et de décrémentation vont principalement être utilisées avec les boucles en JavaScript.
Elles vont pouvoir être réalisées grâce aux opérateurs d’incrémentation "++"" et de décrémentation "--"".
*/

function test2(age) {
  x = "";
  switch (true) {
    case age <= 10:
      x = "enfant";
      break;
    case age <= 15:
      x = "adolescent";
      break;
    case age <= 20:
      x = "jeune";
      break;
    case age <= 45:
      x = "adulte";
      break;
    case age <= 100:
      x = "senior";
      break;
    default:
      x = "tropvieux";
  }
  return x;
}
console.log(test2(35));
/* il faut utiliser le true dans le cas ou les valeurs ne sont pas des valeur en dure comme case 5 etc.. mais 
quand on a des chaine de caractere  ou plutot une expression on mettera true: SUPER IMPORTANT*/

/* Les boucles 
let a = 0
while (a < 10) {
  document.getElementById('p5').innerHTML+=
    "x sotck la valeur" +
    x +
    "lors du passage numero" +
    (x + 1) +
    "dans la boucle <br>";
  x++;
}
*/
// un paramettre permet d'utiliser une fonction avec plusieurs valeurs//

function entiers(tab) {
  let i;
  let text = "";
  for (i = 0; i < tab.length; i++) {
    text += tab[i] + "\n";
  }

  return text;
}

let tab = [1, 2, 3, 4, 5, 6, 7, 8];
let tab2 = [1, 2, 3, 4, 5];

console.log(entiers(tab));
console.log(entiers(tab2));

let b;
function while1(b) {
  let h = 0;
  let afficher = "";
  while (h < 10) {
    afficher +=
      "x stock la valuer " +
      h +
      "lors du passage numero" +
      (h + 1) +
      "dans la boucle" +
      "\n";
    h++;
  }
  return afficher;
}
console.log(while1(b));

/* FOR IN revoir sur le site de pierre giraud:
La boucle for in itère sur un objet personne
Chaque itération renvoie une clé (x)
La clé est utilisée pour accéder à la valeur de la clé
La valeur de la clé est person [x]*/

/*L' breakinstruction "saute" d'une boucle.
L' continueinstruction "saute" d'une itération dans la boucle.
Vous avez déjà vu l' breakinstruction utilisée dans un chapitre précédent de ce didacticiel. Il était utilisé pour «sauter» d'une switch()déclaration.
L' breakinstruction peut également être utilisée pour sortir d'une boucle:
Exemple: 
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
 cela nous affiche:
  The number is 0
  The number is 1
  The number is 2
  */
tab6 = ["bloni", "non", "kjbk", "non", "izpg", "kjbgkj", "non", "lsgoisgh"];
function nbrmots(tab) {
  let text1 = "";
  for (i = 0; i < tab.length; i++) {
    if (tab[i] === "non") {
      continue;
    }
    text1 += tab[i] + "\n";
  }
  return text1;
}
console.log(nbrmots(tab6));

tab5 = ["sqfsfsfsf", "sfsgd", "non", "sgsgsdsg"];
function whilenbr(tab) {
  let i = 0;
  let text2 = "";
  while (i < tab.length) {
    if (tab[i] === "non") {
      i++;
      continue;
    }
    text2 += tab[i] + "\n";
    i++;
  }

  return text2;
}
console.log(whilenbr(tab5));
// une incrémantation doit etre faites au debut qd on utilise while avec un "continue" c'est pour cela qui'il se trouve ici dans le code si dessus, c'est un cas particulier//

function while2(tab) {
  let i = 0;
  let text3;
  while (i < tab.length) {
    text3 += tab[i] + "\n";
    i++;
  }
  return text3;
}
console.log(while2(tab5));
/*revoir les tableau sur 3scholls, ici on va juste retenir la syntaxe(voir exemple 3shools)*/
tab7 = ["a", "b", "c", "d"];
console.log(tab7[3]);
tab7[0] = "youyou";
console.log(tab7[0]);
// les tabelaux sont des objets, ils ont des attributs et des methodes //
console.log(tab7);
tab7.sort();
console.log(tab7);
/*déclaration de clé (firstname dans cette exemple , on appelle dela une clé) avec un element qui lui affecté: var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
-----------------------------
 Untableau peut contenir plusieur objet comme suit:
let objetab=[

  {nom:"james", age:21, @:"roubaix"};
  {nom:"Franck", age:22, @:"lille"};
  {Fonction:"directeur", societe:"AFPA"};
]
pour affaicher une vaeur on utilise le console log ou pour changer une valeur on va mettre directement
tab[0].nom = xavier ici la valeur de james sera changer par la valeur de xavier
pour l'afficher on fera console.log(tab[0].nom), on peux donc afficher n'importe quels attribue d'un objets.*/

/* JQuery: La syntaxe jQuery est faite sur mesure pour sélectionner des éléments HTML et effectuer certaines actions sur le ou les éléments.

La syntaxe de base est: $ ( sélecteur ). action ()

Un signe $ pour définir / accéder à jQuery
Un ( sélecteur ) pour "interroger (ou rechercher)" des éléments HTML
Une action jQuery () à effectuer sur le ou les éléments 
Exemples:

$(this).hide() - masque l'élément courant.

$("p").hide() - masque tous les éléments <p>.

$(".test").hide() - masque tous les éléments avec class = "test".

$("#test").hide() - masque l'élément avec id = "test".

Selecteur jQuery: $("*")	Selects all elements	
$(this)	Selects the current HTML element	
$("p.intro")	Selects all <p> elements with class="intro"	
$("p:first")	Selects the first <p> element	
$("ul li:first")	Selects the first <li> element of the first <ul>	
$("ul li:first-child")	Selects the first <li> element of every <ul>	
$("[href]")	Selects all elements with an href attribute	
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	Selects all even <tr> elements	
$("tr:odd")	Selects all odd <tr> elements 
si besoin aller revoir les sélecteur css sur 3 shools car se sont les memes: https://www.w3schools.com/css/css_pseudo_classes.asp

La on()méthode attache un ou plusieurs gestionnaires d'événements pour les éléments sélectionnés.

Joindre un événement de clic à un <p>élément:
 $("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});

Revoir sur 3shools les points Effets jQuery et html jQuery !!!!

----------------------------------------------------------------------
Ajouter un nouveau contenu HTML
Nous examinerons quatre méthodes jQuery utilisées pour ajouter du nouveau contenu:

append() - Insère du contenu à la fin des éléments sélectionnés
prepend() - Insère du contenu au début des éléments sélectionnés
after() - Insère du contenu après les éléments sélectionnés
before() - Insère du contenu avant les éléments sélectionnés
revoir les exemple sur 2shools assez simple



""""""ici on commence par definir trois variables.
ensuite ont leurs donnent une valeur
chaque variable contient du texte mais avec differentes facon
ensuite on utilise le selecteur de jquery, on selection le corps du doc donc le body et ensuite on utilise la fontion append pour ajouter a notre doc les trois variables avec leurs contenu
 <script>
function appendText() {
  var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("body").append(txt1, txt2, txt3);   // Append new elements
}
</script>
</head>
<body>

<p>This is a paragraph.</p>
<button onclick="appendText()">Append text</button>

</body>
</html>  """"
 
Si on a beson de faire un traitement sur un élement du DOM; il faut utiliser le "this.", il faut donc gerer l'evenement a l'interieur de JQuery voir la p^hoto sur le portable
le "this" doit etre a l'interieur du $(document).ready sinon il considerer le this comme le DOM.


Remarques: les fonctions append et prepend sont a utiliser a l'interieur du body a contrario before et after son a utliser au sein meme d'une fonction.
 Pour append et preppend les élément s'ajoutent a l'interieur du selecteur ( l'element ajouter sera le sils du selecteur).
 Pour before et after les éléments ajoutaient se trouve a coter du selecteur ( ils seront donc ses freres).

Pour supprimer des éléments et du contenu, il existe principalement deux méthodes jQuery:
remove() - Supprime l'élément sélectionné (et ses éléments enfants)
empty() - Supprime les éléments enfants de l'élément sélectionné
La remove()méthode jQuery supprime le ou les éléments sélectionnés et leurs éléments enfants.
La empty()méthode jQuery supprime les éléments enfants du ou des éléments sélectionnés.
La remove()méthode jQuery accepte également un paramètre, qui vous permet de filtrer les éléments à supprimer.

Le paramètre peut être l'une des syntaxes du sélecteur jQuery.

L'exemple suivant supprime tous les <p>éléments avec class="test":  
$("p").remove(".test");
2éme exemple:
$("p").remove(".test, .demo");
Cet exemple supprime tous les <p>éléments avec class="test"et class="demo".


jQuery a plusieurs méthodes de manipulation CSS. Nous examinerons les méthodes suivantes:
addClass() - Ajoute une ou plusieurs classes aux éléments sélectionnés
removeClass() - Supprime une ou plusieurs classes des éléments sélectionnés
toggleClass() - Bascule entre l'ajout / la suppression de classes des éléments sélectionnés
css() - Définit ou renvoie l'attribut de style
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important");
  });
});
les clases css sont:
<style>
.important {
  font-weight: bold;
  font-size: xx-large;
}

.blue {
  color: blue;
}
</style>
Le jquery va donc ajouter les clases blue et important a léelment selectionner, donc le blue sera affester au h1,h2,p
et la classe important sera affecter a "div"
pour revoir cette exemple: https://www.w3schools.com/jquery/jquery_css_classes.asp
revoir cette parti https://www.w3schools.com/jquery/jquery_css.asp



Illustration expliquée:

L'élément <div> est le parent de <ul>, et un ancêtre de tout ce qu'il contient
L'élément <ul> est le parent des deux éléments <li> et un enfant de <div>
L'élément <li> gauche est le parent de <span>, l' enfant de <ul> et un descendant de <div>
L'élément <span> est un enfant de la gauche <li> et un descendant de <ul> et <div>
Les deux éléments <li> sont des frères et sœurs (ils partagent le même parent)
L'élément <li> droit est le parent de <b>, l' enfant de <ul> et un descendant de <div>
L'élément <b> est un enfant du droit <li> et un descendant de <ul> et <div>
Trois méthodes jQuery utiles pour parcourir l'arborescence DOM sont:
parent()
parents()
parentsUntil()

La parent()méthode renvoie l'élément parent direct de l'élément sélectionné.
Cette méthode ne traverse qu'un seul niveau dans l'arborescence DOM.

La parents()méthode retourne tous les éléments ancêtres de l'élément sélectionné, tout le chemin jusqu'à l'élément racine du document ( <html>).
L'exemple suivant renvoie tous les ancêtres de tous les <span>éléments:

La parentsUntil()méthode renvoie tous les éléments ancêtres entre deux arguments donnés.
L'exemple suivant renvoie tous les éléments ancêtres entre a <span>et un <div>élément:
pour voir les exemples :https://www.w3schools.com/jquery/jquery_traversing_ancestors.asp

Deux méthodes jQuery utiles pour parcourir l'arborescence DOM sont:
children()
find()

La children()méthode renvoie tous les enfants directs de l'élément sélectionné.
Cette méthode ne parcourt qu'un seul niveau dans l'arborescence DOM.
L'exemple suivant renvoie tous les éléments qui sont des enfants directs de chaque <div>élément:

La find()méthode retourne les éléments descendants de l'élément sélectionné, jusqu'au dernier descendant.
L'exemple suivant retourne tous les <span>éléments qui sont les descendants de <div>:

Il existe de nombreuses méthodes jQuery utiles pour parcourir latéralement dans l'arborescence DOM:
siblings() La siblings()méthode renvoie tous les éléments frères de l'élément sélectionné.
next() La next()méthode retourne l'élément frère suivant de l'élément sélectionné.
nextAll() La nextAll()méthode renvoie tous les éléments frères suivants de l'élément sélectionné.
nextUntil() La nextUntil()méthode renvoie tous les éléments frères suivants entre deux arguments donnés.

prev()
prevAll()
prevUntil()
Les méthodes prev(), prevAll()et prevUntil()fonctionnent exactement comme les méthodes ci-dessus mais avec une fonctionnalité inverse: elles renvoient les éléments frères précédents (parcourent les éléments frères et sœurs dans l'arborescence DOM, au lieu d'avancer).

Syntaxe jquery:
https://www.w3schools.com/jquery/jquery_ref_selectors.asp
https://www.w3schools.com/jquery/jquery_ref_events.asp
https://www.w3schools.com/jquery/jquery_ref_effects.asp
https://www.w3schools.com/jquery/jquery_ref_html.asp
https://www.w3schools.com/jquery/jquery_ref_traversing.asp
https://www.w3schools.com/jquery/jqu
https://www.w3schools.com/jquery/jquery_ref_misc.asp
https://www.w3schools.com/jquery/jquery_ref_prop.asp


*/
