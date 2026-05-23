const buttons = document.querySelectorAll(".category");

const cards = document.querySelectorAll(".card");

/* فلترة الأقسام */

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // active button
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if(card.dataset.category === filter){

        card.style.display = "block";

        setTimeout(() => {

          card.classList.add("show");

        }, 50);

      }

      else{

        card.style.display = "none";

        card.classList.remove("show");
      }

    });

  });

});

/* عرض قسم hot بالبداية */

cards.forEach(card => {

  if(card.dataset.category === "hot"){

    card.style.display = "block";

    setTimeout(() => {

      card.classList.add("show");

    }, 50);

  }

  else{

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