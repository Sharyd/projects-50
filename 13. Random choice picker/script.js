const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", function (e) {
  createTags(e.target.value);

  if (e.key === "Enter") {
    // čeka 100 milisekund a vymaže nám input obsah
    setTimeout(() => {
      e.target.value = "";
    }, 100);

    randomSelect();
  }
});

// vytvoření našich tágů a použití tří funkcí (split) => nám
//hodí tágy do pole, když je rozdělíme čárkou..
//filter nám tzv. vyfiltruje tag, který chceme a trim se nám zbávuje mezer
// celkově tahle funkce nám vytvoří tagy do pole a vyhazuje je ven do spanu
// díky map() funkci
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach(function (tag) {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
}

// funkce která nám prvně vybere spany a tzv 100x nám problíkává span na daném intervalu
// aby to nebyla nekonečná časová linie tak musíme smyčku ukončit clearIntervalem a vykrátíme ho
// daným počtem jak dlouho chceme aby se to opakovalo
function randomSelect() {
  const times = 100;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// naše funkce vybírá naše tágy random funkcí a dále přidáváme a odebíráme claasu highlight

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
