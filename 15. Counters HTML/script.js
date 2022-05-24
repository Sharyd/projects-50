const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // + nám převadí string na number
    const c = +counter.textContent;

    const increment = target / 200; // Děli nám např těch 12000 v data-setu cožje 60 a to bude naše výchozí hodnota pro nastavení intervalu

    if (c < target) {
      setTimeout(updateCounter, 5);
      counter.textContent = `${Math.ceil(c + increment)}`;
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  counters.forEach((counter) => {
    counter.textContent = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target"); // + nám převadí string na number
      const c = +counter.textContent;

      const increment = target / 200; // Děli nám např těch 12000 v data-setu cožje 60 a to bude naše výchozí hodnota pro nastavení intervalu

      if (c < target) {
        counter.textContent = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 5);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
});
