
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.button__link')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    // бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.nav_list-burger')
        const burgerNavLink = e.target.closest('.nav__list-item-mobai')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1250) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }


    new Swiper('.reviews__swiper', {

        spaceBetween: 20,
        slidesPerView: 1,

        pagination: {
            el: '.reviews__pagination',
            type: 'bullets',
        },

        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },

        breakpoints: {
            790: {
                slidesPerView: 2,
            },
            
        }
    });