window.onload = function () {
  // filters
  var filtersToggler = document.querySelector(".filters-toggler");
  var filtersMenu = document.querySelector(".filters");
  var filtersTogglerShow = document.querySelector(".filters-toggler__show");
  var filtersTogglerHide = document.querySelector(".filters-toggler__hide");

  filtersToggler.onclick = function (e) {
    if (filtersMenu.classList.contains("filters--show")) {
      filtersMenu.classList.remove("filters--show");
    } else {
      filtersMenu.classList.add("filters--show");
    }

    if (filtersMenu.classList.contains("filters--show")) {
      filtersTogglerShow.style.display = "none";
      filtersToggler.style.right = "350px";
      filtersToggler.style.transition = "all 0.5s 0.1s ease-in";
      filtersTogglerHide.style.display = "block";
    } else {
      filtersTogglerShow.style.display = "block";
      filtersToggler.style.right = "20px";
      filtersToggler.style.transition = "all 0.5s 0.1s ease-in";
      filtersTogglerHide.style.display = "none";
    }
  };
};

