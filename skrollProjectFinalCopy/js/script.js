$(document).ready(function() {


$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height()) {
   randomSize();
   randomColor();
   randomOpacity();
    $(window).reload;
    $(window).scrollTop(0);
  }
});



function randomSize() {
    var w = Math.round((Math.random() * 50)+1);
    var h = Math.round((Math.random() * 40)+3);
    var width = w + "%";
    var height = h + "%";
 console.log(width);
 console.log(height);
    var all = document.getElementsByClassName('box');
for (var i = 0; i < all.length; i++) {
  all[i].style.width = width;
  all[i].style.height = height;
}
}

randomSize();

 function randomColor(){
 	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 	console.log(hue);
 	var all = document.getElementsByClassName('box');
 	for (var i = 0; i < all.length; i++) {
   all[i].style.backgroundColor = hue;
  }
}
randomColor();


 function randomOpacity(){
 	var opa = (Math.random() * 0.3)+0.03;
 	var all = document.getElementsByClassName('box');
 	for (var i = 0; i < all.length; i++) {
    all[i].style.opacity = opa;
  }
}
randomOpacity();




// $(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() >= $(document).height()) {
//     location.assign("index.html");
//or  $(this).scrollTop(0).reload();
//   }
// });



});

