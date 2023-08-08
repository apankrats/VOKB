let navRefs = document.querySelectorAll('.nav-ref');


function toggleMenu (event) {
    if (event.target.matches('.nav-ref')) {
        event.target.classList.toggle('nav-ref-active');
        let info = event.target.nextElementSibling;
        info.classList.toggle('nav-block-active');
    }
};

// function toggleMenu (e) {
//     if (e.target.classList.contains('nav-ref')) {
//         console.log ("Yes")
//     }
// }

navRefs.forEach((el) => el.addEventListener('click', toggleMenu));