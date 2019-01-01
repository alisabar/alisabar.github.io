

$(document).ready(function(){

  $(window).scroll(function(){
       if ($(document).scrollTop() > 90) {
            $("span").addClass("head");
            $(".social").addClass("social-magic");
            $(".thanks").addClass("thanks-magic");
            var i;
            for (i = 1; i <= 3; i++) {
              
                var x=i;
                 console.log("i: "+i+" x: "+x);

                $("li:nth-child("+i+")").css({ "animation-name": "fade-in","animation-duration":"2s",
                    "animation-delay":x+"s","animation-fill-mode":"forwards"});
            }


        } 
  });
  setTimeout(function(){
    setInterval(function(){
        $(".scroll-hint").toggleClass("hide");
    }, 600);
  },4000);

});
