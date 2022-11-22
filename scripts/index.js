function menuHide() {
  const menuButton = document.querySelector("header div.menu-container ul");
  menuButton.setAttribute("open", "false");
}

function menuClick() {
  const menuButton = document.querySelector("header div.menu-container ul");
  let currentState = menuButton.getAttribute("open");
  if (currentState == "false") {
    currentState = "true";
  } else {
    currentState = "false";
  }
  menuButton.setAttribute("open", currentState);
}

function scrollMenuCheck() {
  let pos = window.pageYOffset;
  if (pos > 0.15 * window.innerHeight) {
    menuHide();
  }
}

function menuHide() {
  const menuButton = document.querySelector("header div.menu-container ul");
  menuButton.setAttribute("open", "false");
}

function headerScrollDelay() {
  const header = document.querySelector("#header");
  let pos = window.pageYOffset;
  if (pos <= 0.075 * window.innerHeight) {
    header.style.transform = "translate3d(0px, " + pos + "px, 0px)";
  }
}

window.onload = function screenSize() {
  const root = document.querySelector(":root");
  let aspectRatio = window.innerHeight / window.innerWidth;
  if (aspectRatio > 1.25) {
    root.setAttribute("display", "mobile");
  } else {
    root.setAttribute("display", "desktop");
  }
};

document.querySelector("#menu-option").addEventListener("click", menuHide);
document.querySelector("#menu").addEventListener("click", menuClick);
window.addEventListener("scroll", scrollMenuCheck);
window.addEventListener("scroll", headerScrollDelay);
