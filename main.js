window.addEventListener("load", ()=> {
	let long;
	let lat;
	let tempdesc = document.querySelector('.tempdesc');
	let tempdegree = document.querySelector('.tempdegree');
	let windspeed = document.querySelector('.windspeed');
	let timezone = document.querySelector('.timezone');
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
				lat = position.coords.latitude;
				long = position.coords.longitude;
				proxy = 'https://cors-anywhere.herokuapp.com/'; //to avoid any CORS issue
				const api = `${proxy}https://api.darksky.net/forecast/6aeef187eaf435fed8944d7f8308417c/${lat},${long}`; //Using Darksky api to showcase weather
				fetch(api)
					.then(response => {
						return response.json();
					})
					.then(data =>{
						console.log(data);
						const {temperature,summary,icon,windSpeed}= data.currently;
						tempdesc.textContent = summary;
						tempdegree.textContent = temperature;
						windspeed.textContent = windSpeed;
						long.textContent = data.longitude;
						lat.textContent = data.latitude;
						timezone.textContent = data.timezone;
					})
		})
	}
});