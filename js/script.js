var swiper = new Swiper(".cards", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: ".latest-video .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },

        400: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },

        431: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },


        536: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },


        580: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },



        633: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },



        690: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },


        700: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },

        775: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },

        857: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },


        935: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },

        1006: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },

        1070: {
            slidesPerView: 2.7,
            spaceBetween: 10,
        },

        1140: {
            slidesPerView: 2.9,
            spaceBetween: 10,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});


function obterLarguraPagina() {
    const largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return largura;
}

window.addEventListener('resize', () => {
    const btn_comprar = document.querySelector('.btn-comprar')
    const largura = obterLarguraPagina();
    
    if (largura <= 500) {
        btn_comprar.textContent = 'Comprar'
    } else {
        btn_comprar.textContent = 'Adicionar ao carrinho'
    }
});