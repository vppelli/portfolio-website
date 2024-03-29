window.onload = () => {
    const anchors = document.querySelectorAll('.page');
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            console.log(transition_el);

            transition_el.classList.add('is-active');

            console.log(transition_el);

            setInterval(() => {
                window.location.href = target;
            }, 500);
        })
    }
}

let scrollPos = 0;
const fullSideBar = document.getElementById("full");
const miniSideBar = document.getElementById("mini");
const code = document.getElementById("code");
const art = document.getElementById("art");
const artBtn = document.getElementById("artbtn");
const codeBtn = document.getElementById("codebtn");
const codefont = document.getElementById("codefont");
const artfont = document.getElementById("artfont");
const nav = document.querySelector('.flex-layout');

let showSidebar = () => {
    fullSideBar.classList.remove("is-hidden");
    miniSideBar.classList.add("is-hidden");

}
let hideSidebar = () => {
    fullSideBar.classList.add("is-hidden");
    miniSideBar.classList.remove("is-hidden");
};

let showArt = () => {
    art.classList.remove("hide");
    code.classList.add("hide");
    artBtn.classList.add("current-layout");
    codeBtn.classList.remove("current-layout");
    artfont.classList.remove("font-position");
    codefont.classList.add("font-position");
}
let showCode = () => {
    art.classList.add("hide");
    code.classList.remove("hide");
    artBtn.classList.remove("current-layout");
    codeBtn.classList.add("current-layout");
    artfont.classList.add("font-position");
    codefont.classList.remove("font-position");
}

let checkPosition = () => {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        // Scrolling UP
        hideSidebar();
    } else {
        // Scrolling DOWN
        hideSidebar();
    }
    scrollPos = windowY;
}

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

window.addEventListener('scroll', debounce(checkPosition));