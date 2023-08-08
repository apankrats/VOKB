let navRefs = document.querySelectorAll('.nav-ref');
    navBlocks = document.querySelectorAll('.nav-block');


function toggleMenu (event) {
    if (event.target.matches('.nav-ref-active')) {
        event.target.classList.remove('nav-ref-active');
        let info = event.target.nextElementSibling;
        info.classList.remove('nav-block-active')
    } else if (event.target.matches('.nav-ref')) {
        navRefs.forEach((el) => el.classList.remove('nav-ref-active'));
        navBlocks.forEach((el) => el.classList.remove('nav-block-active'));
        event.target.classList.add('nav-ref-active');
        let info = event.target.nextElementSibling;
        info.classList.add('nav-block-active');
    }
};

// function closeMenu (event) {
//     if (event.target.matches('.nav-ref-active')) {
//         event.target.classList.remove('nav-ref-active');
//         let info = event.target.nextElementSibling;
//         info.classList.remove('nav-block-active');
//     }
// }

// navRefs.forEach((el) => el.addEventListener('click', closeMenu));
navRefs.forEach((el) => el.addEventListener('click', toggleMenu));