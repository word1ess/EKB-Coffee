//slider
const slider = document.querySelector(".slider")
if(slider){
    $(document).ready(function(){
        $('.slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            arrows: false,
        });
        $('.single-item').slick();
    });
}

//Скрол для "забронировать"
try {
    const book = document.querySelector('.book');
    const bookBtn = document.getElementById('bookBtn');

    function setScrollIntoViewOptions(){
        book.scrollIntoView({
            block: "center",
            behavior: "smooth",
        })
    }
    bookBtn.addEventListener("click", setScrollIntoViewOptions)
} catch (error) {};

//Анимация карточек
const cardCardsAll = document.querySelectorAll('.card__cards');
function hoverGrayMove(){
    const cardImg = this.querySelector('.card__img');
    const cardText = this.querySelector('.card__title');
    cardImg.style.cssText = `
        filter:grayscale(0%); 
        transform: scale(1.2);`;
    cardText.style.cssText = `
        postion:absolute; 
        z-index: 2;
        transform: translate3d(0px, 100%, 0px);
        transition: ease 1s;`;
};
function hoverGrayOut(){
    const cardImg = this.querySelector('.card__img');
    const cardText = this.querySelector('.card__title');
    cardImg.style.cssText = `
        filter: grayscale(100%);
        transform: scale(1);`;
    cardText.style.cssText = `        
        transform: translate3d(0px, 0px, 0px);
        transition: ease 1s;`;
};

for(let i = 0; i < cardCardsAll.length; i++){
    const card = cardCardsAll[i];
    card.addEventListener('mousemove', hoverGrayMove)
    card.addEventListener('mouseout', hoverGrayOut);
};

// Анимация табов на галерее
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item');
function tabClick(item){
    item.addEventListener("click", function(){
        let currBtn = item;
        let tabId = currBtn.getAttribute('data-tab');
        let currTab = document.querySelector(tabId);

        if(!currBtn.classList.contains('active')){
            tabsBtn.forEach(function(item){
                item.classList.remove('active')
            });
            tabsItem.forEach(function(item){
                item.classList.remove('active')
            })
            currBtn.classList.add('active');
            currTab.classList.add('active');
        };
    });
};

tabsBtn.forEach(tabClick);

//Анимация всплытия 
const animItems = document.querySelectorAll('.animItems')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 150);
}

//карта
// When the window has finished loading create our google map below
try {
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        
        var mapOptions = {
        // How zoomed in you want the map to start at (always required)
            zoom: 11,

        // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#e5c163"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#e5c163"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e5c163"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#e5c163"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.querySelector('.js-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
}
} catch (error) {
    
}

// для инпута с телефоном
const phoneMask = document.querySelector('.phone-mask');
if(phoneMask){
    $(document).ready(function(){
        $('.phone-mask').mask('+7 (900) 000 00 00');
    });
};
    

// меню бургер
$(document).ready(function(){
    $('.header__burger').click(function name(event) {
        $('.header__burger,.header__menu').toggleClass('burger-active');
    });
});

// подвал
if (window.screen.width < 992){
    $(document).ready(function(){
        $('.block__title').click(function name(event) {
            $(this).toggleClass('footer-active').next().slideToggle(300);
        });
    });
}
