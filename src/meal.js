function buttonClicked3(){

    var meal = document.getElementById("fetchMEAL").value.trim(); //get the searched value and remove leading/trailing spaces

    if (!meal) {
        alert("Please enter a meal name");
        return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then((response) => response.json())
        .then((data) => {
            if (!data.meals || data.meals.length === 0) {
                alert(`No results found for '${meal}'`);
                return;
            }

            // Create table
            var table1 = document.createElement("table");
            
            // Add table header
            var headerRow = table1.insertRow();
            var mealHeader = headerRow.insertCell();
            mealHeader.innerHTML = "Meal";
            var ingredientHeader = headerRow.insertCell();
            ingredientHeader.innerHTML = "Ingredients";
            var instructionHeader = headerRow.insertCell();
            instructionHeader.innerHTML = "Instructions";
            var imageHeader = headerRow.insertCell();
            imageHeader.innerHTML = "Image";
            var youtubeHeader = headerRow.insertCell();
            youtubeHeader.innerHTML = "Youtube";

            // Extract and format ingredient data
            var ingredients = [];
            for (var i = 1; i <= 20; i++) {
                var ingredient = data.meals[0]["strIngredient" + i];
                var measurement = data.meals[0]["strMeasure" + i];
                if (ingredient) {
                    ingredients.push(`${ingredient} - ${measurement}`);
                }
            }
            
            // Add table data
            var dataRow = table1.insertRow();
            var mealData = dataRow.insertCell();
            mealData.innerHTML = data.meals[0].strMeal;
            var ingredientData = dataRow.insertCell();
            ingredientData.innerHTML = ingredients.join("<br>");
            var instructionData = dataRow.insertCell();
            instructionData.innerHTML = data.meals[0].strInstructions;
            var imageData = dataRow.insertCell();
            imageData.innerHTML = `<img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}" width="100">`;
            var youtubeData = dataRow.insertCell();
            youtubeData.innerHTML = `<a href="${data.meals[0].strYoutube}" target="_blank">${data.meals[0].strYoutube}</a>`;
            
            // Add style to table
            table1.style.fontSize = "12px";
            
            // Add table to HTML
            document.getElementById("display1").appendChild(table1);

        })
        .catch((error) => {
            alert("Error occurred while fetching data");
            console.error(error);
        });
}