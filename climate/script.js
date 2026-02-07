document.querySelector('.search-weather').addEventListener('submit', async (event) => {
	event.preventDefault();

	const city = document.querySelector('#city-name').value;
	if (!city) {showWarning('Carregando dados...');}
	
	const apiKey = 'eab5b6b154feade2a8396c49d4a6c551';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${apiKey}&units=metric&lang=pt_br`

	const results = await fetch(apiUrl);
	const json = await results.json();
		
	if (json.cod === 200) {
		showInfo({
			city: json.name,
			country: json.sys.country,
			temp: json.main.temp,
			tempMax: json.main.temp_max,
			tempMin: json.main.temp_min,
			description: json.weather[0].description,
			tempIcon: json.weather[0].icon,
			windSpeed: json.wind.speed,
			humidity: json.main.humidity,
		}); 
	}

	else
	{clearInfo();
	showWarning(`Cidade não encontrada! <img src="searching.svg"/>`)}
})

function showWarning(message) {document.querySelector('.message').innerHTML = message;}

function showInfo(json) {
	showWarning('');

	document.querySelector('.weather-result').classList.add('show');
	document.querySelector('.city').innerHTML = `${json.city}, ${json.country}`;
  document.querySelector('.temp-value').innerHTML = `${Math.round(json.temp)} <sup>ºC</sup>`;
  document.querySelector('.temp-description').innerHTML = json.description;
	document.querySelector('.temp img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
  document.querySelector('#temp-max').innerHTML = `${Math.round(json.tempMax)} <sup>ºC</sup>`;
  document.querySelector('#temp-min').innerHTML = `${Math.round(json.tempMin)} <sup>ºC</sup>`;
  document.querySelector('#humidity').innerHTML = `${json.humidity}%`;
  document.querySelector('#wind').innerHTML = `${json.windSpeed} <span>km/h</span>`;

}

function clearInfo() {
	showWarning('');
	document.querySelector('.weather-result').classList.remove('show');
}