const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


burger.addEventListener("click", function() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


navLink.forEach(function(item) {
  item.addEventListener('click', function() {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
})



