//Init Storage 
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
//Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init ui
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather); 

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    weather.changeLocation(city, country);
    //Store in LS
    storage.setLocationData(city, country)
    //Get weather again
    getWeather();
    // Close modal
    const myModalEl = document.getElementById("locModal"); 
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
})

function getWeather(){
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err => console.log(err));
}
