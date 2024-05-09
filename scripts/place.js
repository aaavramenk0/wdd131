// Static values for temperature and wind speed
const temperature = 10; // Celsius
const windSpeed = 5; // km/h

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

function displayWindChill() {
    let windChill = "N/A";

    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        windChill = calculateWindChill(temperature, windSpeed)
    }

    document.getElementById('wind-chill').innerHTML = `Wind Chill: ${windChill}`;
}

window.onload = displayWindChill();