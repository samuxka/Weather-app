const wrapper = document.querySelector(".wrapper"),
    inputPart = document.querySelector(".input-part"),
    infoTxt = inputPart.querySelector(".info-txt"),
    inputField = inputPart.querySelector("input"),
    locationBtn = inputPart.querySelector("button"),
    weatherPart = wrapper.querySelector(".weather-part"),
    wIcon = weatherPart.querySelector("img"),
    arrowBack = wrapper.querySelector("header i");

const apikey = "a72207d5343b7b68daf1dbc09a754815";

inputField.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && inputField.value != "") {
        requestApi(inputField.value);
    }
});

function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Aqui você pode adicionar a lógica para manipular os dados recebidos
        })
        .catch((error) => console.error('Erro ao buscar dados:', error));
}
