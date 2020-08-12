const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const backscreen = document.querySelector('.tv-shows');



//Arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide)=>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideButton = targetIndex => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');

    }
    else if(targetIndex === slides.length-1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden'); 
    }
}
nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextSlideIndex = slides.findIndex(slide => nextSlide === slide);
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideButton(nextSlideIndex);
})

prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevSlideIndex = slides.findIndex(slide => prevSlide === slide);
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideButton(prevSlideIndex);
})

dotsNav.addEventListener('click', e=>{
    const targetDot = e.target.closest('button');

    if(!targetDot)
        return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideButton(targetIndex);

})
window.addEventListener('resize', e=>{

    let sectionHeight = backscreen.offsetHeight;
    let sectionWidth = backscreen.offsetWidth;

    console.log(sectionWidth);
})