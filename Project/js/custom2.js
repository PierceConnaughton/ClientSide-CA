// JavaScript Document
"use strict";
(function (){
    images();
    document.getElementById('remove1').addEventListener("mouseover", removeElement1, false);
    document.getElementById('remove2').addEventListener("mouseover", removeElement2, false);
    alterDivs();
    document.getElementById('create').addEventListener("click", createTable, false);
    
    }());

//api I added two more bars,set the barchart to line chart,set how fast the chart will display,set the chart too dark mode,set the chart too display from right too left 

ZC.LICENSE=["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];// window.onload event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', () => {
  // Javascript code to execute after DOM content
  
  // full ZingChart schema can be found here:
  // https://www.zingchart.com/docs/api/json-configuration/
  const myConfig = {
    type: 'line',
      theme: 'dark',
    title: {
      text: 'Happiness on certain days',
      fontSize: 24,
        fontFamily: 'sans',
        
    },
    legend: {
			draggable: true,
    },
    scaleX: {
      // set scale label
      label: { text: 'Days' },
      // convert text on scale indices
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    scaleY: {
      // scale label with unicode character
      label: { text: 'Happiness Levels' }
    },
		plot: {
      // animation docs here:
      // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
      animation:{
         
          effect: "ANIMATION_SLIDE_LEFT", 
        method: 'ANIMATION_STRONG_EASE_OUT',
        sequence: 'ANIMATION_BY_NODE',
        speed: 1000,
      }
    },
      
    series: [
      {
        // plot 1 values, linear data
        values: [100,90,34,26,27,37,84],
        color: "red",
        text: 'Week 1',
      },
      {
        // plot 2 values, linear data
        values: [90,42,33,49,35,47,35],
        text: 'Week 2'
      },
      {
        // plot 2 values, linear data
        values: [15,22,13,33,44,27,31],
        text: 'Week 3'
      },
        {
        // plot 2 values, linear data
        values: [45,62,33,37,23,87,91],
        text: 'Week 4'
      },
        
        {
        // plot 2 values, linear data
        values: [34,75,96,91,11,46,80],
        text: 'Week 5'
      }
    ]
  };
    
 

  // render chart with width and height to
  // fill the parent container CSS dimensions
  zingchart.render({ 
    id: 'myChart', 
    data: myConfig, 
    height: '100%', 
    width: '100%' 
  });
    
    
});

function createTable(){
    var img = document.createElement("img");
img.src = "images/images2/Happy%20Life.jpg";
    
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 2; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 2; j++) {
        
        if(j == 1 && i == 1){
            td.style.backgroundColor="yellow";
        }
        
        if(j == 0 && i == 1){
            td.append(img);
        }
        
        
      var td = document.createElement('TD');
      td.width = '75';
        td.height = '75';
        
      
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}


function alterDivs()
{
   var divs = document.getElementsByTagName("div");
for (var i=0; i < divs.length; i++) {
    divs[i].ondblclick = alterDivs2;
}
}

function alterDivs2()
{
    //get all paragraphs
    var x = document.getElementsByTagName('div');
	for (var i=0; i<x.length; i++)
	{
		//for each paragraph change its color and size
        x[i].setAttribute("style", "textAlign: right");
    x[i].setAttribute("style", "outlineStyle: dotted");
	
	x[i].style.outlineColor="red";
	x[i].style.letterSpacing="5px";
	x[i].style.paddingBottom="5cm";
    x[i].style.lineHeight="2px";
		
	}
}

function removeElement1()
{
    var x = document.getElementById('remove1');
    x.remove();
}
function removeElement2()
{
     var x = document.getElementById('remove2');
    x.remove();
}

function images(){
    
    //Creating image elements
    var elem = document.createElement("img");
    
    
 //setting image elements   
elem.setAttribute("src", "images/images2/Happy%20Life.jpg");
elem.setAttribute("height", "768");

elem.style.border="solid 2px balck";
elem.style.filter="blur(8px)";
elem.style.filter="contrast(200%)";
    

    
var x = document.getElementById('placehere');
    x.appendChild(elem);	
  
}

