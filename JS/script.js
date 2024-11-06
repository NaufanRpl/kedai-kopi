// Toggle & Remove class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar Element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
// Menangkap elemen-elemen modal dan tombol
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const modals = document.querySelectorAll(".modal");
const closeIcons = document.querySelectorAll(".close-icon");

// Event listener untuk tombol detail produk
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const modalId = btn.getAttribute("data-modal-id");
    const modal = document.getElementById(`item-detail-modal-${modalId}`);
    if (modal) {
      modal.style.display = "flex";
    }
  };
});

// Event listener untuk tombol close pada setiap modal
closeIcons.forEach((closeIcon) => {
  closeIcon.onclick = (e) => {
    e.preventDefault();
    const modal = closeIcon.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  };
});

// Event listener untuk klik di luar modal
window.onclick = (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};
