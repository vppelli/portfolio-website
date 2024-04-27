<div align="center">
  
# MICHAEL PIETROSKI
  
[![MichaelPietroski](/img/code-img/img-webportfolio.png)](https://vppelli.github.io/portfolio-website/)

</div>

# Description
When designing my portfolio, the thought process was "Always be able to locate me," information about me no matter where you are on the page—presenting an easy way to contact me and see all my work.

## Objective
Build a portfolio webpage to showcase Projects, Knowledge, and Information about me. Use HTML, CSS, and Javascript to create a responsive design that has web accessibility in mind.

## Used
- HTML
- JavaScript
- CSS

### Would you like this as a starting Template?
> Download or Clone this repo

> Custom CSS file with Global Variables was created and set up.
```
:root {
/* ----------------------------------- Font & Spacing Size */
  --sm: 5px;
  --md: 25px;
  --lg: 48px;
  --xl: 85px;
  --xxl: 200px;
  --font-normal: 16px;
  --font-md: 18px;
  --font-lg: 24px;
  --font-title: 128px;
  --font-subtitle: 64px;
/* ------------------------------------------------ Nav bar */
  --windowsize: 1080px;
  --windowsizeX: 32px;
/* ---------------------------------------- animation timer */
  --timer: 20s;
}
```
> Using @media for the color scheme: Light and Dark

```
@media (prefers-color-scheme: light) {
  :root {
  /* -------------------------------------------- Font Color */
    --font-color: rgb(0, 0, 0);
    --font-color-alt: rgb(214, 214, 214);
    --accent: rgb(111, 71, 255);
  /* -------------------------------------- Background Color */
    --bg-color: rgb(250, 250, 250);
  /* ----------------------------------Background Variations */
    --bg-color-1: rgb(220, 220, 220);
    --bg-color-2: rgb(230, 230, 230);
    --bg-color-Opacity: rgba(200, 200, 200, 0.8);
    --bg-switch: rgba(41, 41, 41, 0.8);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
  /* -------------------------------------------- Font Color */
    --font-color: rgb(214, 214, 214);
    --font-color-alt: rgb(41, 41, 41);
    --accent: rgb(111, 71, 255);
  /* -------------------------------------- Background Color */
    --bg-color: rgb(41, 41, 41);
  /* ----------------------------------Background Variations */
    --bg-color-1: rgb(50, 50, 50);
    --bg-color-2: rgb(60, 60, 60);
    --bg-color-Opacity: rgba(41, 41, 41, 0.8);
    --bg-switch: rgba(250, 250, 250, 0.8);
  }
}
```
