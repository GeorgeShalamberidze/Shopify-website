let faq = document.getElementsByClassName('question_section')
let carrots = document.getElementsByClassName('carrot')
let answers = document.getElementsByClassName('answer_section')
let navItems = document.getElementsByClassName('navbar_item')
let burgerButton = document.getElementById("burger_menu")
let sidebarMenu = document.getElementById('sidebar_menu')
let closeButton = document.getElementById('close_button')
let customer4 = document.getElementById('customer4small')

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        let count = 0;
        while (count < navItems.length) {
            navItems[count++].classList.remove('active')
        }
        navItems[i].classList.add('active')
    })
}

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

// window.addEventListener('resize', () => {
//     if (window.innerWidth < 500) {
//         customer4.src = "./assets/img/cursomter4_small.png"
//     }
// })

burgerButton.addEventListener('click', () => {
    sidebarMenu.classList.remove('closed')
})

closeButton.addEventListener('click', () => {
    sidebarMenu.classList.add('closed')
})