<!-- // Hide


//---

// *** CROSS-BROWSER COMPATIBILITY ***

var isDOM = (document.getElementById ? true : false); 
var isIE4 = ((document.all && !isDOM) ? true : false);
var isNS4 = (document.layers ? true : false);
var isDyn = (isDOM || isIE4 || isNS4);


function getRef(id)
{
 return (isDOM ? document.getElementById(id) :
  (isIE4 ? document.all[id] : document.layers[id]));
}

function getSty(id)
{
 return (isNS4 ? getRef(id) : getRef(id).style);
} 


// *** MOUSEOVER/OUT CONTROL FUNCTIONS ***

// Hide timeout.
var popTimer = 0;
// Arrays holding highlighted menu items.
var litNow = new Array();

function popOver(menuNum, itemNum)
{
 clearTimeout(popTimer);

 // Hide all other menus & dim old highlighted items, still showing this menu.
 hideAllBut(menuNum);

 // Get tree of parent menu items and light them up - global variable!
 litNow = getTree(menuNum, itemNum);
 changeCol(true);

 // Get target menu to show - if it's nonzero, position & show it.
 targetNum = menu[menuNum][itemNum].target;
 if (targetNum > 0)
 {
  // Get current menu position - menu position plus item position in menu.
  thisX = parseInt(menu[menuNum][0].ref.left) + parseInt(menu[menuNum][itemNum].ref.left);
  thisY = parseInt(menu[menuNum][0].ref.top) + parseInt(menu[menuNum][itemNum].ref.top);

  // Add those to the target's offset to set the target's position, show it.
  with (menu[targetNum][0].ref)
  {
   left = thisX + menu[targetNum][0].x;
   top = thisY + menu[targetNum][0].y;
   visibility = 'visible';
  }
 }
}

function popOut(menuNum, itemNum)
{
 // If it's a root menu item that doesn't trigger a popout, hide now, else set timeout
 // to hide all menus in 1/2 sec... remember, another mouseover clears the timeout.
 if ((menuNum == 0) && !menu[menuNum][itemNum].target) hideAllBut(0);
 else popTimer = setTimeout('hideAllBut(0)', 500);
}

function popClick(menuNum, itemNum)
{
 with (menu[menuNum][itemNum])
 {
  switch (type)
  {
   // A JavaScript function? Eval() it and break out of switch.
   case 'js:': { eval(href); break }
   // Otherwise, point to the window if nothing else and navigate.
   case '': type = 'window';
   case 'newwin': {window.open (href); break}
   case 'both': {parent.left.location.href="left_text.html";parent.main.location.href="text.html";break;}
   case 'both2': {parent.left.location.href="left.html";parent.main.location.href="home.html";break;}
   case 'simple': {parent.left.location.href="left_simple.html";parent.main.location.href="simple.html";break;}
   case 'medical': {parent.left.location.href="left_medical.html";parent.main.location.href="medical.html";break;}
   case 'mpg1': {parent.left.location.href="left_mpg1.html";parent.main.location.href="mpg1.html";break;}
   case 'mpg2': {parent.left.location.href="left_mpg2.html";parent.main.location.href="mpg2.html";break;}
   case 'gold': {parent.left.location.href="left_gold.html";parent.main.location.href="gold.html";break;}
   case 'applied': {parent.left.location.href="left_applied.html";parent.main.location.href="applied.html";break;}
   case 'direct': {parent.left.location.href="left_direct.html";parent.main.location.href="direct.html";break;}
   case 'mba': {parent.left.location.href="left_mba.html";parent.main.location.href="mba.html";break;}
   case 'fraud': {parent.left.location.href="left_fraud.html";parent.main.location.href="fraud.html";break;}
   case 'sch': {parent.left.location.href="left_scheduler.html";parent.main.location.href="scheduler.html";break;}
   case 'trans': {parent.left.location.href="left_transactional.html";parent.main.location.href="transactional.html";break;}
   default: if (href) eval(type + '.location.href = "' + href + '"');

  }
 }

 // Whatever happens, hide the menus when clicked.
 hideAllBut(0);
}


function getTree(menuNum, itemNum)
{
 // Array index is the menu number. The contents are null (if that menu is not a parent)
 // or the item number in that menu that is an ancestor (to light it up).
 itemArray = new Array(menu.length);

 while(1)
 {
  itemArray[menuNum] = itemNum;
  // If we've reached the top of the hierarchy, return.
  if (menuNum == 0) break;
  itemNum = menu[menuNum][0].parentItem;
  menuNum = menu[menuNum][0].parentMenu;
 }
 return itemArray;
}

// Pass an array and a boolean to specify colour change, true = over colour.
// N.B: Uses global litNow array which contains items in hierarchy.
function changeCol(isOver)
{
 // Cycle through array searching for items to change.
 for (count = 0; count < litNow.length; count++)
 {
  // If item number is present, change its colour.
  if (litNow[count])
  {
   // Nest two WITH's, the last being more specific to allow item hover colours.
   with (menu[count][0]) with (menu[count][litNow[count]])
   {
    newCol = isOver ? overCol : backCol;

    // Change the colours of the div/layer background.
    if (isNS4) ref.bgColor = newCol;
    //else ref.backgroundColor = newCol;
   }
  }
 }
}

function hideAllBut(menuNum)
{
 // Get array of parent menus (item numbers irrelevant, just pass '1').
 var keepMenus = getTree(menuNum, 1);

 // ...and work through it, hiding menus that are not its ancestors/itself.
 for (count = 0; count < menu.length; count++)
  if (!keepMenus[count] && menu[count]) menu[count][0].ref.visibility = 'hidden';

 // Dim all the items in litNow array.
 changeCol(false);
}


// *** MENU ARRAY CONSTRUCTION FUNCTIONS ***

// This is incredibly, incredibly cool. Really. It takes an array of data and names and
// assigns the values to a specified object -- used to slim down the constructors here.
function addProps(obj, data, names, addNull)
{
 for (i = 0; i < names.length; i++)
  if(i < data.length || addNull) obj[names[i]] = data[i];
}

// Use above function to add our list of arguments to the menu array.
function Menu()
{
 var names = ['isVert', 'popInd', 'x','y', 'width', 'pad', 'overCol', 'backCol',
  'borderClass', 'textClass',      'parentMenu', 'parentItem', 'ref'];
 addProps(this, arguments, names, true);
}

function Item()
{
 var names = ['text', 'href', 'type', 'length', 'spacing', 'target',    'ref'];
 addProps(this, arguments, names, true);
}


// *** MAIN MENU SETUP FUNCTION ***

function createMenus()
{
 if (!isDyn) return;

 // Loop through menus, using properties of menu description object, i.e. x, y, width etc...
 for (currMenu = 0; currMenu < menu.length; currMenu++)
 if (menu[currMenu]) with (menu[currMenu][0])
 {
  // Variable for holding HTML for items and positions of next item.
  var str = '', itemX = 0, itemY = 0;

  // In NS4, since borders are assigned to the table rather than layer, increase padding.
  if (isNS4) pad++;

  // Remember, items start from 1 in the array (0 is menu object itself, above).
  // Also use properties of each item nested in the other with() for construction.
  for (currItem = 1; currItem < menu[currMenu].length; currItem++) with (menu[currMenu][currItem])
  {
   var itemID = 'menu' + currMenu + 'item' + currItem;

   // The width and height of the menu item - dependent on orientation!
   // NS6 disagrees with other browsers as to whether borders increase widths, so fix here.
   var shrink = (borderClass && isDOM && !document.all ? 2 : 0)
   var w = (isVert ? width : length) - shrink;
   var h = (isVert ? length : width) - shrink;

   // Create a div or layer text string with appropriate styles/properties.
   if (isDOM || isIE4)
   {
    str += '<div id="' + itemID + '" style="position: absolute; left: ' + itemX +
     '; top: ' + itemY + '; width: ' + w + '; height: ' + h + '; visibility: inherit; ';
    if (backCol) str += 'background: ' + backCol;
    str += '" ';
   }
   if (isNS4)
   {
    str += '<layer id="' + itemID + '" left="' + itemX + '" top="' + itemY + '" width="' + 
     w + '" height="' + h + '" visibility="inherit" ';
    if (backCol) str += 'bgcolor="' + backCol + '" ';
   }
   if (borderClass) str += 'class="' + borderClass + '" ';
   
   // Add mouseover and click handlers and finish div/layer.
   str += 'onMouseOver="popOver(' + currMenu + ',' + currItem + ')" onMouseOut="popOut(' +
     currMenu + ',' + currItem + ')" onClick="popClick(' + currMenu + ',' + currItem + ')">';



   // Add contents of item...

   if (target > 0)
   {
    // Set target's parents to this menu item.
    menu[target][0].parentMenu = currMenu;
    menu[target][0].parentItem = currItem;

    // Add a popout indicator - before text so it shows up below text in NS4.
    if (popInd)
    {
     if (isNS4) str += '<layer class="' + textClass + '" left="'+ (w - 15) + '" top="' +
      pad + '">' + popInd + '</layer>';
     else str += '<div class="' + textClass + '" style="position: absolute; left: ' + (w - 15) +
      '; top: ' + pad + '">' + popInd + '</div>';
    }
   }

   // For NS4, if a border is assigned, add a spacer to push border out to layer edges.
   // The text layer must completely overlay this table as well for proper click capturing.
   // Add a link both to generate an onClick event and to stop the ugly I-beam text cursor appearing.
   if (isNS4) str += (borderClass ? '<spacer type="block" width="' + (w - 8) + '" height="' +
    (h - 8) + '">' : '') +
    '<layer left="' + pad + '" top="' + pad + '" width="' + (w - (2 * pad)) + '" height="' +
    (h - (2 * pad)) + '"><a class="' + textClass + '" href="#" ' +
    'onClick="popClick(' + currMenu + ',' + currItem + '); return false" ' +
    'onMouseOver="status=\'\'; return true;">' + text + '</a></layer>';

   // IE4+/NS6 is an awful lot easier to work with sometimes.
   else str += '<div class="' + textClass + '" style="position: absolute; left: ' + pad +
    '; top: ' + pad + '; width: ' + (w - (2 * pad)) + '; height: ' + (h - (2 * pad)) +
    '">' + text + '</div>';

   // Finish off item.
   str += (isNS4 ? '</layer>' : '</div>');

   // Move next item position down or across by this item's length and additional spacing.
   // Subtract 1 so borders overlap slightly.
   if (isVert) itemY += length + spacing - 1;
   else itemX += length + spacing - 1;

  // End loop through items and with([menu[currMenu][currItem]).
  }



  // Now, write the menu to the document depending on browser capabilities.
  // N.B: Still using properties of menu[currMenu][0] like 'ref' etc...
   
  // Insert a div tag to the end of the BODY with menu HTML in place for IE4+.
  if (document.all)
  {
   // Give a small width and height to stop IE4 sizing to full body. Thanks to Jeff Blum
   // for pointing this out. Also, thanks to Paul Maden for helping debug this, apparently
   // the width must be a miniumum of 3 for it to work in IE4.
   document.body.insertAdjacentHTML('beforeEnd', '<div id="menu' + currMenu + 'div" ' +
    'style="position: absolute; width: 3; height: 3; visibility: hidden; z-index: 1000">' +
     str + '</div>');
   ref = getSty('menu' + currMenu + 'div');
  }
  // In NS6+ or other DOM but non-IE browsers, create a new DIV node and add text...
  else if (isDOM)
  {
   var newDiv = document.createElement('div');
   document.body.appendChild(newDiv);
   newDiv.innerHTML = str;
   ref = newDiv.style;
    
   ref.position = 'absolute';
   ref.visibility = 'hidden';
  }
  // In NS4, create a reference to a new layer and write the items to it.
  else if (isNS4)
  {
   ref = new Layer(0);
   ref.document.write(str);
   ref.document.close();
  }

  // Chuck some positions in here. Only really relevant for root menu.
  ref.left = x;
  ref.top = y;
  // Set the default cursor for the menu to be the hand (or 'pointer' if you're the W3C or
  // Mozilla Project and just trying to be difficult :)...
  if (!isNS4) ref.cursor = (document.all ? 'hand' : 'pointer');
  // IE has z-indices assigned already, IE4 doesn't like them done here for some reason.
  if (!document.all) ref.zIndex = 1000;

  // Now items have been written, loop through them again to set up references.
  for (currItem = 1; currItem < menu[currMenu].length; currItem++)
  {
   itemName = 'menu' + currMenu + 'item' + currItem;
   if (isDOM || isIE4) menu[currMenu][currItem].ref = getSty(itemName);
   if (isNS4)
   {
    menu[currMenu][currItem].ref = ref.document[itemName];
    // Also capture clicks on that item layer's document...
    with (ref.document[itemName])
    {
     document.captureEvents(Event.CLICK);
     document.onclick = new Function('popClick(' + currMenu + ', ' + currItem + ')');
    }
   }
  }

 // End loop through menus and with (menu[currMenu][0]).
 }

 // *** CENTRING FUNCTION ***  Uncomment this to centre menus.
 positionMenu()

 // Show the root menu now that's all over. Phew!
 menu[0][0].ref.visibility = 'visible';
}


// Syntaxes:    *** START EDITING HERE, READ THIS SECTION CAREFULLY! ***
//
// menu[menuNumber][0] = new Menu(Vertical menu? (true/false), 'popout indicator', left, top,
// width, padding, 'hover colour', 'background colour', 'border stylesheet', 'text stylesheet');
//
// Left and Top are measured on-the-fly relative to the top-left corner of its trigger, or
// for the root menu, the top-left corner of the page.
//
// menu[menuNumber][itemNumber] = new Item('Text', 'URL', 'link type', length of menu item,
//  additional spacing to next menu item, number of target menu to popout);
//
// If no target menu (popout) is desired, set it to 0. Also, every menu must be targeted only
// once in the code! If you want, the 'colItem' function call in the 'Reopen' sample menu
// is an example constructor, see below in the 'Optional Code' section.
//
// Something that needs explaining - the Vertical Menu setup. You can see most menus below
// are 'true', that is they are vertical, except for the first root menu. The 'length' and
// 'width' of an item depends on its orientation -- length is how long the item runs for in
// the direction of the menu, and width is the lateral dimension of the menu. Just look at
// the examples and tweak the numbers, they'll make sense eventually :).
//
// Something else - the 'link type'. Introduced in v2.0, it was originally the name of a
// target frame. Now, you specify an empty string '' to open the URL in the current window,
// 'js:' to specify a JavaScript function, or a valid reference to a window/frame, e.g.
// 'top.leftFrame' or 'parent.popupWin'. Thanks to Martin J. Cole for suggesting the syntax!

var menu = new Array();

// Default colours passed to most menu constructors (just passed to functions, not
// a global variable - makes things easier to change later in bulk).
var defOver = '#35759B', defBack = '#024B76';

// Default 'length' of menu items - item height if menu is vertical, width if horizontal.
var defLen = 25;


// Menu 0 is the special, 'root' menu from which everything else arises and is positioned.
menu[0] = new Array();
// A non-vertical menu, different coloured menu with no popout indicator, background or border.
// *** MOVE THE MENU AROUND HERE, SEE BELOW FOR CENTRING FUNCTION ***
menu[0][0] = new Menu(false, '', 80, 1, 17, 3, '#024B76', '#024B76', '', 'headText');
menu[0][1] = new Item('Tutorials', 'left.html', 'both2', 50, 20, 8);


menu[8] = new Array();
menu[8][0] = new Menu(true, '&gt', -40, 22, 150, 3, defOver, defBack, 'itemBorder', 'itemText');
menu[8][1] = new Item('Simple Dependence ', 'simple.html', 'simple', defLen, 2, 0);
menu[8][2] = new Item('Medical Study', 'medical.html', 'medical', defLen, 2, 0);
menu[8][3] = new Item('MPG Analysis', 'mpg1.html', 'mpg1', defLen, 2, 0);
menu[8][4] = new Item('MPG Forecasting', 'mpg2.html', 'mpg2', defLen, 2, 0);
menu[8][5] = new Item('Gold Price Change', 'gold.html', 'gold', defLen, 2, 0);
menu[8][6] = new Item('Survey Analysis ', 'applied.html', 'applied', defLen, 2, 0);
menu[8][7] = new Item('Database Marketing', 'direct.html', 'direct', defLen, 2, 0);
menu[8][8] = new Item('Market Basket Analysis', 'mba.html', 'mba', defLen, 2, 0);
menu[8][9] = new Item('Transactional Analysis', 'transactional.html', 'trans', defLen, 2, 0);
menu[8][10] = new Item('Text Analysis', 'text.html', 'both', defLen, 2, 0);
menu[8][11] = new Item('Fraud Detection', 'fraud.html', 'fraud', defLen, 2, 0);
menu[8][12] = new Item('Scheduler', 'scheduler.html', 'sch', defLen, 2, 0);

window.onload = createMenus;
window.onresize = resizeHandler;

// *** OPTIONAL CODE FROM HERE DOWN ***
var popOldWidth = window.innerWidth;
function resizeHandler()
{
 if (!menu[0][0].ref) return;
 
 if (isNS4 && popOldWidth != window.innerWidth) location.reload()

 positionMenu();
}

function positionMenu()
{
 var winWidth = (document.all ? document.body.clientWidth : window.innerWidth)
 menu[0][0].ref.left = (winWidth - winWidth)+50;
 
 // You can extend this code any way you want. Each menu or item has a 'ref' property that
 // is a reference to its style object, so you can move/resize pretty much anything.
}


// End Hide -->


