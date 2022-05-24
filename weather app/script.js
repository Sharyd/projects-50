/// 61f0c05dc28964c57a0812625af28c18
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
window.addEventListener("load", function () {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={61f0c05dc28964c57a0812625af28c18}`;
      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    });
  } else {
    h1.textContent = "Allow us get your position :(";
  }
});
