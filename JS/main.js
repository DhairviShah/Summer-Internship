// $('.panel-collapse').on('show.bs.collapse', function () {
//   $(this).siblings('.panel-heading').addClass('active');
// });

// $('.panel-collapse').on('hide.bs.collapse', function () {
//   $(this).siblings('.panel-heading').removeClass('active');
// });

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/*****productslider2 */

$('.productslider2').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  autoplay:false,
 });

/******product slider for index page */
$('.product_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    


        });
        $('.testimonials_slider').slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
        //Slick Carousel Controllers
$(".testimonial-reel").slick({
  centerMode: true,
  centerPadding: "40px",
  dots: true,
  slidesToShow: 3,
  infinite: true,
  arrows: true,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
        
    $('.single_item').slick({
    infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows:true,
    autoplay:false,
    


        });

        function myFunction(imgs) {
            var expandImg = document.getElementById("expandedImg");
            expandImg.src = imgs.src;
          }

/**********client slider************/

 $('.client_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
          

/******image***** */


function zoomEffect(){
        
    $("#expandedImg").mouseover(function(){
    var ImageSrc = $(this).attr('src');
    $(".img-zoom-result").show();      
    

imageZoom("expandedImg", "myresult");

function imageZoom(imgID, resultID) {
var img, lens, result, cx, cy;
img = document.getElementById(imgID);
result = document.getElementById(resultID);
/*create lens:*/
lens = document.createElement("DIV");
lens.setAttribute("class", "img-zoom-lens");
/*insert lens:*/
img.parentElement.insertBefore(lens, img);
/*calculate the ratio between result DIV and lens:*/
cx = result.offsetWidth / lens.offsetWidth;
cy = result.offsetHeight / lens.offsetHeight;
/*set background properties for the result DIV:*/
result.style.backgroundImage = "url('" + ImageSrc + "')";
result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
/*execute a function when someone moves the cursor over the image, or the lens:*/
lens.addEventListener("mousemove", moveLens);
img.addEventListener("mousemove", moveLens);
/*and also for touch screens:*/
lens.addEventListener("touchmove", moveLens);
img.addEventListener("touchmove", moveLens);
function moveLens(e) {
  var pos, x, y;
  /*prevent any other actions that may occur when moving over the image:*/
  e.preventDefault();
  /*get the cursor's x and y positions:*/
  pos = getCursorPos(e);
  /*calculate the position of the lens:*/
  x = pos.x - (lens.offsetWidth / 2);
  y = pos.y - (lens.offsetHeight / 2);
  /*prevent the lens from being positioned outside the image:*/
  if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
  if (x < 0) {x = 0;}
  if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
  if (y < 0) {y = 0;}
  /*set the position of the lens:*/
  lens.style.left = x + "px";
  lens.style.top = y + "px";
  /*display what the lens "sees":*/
  result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
}
function getCursorPos(e) {
  var a, x = 0, y = 0;
  e = e || window.event;
  /*get the x and y positions of the image:*/
  a = img.getBoundingClientRect();
  /*calculate the cursor's x and y coordinates, relative to the image:*/
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  /*consider any page scrolling:*/
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return {x : x, y : y};
}
} 
})
$("#expandedImg").mouseout(function(){
$(".img-zoom-result").hide();
})  


} 



$(document).ready(function () {


if (screen.width > 991) {
   
        zoomEffect();
}
else {
  
}

});

/*********PRISE RANG SLIDER  */

// Code By Webdevtrick ( https://webdevtrick.com )
(function() {
 
  var parent = document.querySelector(".price-slider");
  if(!parent) return;
 
  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");
 
  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);
 
      if (slide1 > slide2) {
		[slide1, slide2] = [slide2, slide1];
      }
 
      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });
 
  numberS.forEach(function(el) {
    el.oninput = function() {
		var number1 = parseFloat(numberS[0].value),
		number2 = parseFloat(numberS[1].value);
		
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }
 
      rangeS[0].value = number1;
      rangeS[1].value = number2;
 
    }
  });
 
})();

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 100) {
		$("header").addClass("");
	} else {
		$("header").removeClass("");
	}
});

/*******FOR OTP********/
