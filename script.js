const tabsBtns = document.querySelectorAll(".tabs-nav button");
const tabsItems = document.querySelectorAll(".tabs-item");

// Функція скриває таби і прибирає active у кнопок

function hideTabs() {
  tabsItems.forEach(item => item.classList.add("hide"));
  tabsBtns.forEach(item => item.classList.remove("active"));
}

// Функція показує переданий номер таба і робить відповідну його кнопку активною.

function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  showTab(index);
}));


// Якорі


const anchors = document.querySelectorAll(".header-nav a");

anchors.forEach(anc => {
  anc.addEventListener("click", function(event){
    event.preventDefault();

    const id = anc.getAttribute("href");
    const element = document.querySelector(id);

    window.scroll({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  });
});

