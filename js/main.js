
document.addEventListener("DOMContentLoaded", function () {

  // MENU MOBILE
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Chiudi menu" : "Apri menu"
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Apri menu");
      });
    });
  }

  // DATA MINIMA DI PARTENZA
  const dateInput = document.getElementById("travel-date");

  if (dateInput) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");

    dateInput.min = `${year}-${month}`;
  }

  // RICERCA VIAGGI
  const searchForm = document.getElementById("travel-search");

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const destination =
        document.getElementById("destination").value;

      const date =
        document.getElementById("travel-date").value;

      const travelers =
        document.getElementById("travelers").value;

      let message = "Ecco la tua ricerca:\n\n";

      message += "Destinazione: " +
        (destination || "Ovunque nel mondo") + "\n";

      message += "Partenza: " +
        (date || "Da definire") + "\n";

      message += "Viaggiatori: " + travelers;

      alert(message);

      const destinationsSection =
        document.getElementById("destinations");

      if (destinationsSection) {
        destinationsSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }

  // ANNO AUTOMATICO NEL FOOTER
  const footerYear = document.querySelector(".footer-bottom span");

  if (footerYear) {
    footerYear.textContent =
      "© " + new Date().getFullYear() + " Sicily Unlocked";
  }

});
