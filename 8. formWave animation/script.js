const labels = document.querySelectorAll(".form-control label");

// labels.forEach(function (label) {
//   label.innerHTML = label.textContent

//     .split("")

//     .map(function (letter, idx) {
//       return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
//     })
//     .join("");
// });

// přes šipkovou notaci, nezapomen u kratších syntaxí nepotřebuje return
labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")

    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
