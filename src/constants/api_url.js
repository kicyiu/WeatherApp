const location = "Shenzhen, cn";
const api_key = "8b802946f953bd02532880a302f718f7";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;