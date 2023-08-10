// ***navigation***

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
//     if (event.target.classList!='nav-ref') {
//         navRefs.forEach((el) => el.classList.remove('nav-ref-active'));
//         navBlocks.forEach((el) => el.classList.remove('nav-block-active'));
//     }
// }

navRefs.forEach((el) => el.addEventListener('click', toggleMenu));
// navRefs.forEach((el) => el.addEventListener('click', closeMenu));

// ***centers***

let centerTitle = document.querySelectorAll('.main-centers-title');
    centerBlocks = document.querySelectorAll('.main-centers-block');

function toggleList (event) {
    if (event.target.matches('.main-centers-title-active')) {
        event.target.classList.remove('main-centers-title-active');
        let info = event.target.nextElementSibling;
        info.classList.remove('main-centers-block-active')
    } else if (event.target.matches('.main-centers-title')) {
        navRefs.forEach((el) => el.classList.remove('main-centers-title-active'));
        navBlocks.forEach((el) => el.classList.remove('main-centers-block-active'));
        event.target.classList.add('main-centers-title-active');
        let info = event.target.nextElementSibling;
        info.classList.add('main-centers-block-active');
    }
};

centerTitle.forEach((el) => el.addEventListener('click', toggleList));