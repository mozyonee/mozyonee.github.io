//SWITCH TWO FRAMES
//AUTHOR: Joshua Froelich
//LAST UPDATED: 6/6/2000
//COMPATABILITY: Full
//IDEAS: maybe add in array, an eval function, maybe combine switch and integrate functions somehow if this is possible
//KNOWN ERRORS:  fix error for when user wishes clicks browser back button to exit tutorials section
//fix error in select statement, it should refresh the value
//be careful about the error of restarting the onchange event handler
function switchFrames(t)
{
	var nr = "\n\r";
	switch(t)
	{
		case "overview":{parent.left.location.href="loverview.html";parent.main.location.href="overview.html";break;}
		case "nothing":{break;}
		case "t1":{parent.left.location.href="lt1.html";parent.main.location.href="t1.html";break;}
		case "t2":{parent.left.location.href="lt2.html";parent.main.location.href="t2.html";break;}
		case "t31":{parent.left.location.href="lt3a.html";parent.main.location.href="t3a.html";break;}
		case "t32":{parent.left.location.href="lt3b.html";parent.main.location.href="t3b.html";break;}
		case "t4":{parent.left.location.href="lt4.html";parent.main.location.href="t4.html";break;}
		case "t5":{parent.left.location.href="lt5.html";parent.main.location.href="t5.html";break;}
		case "t6":{parent.left.location.href="lt6.html";parent.main.location.href="t6.html";break;}
		case "t7":{parent.left.location.href="lt7.html";parent.main.location.href="t7.html";break;}
		case "t8":{parent.left.location.href="lt8.html";parent.main.location.href="t8.html";break;}
		default:{alert("Error in PolyAnalyst Tutorials"+nr+"Please contact Megaputer Intelligence at 812-330-0110"+
		nr+nr+nr+"function switchFrames");break;}
	}
}

function integrateF()
{
	if(parent.frames.length==0)
	{mFileRef= getFileRef(window.location.href);alert("Improper page load.  Page will reload now.");window.location.href="tutorials.html";}
	
	if(parent.frames.length==3)//99% sure its the correct window
	{var mFileRef,lFileRef = "";mFileRef = getFileRef(parent.main.location.href);lFileRef = getFileRef(parent.left.location.href);}

	if(mFileRef!="")
		switch (mFileRef)
		{
			case "overview.html":changeLF(lFileRef,"loverview.html");break;
			case "t1.html":changeLF(lFileRef,"lt1.html");break;
			case "t2.html":	changeLF(lFileRef,"lt2.html");break;
			case "t3a.hmtl":changeLF(lFileRef,"lt3a.html");break;
			case "t3b.hmtl":changeLF(lFileRef,"lt3b.html");break;
			case "t4.html":	changeLF(lFileRef,"lt4.html");break;
			case "t5.html":	changeLF(lFileRef,"lt5.html");break;
			case "t6.html":	changeLF(lFileRef,"lt6.html");break;
			case "t7.html":	changeLF(lFileRef,"lt7.html");break;
			case "t8.html":	changeLF(lFileRef,"lt8.html");break;
			default:break;
		}
			//alert(parent.head.tutorial.links.options[parent.head.tutorial.links.selectedIndex]);
}
function changeLF(bName,eName){if(bName!=eName)parent.left.location.href=eName;setStatus();}//match em
function getFileRef(theFile){aFile = theFile.split("/");return aFile[aFile.length-1];}//gets files name and extension
function setStatus(){window.status="Megaputer Intelligence";}
