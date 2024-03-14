let scrollPos = 0; 
const fullSideBar = document.getElementById("full"); 
const miniSideBar = document.getElementById("mini"); 
const code = document.getElementById("code");
const art = document.getElementById("art");
const artBtn = document.getElementById("artbtn");
const codeBtn = document.getElementById("codebtn");
const codefont = document.getElementById("codefont");
const artfont = document.getElementById("artfont");

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