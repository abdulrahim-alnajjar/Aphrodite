let date = new Date();

// Onclick Events
document.onclick = (e) => {
  //open search form
  const searchIcon = document.querySelector(".navbar .search-icon");
  const searchForm = document.querySelector(".navbar .search-form");
  const blureLayout = document.querySelector(".blure-layout");
  e.target == searchIcon || e.target == searchIcon.children[0]
    ? (searchForm.classList.toggle("open"),
      blureLayout.classList.toggle("open"))
    : e.target == searchForm.children[0] ||
      e.target == searchForm.children[0].firstChild
    ? searchForm.submit()
    : e.target == searchForm.children[1]
    ? searchForm.children[1].focus()
    : (searchForm.classList.remove("open"),
      blureLayout.classList.remove("open"));

  // open nav menu
  const menuIcon = document.querySelector(".navbar .bars");
  e.target == menuIcon || e.target == menuIcon.children[0]
    ? document.querySelector(".nav-menu").classList.toggle("open")
    : document.querySelector(".nav-menu").classList.remove("open");

  // open drop list in trending section
  const droList = document.querySelector(".categ-header ul");
  const droLisIcon = document.querySelector(".categ-header .drop-l-icon");
  e.target == droLisIcon || e.target == droLisIcon.children[0]
    ? droList.classList.toggle("visible")
    : droList.classList.remove("visible");
};

// copy rights
const copyRight = document.querySelector("footer .copy-right");
copyRight.innerHTML = `&copy; ${date.getFullYear()}, abdulrahim alnajjar`;
