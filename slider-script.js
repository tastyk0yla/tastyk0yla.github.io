(function() {

    'use strict'; 

    const breakpoint = window.matchMedia( '(min-width: 768px)' );
    let mySwiper; 
    const breakpointChecker = function() { 
        if ( breakpoint.matches === true ) {
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            return;
        } else if ( breakpoint.matches === false ) {
            return enableSwiper();
        }
    };
    
    const enableSwiper = function() { 
        mySwiper = new Swiper('.swiper', {
            spaceBetween: 16,
            followFinger: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.4,
                },
                500: {
                    slidesPerView: 2,
                },
                760: {
                    slidesPerView: 3,
                }
            }
        });  
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })(); 

var resolution = window.matchMedia( 'min-width: 768px)' )
const expandButton = document.querySelector('.slider__button');
const expandButtonTextElement = expandButton.querySelector('.button-text');
const expandButtonIconElement = expandButton.querySelector('img');
var isExpanded = false;
const cardsElement = document.querySelector('.brand-slider__cards');
const bigScreen = window.matchMedia( '(min-width: 1120px)' );

    
const expander = function (height, isExpanded) {    
    if (!isExpanded) {
        cardsElement.style = 'max-height: ' + height + 'px';
        expandButtonTextElement.textContent = 'Скрыть';
        expandButtonIconElement.style = 'transform: rotate(180deg)';
        window.isExpanded = true;        
    } else if (isExpanded) {
        cardsElement.style = 'max-height: 158px';
        expandButtonTextElement.textContent = 'Показать всё';
        expandButtonIconElement.style = 'transform: rotate(0deg)';
        window.isExpanded = false;        
    }    
};


expandButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (bigScreen){
        expander(248, isExpanded);
    } else {
        expander(335, isExpanded);
    }
});
