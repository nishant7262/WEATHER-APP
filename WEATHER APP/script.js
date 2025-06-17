const API_KEY = "9a41fb17986b41b2ab0192658251506";

function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const weatherCard = document.getElementById("weatherCard");

  if (!location) {
    alert("Please enter a location!");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Location not found");
      return response.json();
    })
    .then(data => {
      document.getElementById("locationName").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temperature").textContent = `${data.current.temp_c}°C`;
      document.getElementById("conditionText").textContent = data.current.condition.text;
      document.getElementById("weatherIcon").src = `https:${data.current.condition.icon}`;
      weatherCard.style.display = "block";
    })
    .catch(err => {
      alert("Error: " + err.message);
      weatherCard.style.display = "none";
    });
}
