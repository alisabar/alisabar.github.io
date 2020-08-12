$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})


const back = document.querySelector('section.tv-shows');
let sectionHeight = back.offsetHeight;
let sectionWidth = back.offsetWidth;

back.addEventListener("resize", function(){
     sectionHeight = back.offsetHeight;
     sectionWidth = back.offsetWidth;
     console.log("("+sectionHeight+","+ sectionWidth+")");

})