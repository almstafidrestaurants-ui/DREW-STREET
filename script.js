const buttons = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // إزالة active من كل الأزرار
    buttons.forEach(btn => btn.classList.remove("active"));

    // إضافة active للزر المضغوط
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if(card.dataset.category === filter){

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


// عرض قسم الساخن بالبداية فقط
cards.forEach(card => {

  if(card.dataset.category === "hot"){

    card.style.display = "block";

  } else {

    card.style.display = "none";

  }

});

/* ======================================سهم ============================== */

const categories = document.querySelector(".categories");

const scrollRight = document.getElementById("scrollRight");

const scrollLeft = document.getElementById("scrollLeft");

/* سهم اليمين */

scrollRight.addEventListener("click", () => {

  categories.scrollBy({

    left: 150,

    behavior: "smooth"

  });

});

/* سهم اليسار */

scrollLeft.addEventListener("click", () => {

  categories.scrollBy({

    left: -150,

    behavior: "smooth"

  });

});