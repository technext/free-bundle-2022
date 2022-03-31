// javascript Animate onscroll Start
    $(document).ready(function () {
    if (screen.width > 1024) {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    }
    });
(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','stuck');
    };
})).observe(document.querySelector('.trigger'));