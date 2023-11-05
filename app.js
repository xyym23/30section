"use strict";

$(document).ready(function () {
  // HEADER SCRIPT //
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var header_top = document.querySelector(".header_top");
    var header_bottom = document.querySelector(".header_bottom");

    if (window.scrollY > 0) {
      header.classList.add("header-scroll");
      header_top.style.visibility = "hidden";
      header_bottom.style.top = "0"
    } else {
      header.classList.remove("header-scroll");
      header_top.style.visibility = "visible";
      header_bottom.style.top = "69px"
    }
  });

  // category click
  const button = document.getElementById("btn");
  const category = document.getElementById("category");

  let isVisible = true;
  button.addEventListener("click", function () {
    isVisible = !isVisible;
    if (isVisible) {
      category.style.display = "none";
    } else {
      category.style.display = "block";
    }
  });

  //like disslike

  const buttons = document.querySelectorAll(".like-button, .disslike-button");
  function handleButtonClick(event) {
    const button = event.currentTarget;
    if (button.style.backgroundColor === "green" || button.style.backgroundColor === "red") {
      button.style.backgroundColor = "#eeeeee";
      button.querySelector("h4").style.color = "#7a7a7a";
      button.querySelector("i").style.color = "#7a7a7a";
    } else {
      button.style.backgroundColor = button.classList.contains("like-button") ? "green" : "red";
      button.querySelector("h4").style.color = "#ffffff";
      button.querySelector("i").style.color = "#ffffff";

      const siblingButton = button.parentElement.querySelector(button.classList.contains("like-button") ? ".disslike-button" : ".like-button");
      siblingButton.style.backgroundColor = "#eeeeee";
      siblingButton.querySelector("h4").style.color = "#7a7a7a";
      siblingButton.querySelector("i").style.color = "#7a7a7a";
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
  });
});


