# Weather App

This project was meant as a simple tool to consult current weather and weather forecast data for any city around the globe.
It interacts with 2 different public API's (https://openweathermap.org/api and https://developers.teleport.org/api/) to fetch current weather data, weather forecast data for 5 days, as well as urban area images for larger cities.

The app features dynamic background images which are dependent on the user's location as well as the current weather in that location.
The search input has an autocomplete feature to suggest the name of all cities present in the the Teleport database (https://developers.teleport.org/).
It was implemented from scratch and works by sending new search requests at the endpoint https://developers.teleport.org/api/cities/ for every input event.

The app can be accessed at
https://weather-app-liart-chi.vercel.app/
