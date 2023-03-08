function buttonClicked() {

    var city = document.getElementById("fetchAPI").value; //get the searched value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)

      .then((response) => response.json())

      .then((data) => {

        console.log(data); //output the API into console.
        console.log("City temp:" + data.main.temp)

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City celcius:" + celcius + "celcius")

        console.log("City wind:" + data.wind.speed)

        // Convert UTC time to local time
        var utcTime = Date.now();
        var localTime = new Date(utcTime + (data.timezone * 1000));
        var formattedTime = localTime.toLocaleTimeString();

        // Remove existing table
        var existingTable = document.getElementById("display").getElementsByTagName('table')[0];
        if(existingTable) {
            existingTable.remove();
        }

        // Create table
        var table = document.createElement("table");

        // Add table header
        var headerRow = table.insertRow();
        var tempHeader = headerRow.insertCell();
        tempHeader.innerHTML = "Temperature (C)";
        var windHeader = headerRow.insertCell();
        windHeader.innerHTML = "Wind Speed (km/h)";
        var humidityHeader = headerRow.insertCell();
        humidityHeader.innerHTML = "Humidity";
        var timezoneHeader = headerRow.insertCell();
        timezoneHeader.innerHTML = "Local Time";
        var weatherHeader = headerRow.insertCell();
        weatherHeader.innerHTML = "Weather";

        // Add table data
        var dataRow = table.insertRow();
        var tempData = dataRow.insertCell();
        tempData.innerHTML = celcius + " celcius";
        var windData = dataRow.insertCell();
        windData.innerHTML = data.wind.speed + " km/h";
        var humidityData = dataRow.insertCell();
        humidityData.innerHTML = data.main.humidity;
        var timezoneData = dataRow.insertCell();
        timezoneData.innerHTML = formattedTime;
        var weatherData = dataRow.insertCell();
        weatherData.innerHTML = data.weather[0].main;

        // Add table to HTML
        document.getElementById("display").appendChild(table);

      })
}

function buttonClicked2() {
  
    // Get the user's selected city from the dropdown menu
    var city = document.getElementById("citySelect").value;

    // Fetch weather information from the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Sorry, we couldn't fetch the weather information for " + city + ".");
      }
    })
    .then((data) => {

      console.log(data); //output the API into console.
      console.log("City temp:" + data.main.temp)

      var celcius = (data.main.temp - 273.15).toFixed(1);
      console.log("City celcius:" + celcius + "celcius")

      console.log("City wind:" + data.wind.speed)

      // Convert UTC time to local time
      var utcTime = Date.now();
      var localTime = new Date(utcTime + (data.timezone * 1000));
      var formattedTime = localTime.toLocaleTimeString();

      // Remove existing table
      var existingTable = document.getElementById("display").getElementsByTagName('table')[0];
      if(existingTable) {
          existingTable.remove();
      }

      // Create table
      var table = document.createElement("table");

      // Add table header
      var headerRow = table.insertRow();
      var tempHeader = headerRow.insertCell();
      tempHeader.innerHTML = "Temperature (C)";
      var windHeader = headerRow.insertCell();
      windHeader.innerHTML = "Wind Speed (km/h)";
      var humidityHeader = headerRow.insertCell();
      humidityHeader.innerHTML = "Humidity";
      var timezoneHeader = headerRow.insertCell();
      timezoneHeader.innerHTML = "Local Time";
      var weatherHeader = headerRow.insertCell();
      weatherHeader.innerHTML = "Weather";

      // Add table data
      var dataRow = table.insertRow();
      var tempData = dataRow.insertCell();
      tempData.innerHTML = celcius + " celcius";
      var windData = dataRow.insertCell();
      windData.innerHTML = data.wind.speed + " km/h";
      var humidityData = dataRow.insertCell();
      humidityData.innerHTML = data.main.humidity;
      var timezoneData = dataRow.insertCell();
      timezoneData.innerHTML = formattedTime;
      var weatherData = dataRow.insertCell();
      weatherData.innerHTML = data.weather[0].main;

      // Add table to HTML
      document.getElementById("display").appendChild(table);

    })
    .catch((error) => {
      // If an error occurs during the fetch, display an error message
      var display = document.getElementById("display");
      display.innerHTML = error.message;
    });
}