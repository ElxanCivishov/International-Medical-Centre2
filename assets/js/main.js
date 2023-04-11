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
        ? $(".back-to-top").addClass("active")
        : $(".back-to-top").removeClass("active");
    };
  }

  window.addEventListener("scroll", () => {
    headerScrolled();
    toggleBacktotop();
  });

  //  Mobile nav toggle
  $(".mobile-nav-toggle").click(() => {
    $(".mobile-nav-toggle").toggleClass("bi-x").toggleClass("bi-list");
    $("#navbar").toggleClass("active");
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
  $(".nav-item").click((e) => {
    const item = e.target.textContent;
    localStorage.setItem("active-nav", item);
  });

  // toggle logo set active class for nav links
  const logoLink = document.getElementById("logo-link");
  logoLink.addEventListener("click", () => {
    localStorage.setItem("active-nav", "Haqqımızda");
  });

  // refresh active class for nav links, use localStorage data
  const links = document.querySelectorAll(".nav-item");
  links.forEach((element) => {
    localStorage.getItem("active-nav") != element.textContent
      ? element.classList.remove("active")
      : element.classList.add("active");
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
});
