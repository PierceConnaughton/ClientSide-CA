$(document).ready(function() {
 //hide img 1 on click
 $("#img1").click(function(){

		
		$(this).children().hide();	

	});
    
    //change background too yellow and bottom border to 20px yellow groove of the element next to img 1 on mouse enter 
    $("#img1").mouseenter(function(){
        
        $(this).next().css("background","yellow").css("border-bottom","groove 20px yellow");
        
    });
    
    //change border and word spacing and the rotation of the element next to img 2 on mouse leave
        $("#img2").mouseout(function(){
        
        $(this).next().css("border","solid 2px black").css("transform", "rotate(20deg)").css("word-spacing","100px");
        
    });
    
    //on key down when on p2 change opacity text shadow padding and text align last
    $("#p2").mousemove(function(){
        $(this).css("opacity","0.2").css("text-shadow", "2px 2px #FF0000").css("padding","10px").css("text-align-last","right");
});
    
    //on mouse down on p3 have the text align center
      $("#p3").mousedown(function(){
        $(this).css("text-align","center").css("color","magenta");
});
    
    //on mouse up press have the p3 text underlined the line height to 1px the outlins style to solid and outline color to red
          $("#p3").mouseup(function(){
        $("[id=p3]").css("text-decoration","underline").css("lineHeight", "1px").css("outline-style","solid").css("outline-color","red");
              
            
});
    
        //when p4 is double clicked the padding on the left is 20px and visibility hidden
          $("#p4").dblclick(function(){
        $(this).css("padding-left","20px").css("visibility","hidden");
});
    
    //on logo click animate it with opacity height width and margin changed at slow rate
    $("#logo").click(function(){
  $(this).animate({opacity: "0.2",height: "+=50px",width: "+=50px",marginLeft: "0.6in"},"slow");
});
    
    //on logo double click change opacity and background color of widget
    $("#logo").dblclick(function(){
        $("#widget").css("opacity","0.5").css("background","red");
});

    
    
    //when font weight is called increase font weight too 900 the writing mode to vertical and border left too dotted green
   function fontWeight() {
    $(this).css("font-weight","900").css( "writing-mode", "vertical-rl").css("border-left","10px dotted green");
}
//if garden link is mouse entered the font weight method will trigger
$('#gardenLink').mouseenter(fontWeight); 
   
    
    
    //when letter spacing is called have letter spacing set too 5px the cursor set to wait and border right dashed 5px blue
    function letterSpacing() {
        $(this).css("letter-spacing","5px").css("cursor","wait").css("border-right","dashed 5px blue");
    }
    //if outdoorlink is mouse leaved letter spacing method is called
    $('#outdoorLink').mouseleave(letterSpacing);
    
    
    
    
    //when you hover over indoor link on the hover over have p element with text appear and when you hover back out
    //that p element is removed
    $( "#indoorLink" ).hover(
  function() {
    $( this ).append( $( "<p> Hover Text </p>" ) );
  }, function() {
    $( this ).find( "p" ).last().remove();
  }
);
    
  
    
   //on click of shopping guides link have an ajax get request sent to find a table and display the result in the console and also append
    //it to my dynamic table div
    
  $("#shoppingGuidesLink").click(function() {
    var displayResources = $("#display-resources");

    displayResources.text("Loading data from JSON source...");

    $.ajax({
      type: "GET",
      url: "https://api.myjson.com/bins/owmcc", // Using myjson.com to store the JSON
      success: function(result) {
        console.log(result);
        var output =
          "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].name +
            "</td><td>" +
            result[i].provider +
            "</td><td>" +
            result[i].url +
            "</td></tr>";
        }
        output += "</tbody></table>";

        displayResources.html(output);
        $("#myDynamicTable").addClass("table");
          $("#myDynamicTable").append(result);
          
      }
    });
  });


   
    //on double click of contact link have a var with multiple text created put that txt in an object
    //via json and then append the text too contact link
    $("#contactLink").dblclick(function(){
var txt = '{"name":" Pierce", "age":19, "town":"Sligo"}'
var obj = JSON.parse(txt);
$('#contactLink').append(obj.name + ", " + obj.age + ", " + obj.town);
    });
    
    //on the click of the second p element have margin top be 25px border solid 2px solid black and box shadow set to 5px and 10 px and font variant too small caps and text indent set too 30%
    $("p:eq(1)").click(function(){
    $("p:eq(1)").css("margin-top","25px").css( "border","solid 2px black").css( "box-shadow","5px 10px").css("font-variant","small-caps").css("text-indent","30%");
});
    
    //on click of my para class empty the my div class
    $(".mypara").click(function() {
		 
	          $(".mydiv").empty();
	});
    
    //when my div class is entered put the elements in my div into x
    $(".mydiv").mouseenter(function() {
		
		x = $(this).detach();
	});
	
    //when my div 2 is clicked put the elements of x into the copyright class and set cpyright css too text transform too uppercase and margin to 20px
	$(".mydiv2").click(function() {
		$(".copyright").after(x).css( "text-transform", "uppercase").css("margin","20px");
		
	});
    
    
    
    
    
     
    
 
    
    
   
    
     });
    
    
    
    
