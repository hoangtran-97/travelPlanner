# Travel Planner
Plan your destination and get the up-to-date weather forecast and ETA to departure date
## Getting started
Clone this repo and checkout at branch "master":
```
git checkout master
```
Install all the packages:
```
npm i
```
## Installing 
Step by step guide on how to get the servers running

This projects uses API from these services: 

* [GEONAMES](http://www.geonames.org/export/web-services.html) - For location LAT and LONG.
* [DARKSKY](https://darksky.net/dev/docs) - Weather forecast based on LAT and LONG.
* [PIXABAY](https://pixabay.com/) - Generate location related image.

Create your own accounts on these services and your own ```.env``` file with the following format:
```
KEY_USERNAME = [GEONAME_USERNAME]
KEY_DARKSKY = [DARKSKY_KEY]
KEY_PIXABAY = [PIXABAY_KEY]
```
Make sure the ```.env``` file is included in your ```.gitignore```.

Start the webpack-dev-server:
```
npm run build-dev
```
Start the Express server: 
```
npm start
```
Run Production config of Webpack:
```
npm run build-prod
```
Run Tests:
```
npm test
```

## Features:
- [X] Responsive using CSS Grid and Flexbox.
- [X] Location LAT and LONG provided by GEONAMES API.
- [X] Weather forecast provided by DarkSky API. 
- [X] Location Image provided by PIXABAY API.
- [X] Animated UI with Lottie Animations.(Incorporated icons into forecast.)
- [X] Dynamic UI color with node-vibrant.
- [X] Animated weather and changed dynamically based on current weather.
- [X] Back-end Express server with POST and GET route to write and read data.
- [X] Environmental variable for personal API credentials security.
- [X] Service worker for offline functionality. 
- [X] Unit testing with Jest.
