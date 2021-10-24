;(function(){

    //Скрипт меню

    const burgerMenu = document.querySelector('.burger-button ')
    const mobileMenu = document.querySelector('.header__mobile-menu')

    if (burgerMenu) {
        burgerMenu.addEventListener('click', ()=>{
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        })
    
        window.addEventListener('click', e => { 
            const target = e.target 
            if (!target.closest('.header')) { 
                mobileMenu.classList.remove('active')
                burgerMenu.classList.remove('active')
            }
          })
    }

   


    // Открывание попап входа

    const loginBtn = document.querySelectorAll('.login-btn-call');
    const popup = document.querySelector('.popup');
    const modal = document.querySelector('.modal');
    const loginWindow = document.querySelector('.popup__login');
    const registerLink = document.querySelector('.register-link'); 
    const registerWindow = document.querySelector('.popup__register');
    const closePopupBtn = document.querySelectorAll('.popup-close-btn');
    const documentCall = document.querySelectorAll('.document-popup-call');
    const popupSlider = document.querySelector('.popup__slider ')

    if (loginBtn) {
        loginBtn.forEach(function(item){
            item.addEventListener('click', (e)=>{
                popup.classList.toggle('active');
                modal.classList.toggle('active');
                loginWindow.classList.toggle('active');
                document.body.classList.toggle('lock')
                e.preventDefault();
            });
        });
    }

    if(registerLink) {
        registerLink.addEventListener('click', ()=> {
            loginWindow.classList.remove('active')
            registerWindow.classList.toggle('active')
        })
    }
    
    if (modal) {
        modal.addEventListener('click', ClosePopup)
    }

    if (closePopupBtn) {
        closePopupBtn.forEach(function(item){
            item.addEventListener('click', ClosePopup)
        })
    }
    
    function ClosePopup() {
        document.body.classList.remove('lock')
        const windowAnchor = document.querySelectorAll('.popup-window');
        windowAnchor.forEach(function(item){
            item.classList.remove('active')
        })
    }

    const linkAplication = document.querySelectorAll('.link-aplication');
    const windowAplication = document.querySelector('.popup__aplication')

    linkAplication.forEach(function(item){
        item.addEventListener('click', (e)=>{
            document.body.classList.toggle('lock')
            popup.classList.toggle('active');
            modal.classList.toggle('active');
            windowAplication.classList.toggle('active');
            
            e.preventDefault();
        })
    })

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            ClosePopup();
        }
    };

    documentCall.forEach(function(item){
        item.addEventListener('click', (e)=>{
            document.body.classList.toggle('lock')
            popup.classList.toggle('active');
            modal.classList.toggle('active');
            popupSlider.classList.toggle('active');
            e.preventDefault();
        })
    })
    // Слайдер на Главной

    const sliderCheck = document.querySelector('.main-slider__container');

    if (sliderCheck) {
        const mainSlider = new Swiper('.main-slider__container', {
            // Optional parameters
            loop: true,
            spaceBetween: 10,
            effect: 'fade',
            autoHeight: true,
            autoplay: {
                delay: 7500,
            },
            // Navigation arrows
            navigation: {
                prevEl: '.slide-prev-btn',
             nextEl: '.slide-next-btn',
            },
          });
    }

    // Слайдер-документов

    const sliderDocument = document.querySelector('.popup-slider__containter');

    if (sliderDocument) {
        const sliderDocumentInitial = new Swiper('.popup-slider__containter', {
            // Optional parameters
            loop: true,
            spaceBetween: 10,
            effect: 'fade',
            autoHeight: true,
            // Navigation arrows
            navigation: {
                prevEl: '.slide-prev-btn',
                nextEl: '.slide-next-btn',
            },
          });


          const slideLink = document.querySelectorAll('.need-slide'); 
    
          slideLink.forEach(function(item) {
              item.addEventListener('click', ()=>{
                  let numberSlide = item.getAttribute('data-slide');
                  sliderDocumentInitial.slideTo(numberSlide ,300 , true )
              })
          })

    }

    

    //Переключение темы

    const LightBtn = document.querySelector('.light-selector')
    const link = document.getElementById('theme-link');

    LightBtn.addEventListener('click', function() { ChangeTheme();});



    function ChangeTheme() {

        LightBtn.classList.toggle('active');

        if (LightBtn.classList.contains('active')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'light-theme.css';
            link.id ='light-theme'
            document.head.appendChild(link);
        } else {
            const link = document.getElementById('light-theme');
            link.remove();
        }
    
    }

   

})();