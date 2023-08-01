$(document).ready(function () { 
async function handleSubmit(event) {
  fetch(event.target.action, {
    method: form.method,
    body: data,
  })
}

$('document').ready(function(){
  $("#home1").hover(function(){
    $("#home2").stop().fadeIn();
  }, function(){
    $('#home2').stop().fadeOut(0.1);
  }); 
  $("#brands1").hover(function(){
    $("#brands2").stop().fadeIn();
  }, function(){
    $('#brands2').stop().fadeOut(0.1);
  }); 
  $("#partners1").hover(function(){
    $("#partner2").stop().fadeIn();
  }, function(){
    $('#partner2').stop().fadeOut(0.1);
  });
  $("#resources1").hover(function(){
    $("#resources2").stop().fadeIn();
  }, function(){
    $('#resources2').stop().fadeOut(0.1);
  });
  $("#services1").hover(function(){
    $("#services2").stop().fadeIn();
  }, function(){
    $('#services2').stop().fadeOut(0.1);
  });
  $("#contact1").hover(function(){
    $("#contact2").stop().fadeIn();
  }, function(){
    $('#contact2').stop().fadeOut(0.1);
  }); 
}); 

/* script for running fade in animation*/
window.sr = ScrollReveal();
      sr.reveal(".anim",{ easing:'ease-in', delay: 500});

      var form = document.getElementById('formData');
      form.addEventListener("submit", handleSubmit)
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else { 
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggle").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".products").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});



function openBrand(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function(){
  $(".moveTo").click(function(){
      var elemId = $(this).attr('href')
      $(elemId).find('a:first').click();
  });
});

// Add active class to the current button (highlight it) No clue why i have to move it here in order for it not to highlight the final button all the time
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
