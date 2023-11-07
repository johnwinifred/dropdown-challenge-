// code to display menu icon for small screens
function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('showMenu');
      console.log('Menu toggled');
    });
  }
}

showMenu('nav-toggle', 'nav-menu');

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

    //   toggleContents[currentlyOpenIndex].style.display = 'none';
    //   toggleIcons[currentlyOpenIndex].style.transform = 'rotate(0deg)'


   
  });
});



// open and close menu bar on small screens
const openNav = document.querySelector('.nav__toggle');
const closeNav = document.querySelector('.nav__close');
const menuBar = document.querySelector('#nav__menu');

function openMenu() {
  openNav.style.display = 'none';
  closeNav.style.display = 'block';

  if (window.innerWidth < 767 && window.innerWidth < 1024) {
    menuBar.style.width = 'auto';
  }
  else {
    return;
  }
}
openNav.addEventListener('click', openMenu);


// code to close nav bar

function closeMenu() {
  openNav.style.display = 'block';
  closeNav.style.display = 'none';
  if (window.innerWidth < 767 && window.innerWidth < 1024) {
    menuBar.style.width = '0';
    menuBar.style.marginRight = '0';
  }
  else {
    return;
  }
}
closeNav.addEventListener('click', closeMenu);
