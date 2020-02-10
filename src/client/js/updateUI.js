import lottie from "../constants/lottie"
const updateUI = async () => {
    const request = await fetch("http://localhost:8081/all")
    try {
        const projectData = await request.json();
        console.log(projectData)
        const { departureDate, departureETA, locationInfo, weatherInfo, imageInfo, weatherPrediction } = projectData["destinationData"]
        const { summary, temperature, icon } = weatherInfo.currently
        const { summary: summaryPrediction, temperature: temperaturePrediction } = weatherPrediction.currently
        const { name, countryName } = locationInfo.geonames[0]
        const { webformatURL } = imageInfo
        const elementDestination = document.getElementById("result-destination")
        const elementDepartureDate = document.getElementById("result-departure-date")
        const elementDepartureETA = document.getElementById("result-time-to-departure")
        const elementWeather = document.getElementById("result-weather")
        const elementWeatherArrival = document.getElementById("result-weather-arrival")
        const result = document.getElementById("result")
        const lottiePlayer = document.getElementById("lottie-player");
        elementDestination.innerHTML = `${name}, ${countryName}`
        elementDepartureDate.innerHTML = `Departure date: ${departureDate}`
        elementDepartureETA.innerHTML = `Time to departure: ${departureETA} days`
        elementWeather.innerHTML = `Current weather: ${temperature}&#176 C, ${summary}`
        elementWeatherArrival.innerHTML = `Expected arrival forecast: ${temperaturePrediction}&#176 C, ${summaryPrediction}`
        result.style.backgroundImage = `url(${webformatURL})`

        switch (icon) {
            case "clear-day":
                lottiePlayer.load(lottie.clearDay)
                break;
            case "clear-night":
                lottiePlayer.load(lottie.clearNight)
                break;
            case "rain":
                lottiePlayer.load(lottie.rain)
                break;
            case "snow":
                lottiePlayer.load(lottie.snow)
                break;
            case "wind":
                lottiePlayer.load(lottie.wind)
                break;
            case "fog":
                lottiePlayer.load(lottie.fog)
                break;
            case "cloudy":
                lottiePlayer.load(lottie.cloudy)
                break;
            case "partly-cloudy-day":
                lottiePlayer.load(lottie.partlyCloudyDay)
                break;
            case "partly-cloudy-night":
                lottiePlayer.load(lottie.partlyCloudyNight)
                break;
            case "thunderstorm":
                lottiePlayer.load(lottie.thunderstorm)
                break;
            case "hail":
                lottiePlayer.load(lottie.hail)
                break;
            case "tornado":
                lottiePlayer.load(lottie.tornado)
                break;
            default:
                lottiePlayer.load(lottie.all)
        }
        lottiePlayer.setSpeed(1)
    }
    catch (error) {
        console.log("error", error)
    }
}
export default updateUI