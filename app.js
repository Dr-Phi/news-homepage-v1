const iconMenu = document.querySelector(".icon-menu"),
  menu = document.querySelector(".icon-menu+nav");

  iconMenu.addEventListener('click', e => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity-bg');

    const iconSrc = e.target.getAttribute('src');
    if (iconSrc == './assets/images/icon-menu.svg'){
      e.target.setAttribute('src', './assets/images/icon-menu-close.svg');
    } else {
      e.target.setAttribute('src', './assets/images/icon-menu.svg');
    }
  });