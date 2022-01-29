var title="About Us";
var desc="We're a passionate group thriving<br>\
to create Hyper cool games and more!<br>\
Founded by: <a href='https://hypergamesdev.github.io'>Hyper</a>";

var pageName1="About Us";
var pageName2="Games";

function checkPage(){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	if(document.getElementById("index")!=null)document.getElementById("index").href="index.html";
	if(document.getElementById("games")!=null)document.getElementById("games").href="games.html";
	if(page=='games.html'){
		title=pageName2;
		desc="";
		if(document.getElementById("sss222Button")!=null)
			document.getElementById("sss222Button").href="https://hypergamesdev.github.io/sss222";
		if(document.getElementById("sss222date")!=null)
			document.getElementById("sss222date").innerHTML="03.2020 - ??.????";
		if(document.getElementById("glitchoutButton")!=null)
			document.getElementById("glitchoutButton").href="https://hypergamesdev.github.io/glitchout";
		if(document.getElementById("glitchoutDate")!=null)
			document.getElementById("glitchoutDate").innerHTML="06.2021 - ??.????";
		if(document.getElementById("glitchedoutButton")!=null)
			document.getElementById("glitchedoutButton").href="https://github.com/HyperGamesDev/GlitchedOut-GMS-0.1-";
		if(document.getElementById("glitchedoutDate")!=null)
			document.getElementById("glitchedoutDate").innerHTML="03.2018 - 11.2018";
		if(document.getElementById("sss77Button")!=null)
			document.getElementById("sss77Button").href="https://github.com/HyperGamesDev/sss77";
		if(document.getElementById("sss77Date")!=null)
			document.getElementById("sss77Date").innerHTML="08.2017 - 12.2019";
		if(document.getElementById("planetoidButton")!=null)
			document.getElementById("planetoidButton").href="https://github.com/HyperGamesDev/mc-planetoids";
		if(document.getElementById("planetoidDate")!=null)
			document.getElementById("planetoidDate").innerHTML="06.2020 - ??.????";
	}/*else{
		if(document.getElementById("allmylinks")!=null)
			document.getElementById("allmylinks").innerHTML="<img src='img/carrd.png'>";
			document.getElementById("allmylinks").href="https://hypergamesdev.carrd.co";
		}if(document.getElementById("twitter")!=null){
			document.getElementById("twitter").innerHTML="<img src='img/twitter.png'>";
			document.getElementById("twitter").href="https://twitter.com/HyperLemonPL";
		}if(document.getElementById("github")!=null){
			document.getElementById("github").innerHTML="<img src='img/github.png'>";
			document.getElementById("github").href="https://github.com/hypergamesdev";
		}if(document.getElementById("patreon")!=null){
			document.getElementById("patreon").innerHTML="<img src='img/patreon.png'>";
			document.getElementById("patreon").href="https://patreon.com/HyperGamesDev";
		}if(document.getElementById("kofi")!=null){
			document.getElementById("kofi").innerHTML="<img src='img/kofi.png'>";
			document.getElementById("kofi").href="https://buymeacoffee.com/HyperGamesDev";
		}if(document.getElementById("linkedin")!=null){
			document.getElementById("linkedin").innerHTML="<img src='img/linkedin.png'>";
			document.getElementById("linkedin").href="https://linkedin.com/in/hypergamesdev";
		}if(document.getElementById("cv_EN")!=null){
			document.getElementById("cv_EN").innerHTML="CV_EN";
			document.getElementById("cv_EN").href="redirects/cv_EN.html";
		}if(document.getElementById("cv_PL")!=null){
			document.getElementById("cv_PL").innerHTML="CV_PL";
			document.getElementById("cv_PL").href="redirects/cv_PL.html";
	}*/
	if(document.getElementById("title")!=null)document.getElementById("title").innerHTML=title;
	if(document.getElementById("desc")!=null)document.getElementById("desc").innerHTML=desc;
}

function redirect_cvEN(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/Grafika%20Social/CV-HyperGamesDev_EN.png","_self");}
function redirect_cvPL(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/Grafika%20Social/CV-HyperGamesDev_PL.png","_self");}

function docWrite(string){document.write(string);}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
