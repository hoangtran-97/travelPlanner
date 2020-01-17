import postData from "./postData"
import { API_GEONAMES } from './api'

const submitButton = document.getElementById("submit")
const submitData = {}
const USER_NAME = "hoangtranxamk"

submitButton.addEventListener("click", (event) => onSubmit(event))
const onSubmit = async (event) => {
    event.preventDefault()
    const submitDestination = document.getElementById("destination").value
    const submitDepartureDate = document.getElementById("departure-date").value
    submitDestination && submitDepartureDate ?
        getData(submitDestination, submitDepartureDate)
        : alert("missing field")
}

const getData = async (submitDestination, submitDepartureDate) => {
    submitData["departureDate"] = submitDepartureDate
    const URL_GET_LOCATION = `${API_GEONAMES}${submitDestination}&maxRows=1&username=${USER_NAME}`
    const response = await fetch(URL_GET_LOCATION)
    try {
        const locationInfo = await response.json();
        console.log(locationInfo)
    }
    catch (error) {
        console.log("error", error)
    }
}

export default onSubmit