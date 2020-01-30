const updateUI = async () => {
    const request = await fetch("http://localhost:8081/all")
    try {
        const projectData = await request.json();
        const { departureDate, departureETA, locationInfo, weatherInfo, destinationInfo } = projectData["destinationData"]
        const { summary, temperature } = weatherInfo.currently
        const { name, countryName } = locationInfo.geonames[0]
        const elementDestination = document.getElementById("result-destination")
        const elementDepartureDate = document.getElementById("result-departure-date")
        const elementDepartureETA = document.getElementById("result-time-to-departure")
        const elementWeather = document.getElementById("result-weather")
        const elementWeatherArrival = document.getElementById("result-weather-arrival")
        const result = document.getElementById("result")
        elementDestination.innerHTML = `${name}, ${countryName}`
        elementDepartureDate.innerHTML = `Departure date: ${departureDate}`
        elementDepartureETA.innerHTML = `Time to departure: ${departureETA} days`
        elementWeather.innerHTML = `Current weather: ${temperature}&#176 C, ${summary}`
        result.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?travel")`
    }
    catch (error) {
        console.log("error", error)
    }
}
export default updateUI