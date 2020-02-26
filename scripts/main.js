// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function navigateMenu(event) {
  var menu = document.querySelectorAll(".nav_link");
  if (!event.classList.contains("active")){ 
    for(i=0; i<menu.length; i++) { 
      menu[i].classList.remove("active");        
    }
    event.classList.add("active");
  }    
}
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ 
  	this.classList.toggle("expanded"); quad.classList.toggle("full") 
  }); 
}

$(window).load(function() {
    $("#flexiselDemo1").flexisel();
});

$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    $(function(){
         $('.up').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 1000);
        });
    }); 