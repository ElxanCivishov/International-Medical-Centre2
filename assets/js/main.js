$(function () {
  "use strict";
  let headerScrolled;
  let toggleBacktotop;

  // Toggle class .header-scrolled
  if ($("#header")) {
    headerScrolled = () => {
      window.scrollY > 100
        ? $("#header").addClass("header-scrolled")
        : $("#header").removeClass("header-scrolled");
      window.scrollY > 100 && $("#topbar")
        ? $("#topbar").addClass("topbar-scrolled")
        : $("#topbar").removeClass("topbar-scrolled");
    };
  }

  //  Back to top button
  if ($(".back-to-top")) {
    toggleBacktotop = () => {
      window.scrollY > 100
        ? $(this).addClass("active")
        : $(this).removeClass("active");
    };
  }

  window.addEventListener("scroll", () => {
    headerScrolled();
    toggleBacktotop();
  });

  //  Mobile nav toggle
  $(".mobile-nav-toggle").click(() => {
    $(".mobile-nav-toggle").toggleClass("bi-x").toggleClass("bi-list");
    $("#navbar").toggleClass("navbar-mobile");
  });

  //  Mobile nav toggle
  $(".navbar .dropdown > a").click((e) => {
    $("#navbar").hasClass("navbar-mobile") &&
      (e.preventDefault(),
      $(".navbar .dropdown i").hasClass("bi-chevron-down")
        ? $(".navbar .dropdown i")
            .removeClass("bi-chevron-down")
            .addClass("bi-chevron-up")
        : $(".navbar .dropdown i")
            .addClass("bi-chevron-down")
            .removeClass("bi-chevron-up"),
      $(".navbar .dropdown ul").toggleClass("dropdown-active"));
  });

  // Initiate glightbox
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  // Initiate Gallery Lightbox
  const galelryLightbox = GLightbox({
    selector: ".galelry-lightbox",
  });

  // toggle link set localStorage for active nav
  $(".nav-link").click((e) => {
    const item = e.target.textContent;
    localStorage.setItem("active-nav", item);
  });

  // toggle logo set active class for nav links
  const logoLink = document.getElementById("logo-link");
  logoLink.addEventListener("click", () => {
    localStorage.setItem("active-nav", "Haqqımızda");
  });

  // refresh active class for nav links, use localStorage data
  const links = document.querySelectorAll(".nav-link");
  links.forEach((element) => {
    localStorage.getItem("active-nav") != element.textContent
      ? element.classList.remove("active")
      : element.classList.add("active");
    localStorage.getItem("active-nav") == "Bölmələr"
      ? ($(".dropdown > a").addClass("active"),
        $(".dropdown a i").addClass("active"))
      : $(".dropdown > a").removeClass("active");
  });

  $("#navbar .dropdown ul li").click((e) => {
    localStorage.setItem("active-nav", "Bölmələr");
  });
});
