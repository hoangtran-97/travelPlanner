import postData from "./postData"
import { API_GEONAMES, API_DARKSKY } from './api'

const submitButton = document.getElementById("submit")
const submitData = {}
let locationInfo = {}
let weatherInfo = {}
let keys = {}
const USER_NAME = "hoangtranxamk"

submitButton.addEventListener("click", (event) => onSubmit(event))

const getKeys = async () => {
    const request = await fetch("http://localhost:8081/keys")
    try {
        keys = await request.json();
        console.log("keys", keys)
    }
    catch (error) {
        console.log("error", error)
    }
}
//fetch all keys
getKeys()

const onSubmit = async (event) => {
    event.preventDefault()
    const submitDestination = document.getElementById("destination").value
    const submitDepartureDate = document.getElementById("departure-date").value
    submitDestination && submitDepartureDate ?
        getLocationData(submitDestination, submitDepartureDate).then(getWeatherData())
        : alert("missing field")
}

const getLocationData = async (submitDestination, submitDepartureDate) => {
    submitData["departureDate"] = submitDepartureDate
    const URL_GET_LOCATION = `${API_GEONAMES}${submitDestination}&maxRows=1&username=${keys.GEONAMES_USERNAME}`
    const response = await fetch(URL_GET_LOCATION)
    try {
        locationInfo = await response.json();
        console.log("locationInfo", locationInfo)
    }
    catch (error) {
        console.log("error", error)
    }
}

const getWeatherData = async () => {
    const { lng, lat } = locationInfo.geonames[0]
    const URL_GET_WEATHER = `https://cors-anywhere.herokuapp.com/${API_DARKSKY}${keys.DARKSKY_KEY}/${lat},${lng}`
    const response = await fetch(URL_GET_WEATHER)
    try {
        weatherInfo = await response.json();
        console.log("weatherInfo", weatherInfo)
    }
    catch (error) {
        console.log("error", error)
    }
}

export default onSubmit