const sounds = ["arcade", "dog", "bird", "sweep", "forest", "lion"];

sounds.forEach(function (sound) {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.textContent = sound;

  btn.addEventListener("click", function () {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
  console.log(sound);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
