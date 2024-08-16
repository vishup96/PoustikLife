// <!-- toggle nav-bar initialize js start--!>
    
        let navbarToggle = document.querySelector('.navbar-toggler');
        navbarToggle.addEventListener("click", ()=> {
            document.querySelector('.collapse-content').classList.toggle('active')
        })

        let closeNav = document.querySelector('.close_nav');
        closeNav.addEventListener("click", () => {
            document.querySelector('.collapse-content').classList.remove('active')
        });


    // <!-- toggle nav-bar initialize js ends-->



    // <!-- swipper1 initialize js start-->
    
        let swiper1 = new Swiper('.mySwiper1', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,


            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // autoplay 
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
           
        });
    
    // <!-- swipper1 initialize js ends-->



    // <!-- swipper2 initialize js start-->

        let swiper2 = new Swiper('.mySwiper2', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button1',
                prevEl: '.swiper-button2',
            },
            // autoplay 
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 980px
                980: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 1280px
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
            }
        });

    // <!-- swipper2 initialize js ends-->

        

    // <!-- swipper3 initialize js start-->

        let swiper3 = new Swiper('.mySwiper3', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button1',
                prevEl: '.swiper-button2',
            },
            // autoplay 
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 980px
                980: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 1280px
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
            }
        });

    // <!-- swipper3 initialize js ends-->


    // <!-- swipper4 initialize js start-->

    let swiper4 = new Swiper('.mySwiper4', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button1',
            prevEl: '.swiper-button2',
        },
        // autoplay 
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 980px
            980: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        }
    });

// <!-- swipper4 initialize js ends-->
  