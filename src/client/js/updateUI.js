const updateUI = async () => {
    const request = await fetch("http://localhost:8081/all")
    try {
        const projectData = await request.json();
        const { departureDate, locationInfo, weatherInfo, destinationInfo } = projectData["destinationData"]
        const { name, countryName } = locationInfo.geonames[0]
        const destination = document.getElementById("result-destination")
        const departure = document.getElementById("result-departure-date")
        const departureETA = document.getElementById("result-time-to-departure")
        destination.innerHTML = `${name}, ${countryName}`
        departure.innerHTML = `Departure date: ${departureDate}`
        departureETA.innerHTML = `Time to departure: 123`
    }
    catch (error) {
        console.log("error", error)
    }
}
export default updateUI