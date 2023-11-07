# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](https://drive.google.com/drive/folders/1hLmRuwp3lUVvqL9RqkzSkNkE3VHrQ-Uw?usp=drive_link)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Scss preprocessor

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I Learnt a great deal in using css and also practicising what I have learnt in javascript. Some of the things I learnt include creating a responsive navbar for different screen sizes. In my html, I learnt how to use the BEM (Block Element Modifier) methodology for naming. This method was particularly helpful in styling my classes.
for css, i learnt how to use css animations and also positioning. I discovered cool tools that helped me generaate box shadows with ease. 

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<div class="nav__toggle" id="nav-toggle">
        <a class="menu-icon"><img src="images/icon-menu.svg" alt=""></a>
      </div>

```
```css
 &__menu {
            
            // display: none;
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 0;
            // margin: 0 auto;
            overflow: hidden;
            transition: 0.5s;
            background-color: $white;
            padding-top: $mb-6;
            // padding-right: $mb-2;
            transition: 0.4s;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

        }
&__item{
            margin-bottom: 20px;
            &.toggle-content {
                position: absolute;
                top: 4em;
                right:0;
                line-height: 0;
                height: auto;
                max-width: 100%;
                border: 2px solid rgb(246, 246, 246);
                padding: 0.5rem 0.5rem;
                border-radius: 0.5rem;
                background: rgba(255, 255, 255, 0.99);
                box-shadow: 31px 27px 89px -26px rgba(0, 0, 0, 0.48);
                -webkit-box-shadow: 31px 27px 89px -26px rgba(0, 0, 0, 0.48);
                -moz-box-shadow: 31px 27px 89px -26px rgba(0, 0, 0, 0.48);
            }
        }
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
// code to toggle caret and display content

const toggleHeaders = document.querySelectorAll('.toggle-button');
const toggleIcons = document.querySelectorAll('.toggle-icon');
const toggleContents = document.querySelectorAll('.toggle-content');

// let currentlyOpenIndex = null;

toggleHeaders.forEach((toggleHeader, index) => {
  toggleHeader.addEventListener('click', () => {
    // Toggle the clicked content
    if (index === 1) {
      toggleContents[index].classList.toggle('active');
      toggleContents[index - 1].classList.remove('active')
    } else if (index === 0) {
      toggleContents[index].classList.toggle('active');
      toggleContents[index + 1].classList.remove('active')
    }
  });
});

```


### Continued development

I am sure I had few bugs. I hope to make this more than a single page application.


### Useful resources

- [W3 schools](https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp) - This helped me create the collapsed sidebar for the mobile screen.
- [Freecode camp sass tutorial](https://www.freecodecamp.org/news/the-beginners-guide-to-sass/) - This is an amazing article which helped me finally understand sass. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Winifred John](https://www.linkedin.com/in/winifred-john-584731205/)
- Frontend Mentor - [@johnwinifred](https://www.frontendmentor.io/profile/johnwinifred)
- Twitter - [@WinneXia](https://twitter.com/WinneXia)



## Acknowledgments

I really want to acknowledge the team for bringing up these challenges. I really learnt a lot.

