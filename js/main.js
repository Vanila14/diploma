
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


    new Swiper('.reviews__swiper', {

        spaceBetween: 20,
        slidesPerView: 2,

        pagination: {
            el: '.reviews__pagination',
            type: 'bullets',
        },

        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },

        // breakpoints: {
        //     601: {
        //         slidesPerView: 3,
        //     },
        //     801: {
        //         spaceBetween: 32,
        //     },
        //     1101: {
        //         slidesPerView: 4,
        //     }
        // }
    });