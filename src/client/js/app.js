import postData from "./postData"
import updateUI from "./updateUI"
import { API_GEONAMES, API_DARKSKY, API_PIXABAY } from './api'
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);
const submitButton = document.getElementById("submit")
const submitData = {}
let keys = {}

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
const limitDatePicker = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    const dateTime = `${yyyy}-${mm}-${dd}`;
    submitData["todayDate"] = dateTime
    document.getElementById("departure-date").setAttribute("min", dateTime);
}
//fetch all keys
getKeys()
limitDatePicker()

const onSubmit = async (event) => {
    event.preventDefault()
    const submitDestination = document.getElementById("destination").value
    const submitDepartureDate = document.getElementById("departure-date").value
    submitDestination && submitDepartureDate ?
        getLocationData(submitDestination, submitDepartureDate)
            .then(() => getWeatherData(submitData["locationInfo"]))
            .then(() => getLocationImage(submitData["locationInfo"]))
            .then(() => postData("http://localhost:8081/destination", submitData))
            .then(() => updateUI())
        : alert("missing field")
}

const getLocationData = async (submitDestination, submitDepartureDate) => {
    submitData["departureDate"] = submitDepartureDate
    //Moments
    const start = new Date("11/30/2018"), end = new Date("09/30/2019")
    const range = moment.range(moment(start), moment(end));

    console.log(Array.from(range.by('day')))
    const URL_GET_LOCATION = `${API_GEONAMES}${submitDestination}&maxRows=1&username=${keys.GEONAMES_USERNAME}`
    const response = await fetch(URL_GET_LOCATION)
    try {
        const locationInfo = await response.json();
        submitData["locationInfo"] = locationInfo
        console.log("locationInfo", locationInfo)
        return locationInfo
    }
    catch (error) {
        console.log("error", error)
    }
}

const getWeatherData = async (locationInfo) => {
    const { lng, lat } = locationInfo.geonames[0]
    const URL_GET_WEATHER = `https://cors-anywhere.herokuapp.com/${API_DARKSKY}${keys.DARKSKY_KEY}/${lat},${lng}`
    const response = await fetch(URL_GET_WEATHER)
    try {
        const weatherInfo = await response.json();
        submitData["weatherInfo"] = weatherInfo
        console.log("weatherInfo", weatherInfo)
    }
    catch (error) {
        console.log("error", error)
    }
}

const getLocationImage = async (locationInfo) => {
    const { toponymName } = locationInfo.geonames[0]
    const URL_GET_IMAGE = `https://cors-anywhere.herokuapp.com/${API_PIXABAY}${keys.PIXABAY_KEY}&q=${toponymName}`
    const response = await fetch(URL_GET_IMAGE)
    try {
        const imageInfo = await response.json();
        console.log("imageInfo", imageInfo)
        var randomImage = imageInfo.hits[Math.floor(Math.random() * imageInfo.hits.length)];
        submitData["imageInfo"] = randomImage
    }
    catch (error) {
        console.log("error", error)
    }
}

export default onSubmit