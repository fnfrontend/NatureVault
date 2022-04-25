AOS.init({
    once: true,
});


$(document).on('click', '.faq-head', function(){
    $(this).parent('.faq-item').toggleClass('active');
})


$(window).bind('scroll',function(e){
    parallaxScrollImpact();
    //parallaxScrollVision();

    let elem = document.getElementsByClassName('vision')[0];
    let windowHeight = window.innerHeight;
    let viewportOffset = elem.getBoundingClientRect();
    let top = viewportOffset.top; 
    if(top < windowHeight){ 
        elem.classList.add('in-viewport');
    } else{
        elem.classList.remove('in-viewport');
    }
});

function parallaxScrollImpact(){
   let scrolled = ($(window).scrollTop() - $('.impact-section').position().top) - $('.impact-section').height();
   $('.impact-bg').css('top',(0-(scrolled*0.5))+'px');
   $('.impact-text').css('top',(0-(scrolled*0.1))+'px');
}

function parallaxScrollVision(){
    let scrolled = ($(window).scrollTop() - $('.roadmap-section').position().top) - $('.roadmap-section').height();
    $('.vision').css('top',(0-(scrolled*0.1))+'px');
}



