'use strict';
/*BurgerMenu*/
const hamburger = document.getElementById('hamburger');
const burgerMenu = document.getElementById('burger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    burgerMenu.classList.toggle('active'); 
});

const closeBtns = document.querySelectorAll("#burger-menu a"); 
closeBtns.forEach(function(link) {
    link.addEventListener("click", function(e) {
        burgerMenu.classList.remove("active"); 
        hamburger.classList.remove("active");  
    });
});

//Get current date and time
const date = document.querySelector('.footer__current__date__box');
const options = {
  year: 'numeric', 
  month: '2-digit',  
  day: '2-digit',  
  hour: '2-digit',  
  minute: '2-digit',  
  second: '2-digit',  
  hour12: true,
  timeZone: 'Europe/Lisbon'
};

function getDate() {
  const currentDate = new Date(); 
  const formattedDate = currentDate.toLocaleString('pt-BR', options);  
  date.textContent = formattedDate; 
}
getDate();
setInterval(getDate, 1000);

/*dark-light-mode */
const themeButton = document.querySelector('.header__dark-light');
const themeIcon = themeButton.querySelector('.header__dark-light__img');
const body = document.body;

// Check the current theme in localStorage or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.src = './assets/icons/dark-mode.svg'; 
} else {
  themeIcon.src = './assets/icons/light-mode.svg'; 
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');
  themeIcon.src = isDarkMode ? 'assets/icons/dark-mode.svg' : 'assets/icons/light-mode.svg';
  
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

/*form validation */
function validateForm() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    alert('Por favor, insira um email válido.');
    email.focus();
    return false; 
  }

  if (password.value.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    password.focus();
    return false; 
  }
  return true;
}

//Toggle password icon
const toggleIcon = document.getElementById('togglePassword');
toggleIcon.addEventListener('click', function() {
  const currentSrc = toggleIcon.src;

  if (currentSrc.includes('password.svg')) {
    toggleIcon.src = './assets/icons/password_2.svg'; 
  } else {
    toggleIcon.src = './assets/icons/password.svg'; 
  }
});
