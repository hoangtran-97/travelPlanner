const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", (event) => onSubmit(event))
const onSubmit = async (event) => {
    event.preventDefault()
    const submitDestination = document.getElementById("destination").value
    const submitDepartureDate = document.getElementById("departure-date").value
    submitDestination && submitDepartureDate ?
        console.log(submitDestination, submitDepartureDate)
        : alert("missing field")
    const request = await fetch("http://localhost:8081/all")
    try {
        const data = await request.json()
        console.log(data)
    }
    catch (error) {
        console.log("error", error);
    }
}