(function() {
    //burger
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        if(document.documentElement.clientWidth > 900) return
        
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if(!burgerIcon && !burgerNavLink) return

        if(!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        }
        else {
            document.body.classList.remove('body--opened-menu');
        }
    }
    //modal
    const presentIcon = document.querySelector('.about__img-button');
    const modal = document.querySelector('.modal');

    presentIcon.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.add('body--opened-modal');
    }

    function closeModal(e) {

        e.preventDefault();

        if(e.target.closest('.modal__cancel') || e.target.classList.contains('modal'))
        {
            document.body.classList.remove('body--opened-modal');
        }
    }
    //tabs

    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link');

        if(!tabControl) return;

        e.preventDefault();
        if(tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeContent = document.querySelector('.tab-content--show');
        const activeControl = document.querySelector('.tab-controls__link--active');

        if(activeContent)
        {
            activeContent.classList.remove('tab-content--show');
        }
        if(activeControl)
        {
            activeControl.classList.remove('tab-controls__link--active');
        }
        
        tabContent.classList.add('tab-content--show');
        tabControl.classList.add('tab-controls__link--active');
    }
    //accordion
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(element => {
        element.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            
            if(!accordionControl) return;

            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;
            
            if(accordionOpenedItem && accordionOpenedItem !== accordionItem)
            {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if(accordionItem.classList.contains('accordion-list__item--opened'))
            {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
            else 
            {
                accordionContent.style.maxHeight = null;
            }
        });
    });

    // slider gallery
    new Swiper('.gallery__slider', {
        
        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },
    
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            451: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },
        },
    });

    // swiper testimonials 
    new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        
        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,
        },
        
        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        },
    });

    //input mask for telephone
    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);
})();