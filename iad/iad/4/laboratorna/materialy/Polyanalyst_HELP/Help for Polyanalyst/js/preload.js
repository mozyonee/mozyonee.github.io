//AUTHOR: Joshua Froelich
//LAST UPDATED: 6/7/2000
//BROWSER COMPATABILITY: full
//dont forget to delete those pics not used
function reloadHeader(){if((parent.frames.length==0)&&(getFileRef(window.location.href)=="header.html"))
window.location.href="tutorials.html";}

function preload()
{
	//header.html
	//create the mp_logo image object
	mp_logo = new Image();
	//set the source of the image object to the URL
	mp_logo.src = "../img/mp_logo.jpg";//megaputer web logo

	//overview.html
	
	curve = new Image();
	curve.src = "../img/top_left_curve.gif";
	t1 = new Image();
	t1.src = "../img/pa.gif"; //pa's icon
	t2 = new Image();
	t2.src = "../img/medicine.gif"; //red cross
	t3 = new Image();
	t3.src = "../img/car.gif"; //car for 3a and 3b
	t4 = new Image();
	t4.src = "../img/gold_coins.gif";//gold coins
	t5 = new Image();
	t5.src = "../img/gears.gif"; //gears
	t6 = new Image();
	t6.src = "../img/realtor1.gif";//house
	t7 = new Image();
	t7.src = "../img/handshake.gif";//hands shaking
	t8 = new Image();
	
}

function preloadT1()
{
	/*

	*/
}