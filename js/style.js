




  // about section start
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var details1 = document.getElementById("details1");
  var details2 = document.getElementById("details2");
  var details3 = document.getElementById("details3");
  
  button1.addEventListener("click", function() {
    details1.style.display = "block";
    details2.style.display = "none";
    details3.style.display = "none";
    this.classList.add("clicked");
    document.getElementById("button2").classList.remove("clicked");
    document.getElementById("button3").classList.remove("clicked");
  
  });
  
  button2.addEventListener("click", function() {
    details1.style.display = "none";
    details2.style.display = "block";
    details3.style.display = "none";
    this.classList.add("clicked");
    document.getElementById("button1").classList.remove("clicked");
    document.getElementById("button3").classList.remove("clicked");
  });
  
  button3.addEventListener("click", function() {
    details1.style.display = "none";
    details2.style.display = "none";
    details3.style.display = "block";
    this.classList.add("clicked");
    document.getElementById("button1").classList.remove("clicked");
    document.getElementById("button2").classList.remove("clicked");
  });
// about end


  $('.my_slider_t').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: 'linear',
    prevArrow:false,
    nextArrow:false,
    
    
    });

   

    $('.main').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
    });

    var mixer = mixitup('.content');
 

  
  // Add class "animated" to elements after page load
window.onload = function() {
    var elements = document.getElementsByClassName("animated");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("animated");
    }
  }
  



  

  
  

    
