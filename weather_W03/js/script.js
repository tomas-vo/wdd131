document.addEventListener('DOMContentLoaded', function() {
    // 1. Footer: Current Year
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Footer: Last Modified Date
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // 3. Windchill Factor Calculation
    // Static values for temperature and wind speed
    // Madagascar uses Celsius and km/h
    const temperatureCelsius = 25; // Example static temperature in Celsius
    const windSpeedKmh = 10;     // Example static wind speed in km/h

    // Update the DOM with static values for visibility
    const tempElement = document.getElementById('temperature');
    const windElement = document.getElementById('wind-speed');
    if (tempElement) tempElement.textContent = `${temperatureCelsius}°C`;
    if (windElement) windElement.textContent = `${windSpeedKmh} km/h`;

    const windChillSpan = document.getElementById('windchill');

    // Function to calculate windchill (Metric formula)
    // Formula for Celsius and km/h based on ISO 11079:2007 (similar to original Siple/Passel)
    // Twc = 13.12 + 0.6215 * Ta - 11.37 * V^0.16 + 0.3965 * Ta * V^0.16
    // Where:
    // Twc = wind chill temperature in °C
    // Ta = air temperature in °C
    // V = wind speed in km/h
    function calculateWindChill(temperature, windSpeed) {
        // Ensure windSpeed is not 0 to avoid Math.pow(0, 0.16) issues and division by zero if adapted
        // The formula itself handles low wind speeds, but conditions check for > 4.8 km/h anyway
        if (windSpeed === 0) return temperature; // If no wind, windchill is temperature

        return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
    }

    // Check conditions before calling the function
    const isTemperatureViable = temperatureCelsius <= 10; // <= 10 °C
    const isWindSpeedViable = windSpeedKmh > 4.8;       // > 4.8 km/h

    if (isTemperatureViable && isWindSpeedViable) {
        const windChillValue = calculateWindChill(temperatureCelsius, windSpeedKmh);
        if (windChillSpan) {
            // Round to 1 decimal place and add °C, or N/A if conditions not met
            windChillSpan.textContent = `${windChillValue.toFixed(1)}°C`;
        }
    } else {
        if (windChillSpan) {
            windChillSpan.textContent = 'N/A';
        }
    }
});