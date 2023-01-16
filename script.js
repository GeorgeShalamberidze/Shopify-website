let faq = document.getElementsByClassName('question_section')
let carrots = document.getElementsByClassName('carrot')
let answers = document.getElementsByClassName('answer_section')
let navItems = document.getElementsByClassName('navbar_item')
let burgerButton = document.getElementById("burger_menu")
let sidebarMenu = document.getElementById('sidebar_menu')
let closeButton = document.getElementById('close_button')
let customer4 = document.getElementById('customer4small')

const manageNavItems = () => {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
            let count = 0;
            while (count < navItems.length) {
                navItems[count++].classList.remove('active')
            }
            navItems[i].classList.add('active')
        })
    }
}

const manageFAQ = () => {
    for (let i = 0; i < faq.length; i++) {
        faq[i].addEventListener('click', () => {
            let sibling = faq[i].nextElementSibling
            let carrot = faq[i].lastElementChild
    
            faq[i].classList.toggle('open')
    
            if (sibling.style.display === "block") {
                carrot.src = "./assets/img/carrot_down.png"
                sibling.style.display = "none";
    
            } else {
                carrot.src = "./assets/img/carrot_up.png"
                sibling.style.display = "block"
            }
        })
    }
}

const manageBurgerMenuClicks = () => {
    burgerButton.addEventListener('click', () => {
        sidebarMenu.classList.remove('closed')
    })
    
    closeButton.addEventListener('click', () => {
        sidebarMenu.classList.add('closed')
    })
}

// Slider //
const manageSlides = () => {
    let dots = document.getElementsByClassName('pagination_dot')
    let slider = document.querySelector('.customer_review_cards_wrapper')
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => {
            let count = 0;
            while (count < dots.length) {
                dots[count++].classList.remove('active_dot')
            }
            dots[i].classList.add('active_dot')

            switch (i) {
                case 0:
                    slider.scrollLeft = 0
                    break
                case 1:
                    slider.scrollLeft = 350
                    break
                case 2: 
                    slider.scrollLeft = slider.scrollWidth
                    break
            }
        })
        if (dots[i].classList.contains('active_dot')) {
            dots[i].src = "./assets/img/active_dot.png"
        } else {
            dots[i].src = "./assets/img/dot.png"
        }

    }
}

manageNavItems();
manageFAQ();
manageBurgerMenuClicks();
manageSlides();