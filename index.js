
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        mouseDrag:true,
        navText : [
            '<i class="fa fa-angle-left  aweCarIconL" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right aweCarIconR" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    $(".testmonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        mouseDrag:true,
        navText : [
            '<i class="fa fa-angle-left test-car-icon me-3" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right test-car-icon" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });


    
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        mouseDrag:true,
        navText : [
            '<i class="fa fa-angle-left team-car-icon team-car-icon-l" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right team-car-icon team-car-icon-r" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            }
        }
    });


    // project js
    // document.addEventListener("click", (e)=>{
    //     let 
    //     target = e.target.dataset.name;
    //     console.log(target)
    //     let id = document.querySelector(target);
    //     if(id.target){
    //     }
    // })
