const api = "4c6860d2d483f48435b92e68b18ab461";

const requests = {
    bratislava: `https://api.openweathermap.org/data/2.5/weather?q=Bratislava,SK&units=metric&appid=${api}&lang=sk`,
    kosice: `https://api.openweathermap.org/data/2.5/weather?q=Košice,Sk&units=metric&appid=${api}&lang=sk`,
    michalovce: `https://api.openweathermap.org/data/2.5/weather?q=Michalovce,SK&units=metric&appid=${api}&lang=sk`,
    humenne: `https://api.openweathermap.org/data/2.5/weather?q=Humenne,SK&units=metric&appid=${api}&lang=sk`,
    sobrance: `https://api.openweathermap.org/data/2.5/weather?q=Sobrance,SK&units=metric&appid=${api}&lang=sk`,
    koromla: `https://api.openweathermap.org/data/2.5/weather?q=Koromľa,Slovakia&units=metric&appid=${api}&lang=sk`,

}

export default requests;