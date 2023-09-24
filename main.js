// Scroll to the top
// How to change your navigation style on scroll
let span = document.querySelector(".up");
let navigation = document.querySelector(".navigation");

window.onscroll = function () {
  if (this.scrollY >= 1) {
    span.classList.add("show");
    navigation.classList.add("scrolled");
  } else {
    span.classList.remove("show");
    navigation.classList.remove("scrolled");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tlinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tlinks) {
    if (tlinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tlinks.classList.toggle("open");
    }
  }
});
// Stop Propagation on Menu
tlinks.onclick = function (e) {
  e.stopPropagation();
};
