var title="About Us";
var desc="We're a passionate group thriving<br>\
		to create Hyper cool games and more!<br>\
		Founded by: <b><i><a href='https://haipadev.github.io'>HaipaDev</a></i></b>";
var footer="HaipaStudios® HaipaDev® Shizuikari® 2024 | Maciej Krefft";

var pageName1="About Us";
var pageName2="Games";
var pageName3="Music";

setTimeout(function Setup(){
	let path=window.location.pathname;
	let page=path.split("/").pop();
	$("#index").children("span").html(pageName1);
	$("#games").children("span").html(pageName2);
	$("#music").children("span").html(pageName3);
	$("#index").attr("href","index.html");
	//$("#games").attr("href","games.html");
	$("#games").attr("href","https://haipadev.github.io/portfolio");
	$("#music").attr("href","https://shizuikari.jimdosite.com");
	$(".footer").children("footer").html(footer);
	
	if(page=='games.html'){
		title=pageName2;
		desc="";
		$("#sss222Button").attr("href","https://haipadev.github.io/sss222");
		$("#sss222date").html("03.2020 - ??.????");
		$("#glitchoutButton").attr("href","https://haipadev.github.io/glitchout");
		$("#glitchoutDate").html("06.2021 - ??.????");
		$("#rustyropesButton").attr("href","https://github.com/HyperLemonStudios/rusty-ropes");
		$("#rustyropesDate").html("12.2021 - ??.????");
		$("#driftakeButton").attr("href","https://github.com/HaipaDev/driftake");
		$("#driftakeDate").html("??.???? - ??.????");
	}else{
		$("#twitter").html("<img src='img/twitter.png'>");
		$("#twitter").attr("href","https://twitter.com/HaipaaDev");
		$("#github").html("<img src='img/github.png'>");
		$("#github").attr("href","https://github.com/HaipaStudios");
		$("#patreon").html("<img src='img/patreon.png'>");
		$("#patreon").attr("href","https://patreon.com/HyperGamesDev");
		$("#kofi").html("<img src='img/kofi.png'>");
		$("#kofi").attr("href","https://buymeacoffee.com/HyperGamesDev");
	}
	$("#title").html(title);
	//$("#desc").html(desc);
},100);

function redirect_cvEN(){window.open("https://raw.githubusercontent.com/HaipaDev/HaipaDev//master/assets/CV-HaipaDev_EN.pdf","_self");}
function redirect_cvPL(){window.open("https://raw.githubusercontent.com/HaipaDev/HaipaDev//master/assets/CV-HaipaDev_PL.pdf","_self");}

const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));