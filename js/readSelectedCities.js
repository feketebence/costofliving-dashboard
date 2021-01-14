submitButton.addEventListener("click", function() {
    selectedCity1 = city1_input.value;
    selectedCity2 = city2_input.value;

    if(selectedCity1 === '') {
        alert("Please select the first city.");
        return;
    }

    if(selectedCity2 === '') {
        alert("Please select the second city.");
        return;
    }

    if (!isContained(selectedCity1, cities_list)) {
        alert(selectedCity1 + " is not found in the database, please select another city.")
        console.log("ERROR, " + selectedCity1 + " not found")
    } else if (!isContained(selectedCity2, cities_list)) {
        alert(selectedCity2 + " is not found in the database, please select another city.")
        console.log("ERROR, " + selectedCity2 + " not found")
    } else {
        placeholderCity1.innerHTML = selectedCity1;
        placeholderCity2.innerHTML = selectedCity2;
    }

    console.log(selectedCity1);
    console.log(selectedCity2);

    updateCOLdisplay();
});