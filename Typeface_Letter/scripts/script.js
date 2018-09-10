console.log("hello");


$(document).ready(function(){


/* Main 35 */



/* G2 */
$('#G2 .bar').mouseover(function(){
	
	$("#G2 #bar1").slideUp(1000).delay(800).slideDown(1000);
	$("#G2 #bar2").slideUp(600).delay(800).slideDown(800);

});



/* G3 */

  $("#G3 #dot2").click(function(){
        $("#G3 #dot2").animate({
        	left: '250px',
        });
        $("#G3 #dot2").fadeOut(1000)
    });

/* G4 */

$("#G4 #bar1").click(function(){
	$("#G4 #bar1").fadeOut(1000).delay(1000).slideDown(1000);
	});

/* G5 */

$("#G5 .dot").click(function(){
	$("#G5 .dot").toggle(1000).delay(1000).toggle(1000);
	});

/* G6 */

 $("#G6 .bar").click(function(){
        $("#G6 #bar1").fadeOut("slow");
    	$("#G6 #bar2").fadeOut(2000);
    });

/* G7 */

 $("#G7 .dot").click(function(){
        $("#G7 #dot2").animate({left: '150px'});
        $("#G7 #dot1").animate({right: '250px'});
        $("#G7 #dot3").animate({left: '50px'});
    });

/* G8 */

 $("#G8 #bar1").mouseover(function(){
        $(this).animate({
        	width: '305px'
        });
    });
  $("#G8 #bar1").mouseout(function(){
        $(this).animate({
        	width: '18%'
        });
    });

/* G9 */

 $("#G9 .dot").mouseover(function(){
        $("#G9 #dot2").animate({
        	width: '10px',
        	height: '10px'
        });
    });
  $("#G9 .dot").mouseout(function(){
        $("#G9 #dot2").animate({
        	width: '50px',
        	height: '50px'
        });
    });

/* G10 */
  $("#G10 .dot").click(function(){
        $(this).fadeOut("slow");
    });

/* G11 */
 $("#G11 .bar").click(function(){
        $(this).slideUp(1000);
        $("#G11 #dot1").slideUp(1000);
        $("#G11 #dot2").slideUp(1000);
        $("#G11 #dot3").slideUp(1000);
        $("#G11 .bar").slideUp(1000);
    });

/* G12 */

 $("#G12").hover(function(){
        alert("Gee stop bothering can you"); 
});

/* G13 */
$("#G13 div").dblclick(function(){
        $(this).css("background-color","blue");
    });

/* G14 */

 $("#G14 div").on('mouseover',function(){
    $(this).fadeToggle(200);
});

/* G15 */

$("#G15 div").on({
 mouseleave: function(){
            $(this).css("background-color", "grey");
        }, 
       click: function(){
            $(this).css("background-color", "yellow");
        }  
 });

/* G16 */
  $("#G16 .dot").click(function(){
      $(this).fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
    });

/* G17 */

$("#G17 div").click(function(){
	$("#G17 div").animate({
		width: '50px',
        height: '50px'
        });
  });

/* G18 */

$("#G18 .dot").click(function(){
	$(this).animate({
	height: '50px',
  	width: '100px'
	});
  });

/* G19 */

$("#G19 div").hover(function(){
	$("#G19 div").animate({
		width: '50px',
        height: '50px'
        });
	$("#G19 div").animate({
		top:'0px'
	 });
  });

/* G20 */

$("#G20 div").hover(function(){
	$("#G20 div").animate({
		width: '80px',
        height: '80px'
        });
	$("#G20 div").fadeOut(2000);
  });

/* G21 */
/* G21 */
console.log("hello");


$(document).ready(function(){


/* Main 35 */



/* G2 */
$('#G2 .bar').mouseover(function(){
	
	$("#G2 #bar1").slideUp(1000).delay(800).slideDown(1000);
	$("#G2 #bar2").slideUp(600).delay(800).slideDown(800);

});



/* G3 */

  $("#G3 #dot2").click(function(){
        $("#G3 #dot2").animate({
        	left: '250px',
        });
        $("#G3 #dot2").fadeOut(1000)
    });

/* G4 */

$("#G4 #bar1").click(function(){
	$("#G4 #bar1").fadeOut(1000).delay(1000).slideDown(1000);
	});

/* G5 */

$("#G5 .dot").click(function(){
	$("#G5 .dot").toggle(1000).delay(1000).toggle(1000);
	});

/* G6 */

 $("#G6 .bar").click(function(){
        $("#G6 #bar1").fadeOut("slow");
    	$("#G6 #bar2").fadeOut(2000);
    });

/* G7 */

 $("#G7 .dot").click(function(){
        $("#G7 #dot2").animate({left: '150px'});
        $("#G7 #dot1").animate({right: '250px'});
        $("#G7 #dot3").animate({left: '50px'});
    });

/* G8 */

 $("#G8 #bar1").mouseover(function(){
        $(this).animate({
        	width: '305px'
        });
    });
  $("#G8 #bar1").mouseout(function(){
        $(this).animate({
        	width: '18%'
        });
    });

/* G9 */

 $("#G9 .dot").mouseover(function(){
        $("#G9 #dot2").animate({
        	width: '10px',
        	height: '10px'
        });
    });
  $("#G9 .dot").mouseout(function(){
        $("#G9 #dot2").animate({
        	width: '50px',
        	height: '50px'
        });
    });

/* G10 */
  $("#G10 .dot").click(function(){
        $(this).fadeOut("slow");
    });

/* G11 */
 $("#G11 .bar").click(function(){
        $(this).slideUp(1000);
        $("#G11 #dot1").slideUp(1000);
        $("#G11 #dot2").slideUp(1000);
        $("#G11 #dot3").slideUp(1000);
        $("#G11 .bar").slideUp(1000);
    });

/* G12 */

 $("#G12").hover(function(){
        alert("Gee stop bothering can you"); 
});

/* G13 */
$("#G13 div").dblclick(function(){
        $(this).css("background-color","blue");
    });

/* G14 */

 $("#G14 div").on('mouseover',function(){
    $(this).fadeToggle(200);
});

/* G15 */

$("#G15 div").on({
 mouseleave: function(){
            $(this).css("background-color", "grey");
        }, 
       click: function(){
            $(this).css("background-color", "yellow");
        }  
 });

/* G16 */
  $("#G16 .dot").click(function(){
      $(this).fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
    });

/* G17 */

$("#G17 div").click(function(){
	$("#G17 div").animate({
		width: '50px',
        height: '50px'
        });
  });

/* G18 */

$("#G18 .dot").click(function(){
	$(this).animate({
	height: '50px',
  	width: '100px'
	});
  });

/* G19 */

$("#G19 div").hover(function(){
	$("#G19 div").animate({
		width: '50px',
        height: '50px'
        });
	$("#G19 div").animate({
		top:'0px'
	 });
  });

/* G20 */

$("#G20 div").hover(function(){
	$("#G20 div").animate({
		width: '80px',
        height: '80px'
        });
	$("#G20 div").fadeOut(2000);
  });

/* G21 */
$("#G21 div").hover(function(){
	$("#G21 .dot").animate({
	  width: "toggle"
	  });
  });

/* G22 */
$("#G22 div").hover(function(){
	$("#G22 div").animate({
		width: '50px',
        height: '50px'
        });
	$("#G22 .bar").hide(500);
  });

/* G23 */
$("#G23 div").hover(function(){
	 $("#G23 #dot1").fadeOut();
    $("#G23 #dot2").fadeOut(1000);
    $("#G23 #dot3").fadeOut(3000);
        
  });

/* G24 */
  $("#G24 div").click(function(){
        $("#G24 .dot").fadeTo(1000, 0.3);
   });
/* G25 */
 
$("#G25 div").hover(function(){
	$("#G25 div").animate({
		width: '50px',
        height: '50px'
        });
	$("#G25 div").slideToggle();
  });

/* G26 */

$("#G26 div").click(function(){
	$(this).css("background-color", "blue");
	$(this).slideUp(3000).delay(300).slideDown(3000);
  });

/* G27 */

$("#G27 .dot").click(function(){
	
	$(this).animate({
		width: '100px',
        height: '100px'
	});
	$(this).fadeOut(2000).delay(300).fadeIn(2000);

	$(this).animate({
		width: '50px',
        height: '50px'
       }); 
  });

/* G28 */
$("#G28 .bar").click(function(){
	$("#G28 #dot1").fadeTo(1000, 0.6);
	$("#G28 #dot2").fadeTo(2000, 0.4);
	$("#G28 #dot3").fadeTo(4000, 0.1);
	}); 

/* G29 */
$("#G29 div").click(function(){
	$("#G29 #bar1").animate({
		right: '0px'
	});
	$("#G29 #bar2").animate({
		left: '0px'
	});
});

/* G30 */

$("#G30 div").click(function(){
	$("#G30 #bar1").animate({
		height: '200px'
	});
	$("#G30 #bar2").animate({
		left: '0px'
	});
});

/* G31 */

$("#G31 div").click(function(){
 	$("#G31 div").animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
});
/* G32 */
$("#G32 div").hover(function(){
	$(this).css("background-color","red");
	$(this).fadeOut(1000).delay("slow").fadeIn();
});

/* G33 */


/* G34 */
/* G35 */


/* Side 35 */

$('#G1 .bar').mouseover(function(){
	
	$("#dot1").animate({
	opacity:".2",
	
	}, 200);

	$("#dot2").animate({
	opacity:".2",
	
	}, 400);

	$("#dot3").animate({
	opacity:".2",
	
	}, 200);

});

$('#G1 .bar').mouseout(function(){
	
	$("#dot1").animate({
	opacity:"1",
	}, 200);

	$("#dot2").animate({
	opacity:"1",
	
	}, 400);

	$("#dot3").animate({
	opacity:"1",
	
	}, 200);


});




});


/* Side 35 */

$('#G1 .bar').mouseover(function(){
	
	$("#dot1").animate({
	opacity:".2",
	
	}, 200);

	$("#dot2").animate({
	opacity:".2",
	
	}, 400);

	$("#dot3").animate({
	opacity:".2",
	
	}, 200);

});

$('#G1 .bar').mouseout(function(){
	
	$("#dot1").animate({
	opacity:"1",
	}, 200);

	$("#dot2").animate({
	opacity:"1",
	
	}, 400);

	$("#dot3").animate({
	opacity:"1",
	
	}, 200);


});




});

