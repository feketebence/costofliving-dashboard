let selectedCategories = [];

let boxplotCheckboxRestaurants = document.querySelector("#boxplot-checkbox_0");
let boxplotCheckboxMarkets = document.querySelector("#boxplot-checkbox_1");
let boxplotCheckboxTransportation = document.querySelector("#boxplot-checkbox_2");
let boxplotCheckboxUtilities = document.querySelector("#boxplot-checkbox_3");
let boxplotCheckboxLeisure = document.querySelector("#boxplot-checkbox_4");
let boxplotCheckboxChildcare = document.querySelector("#boxplot-checkbox_5");
let boxplotCheckboxClothing = document.querySelector("#boxplot-checkbox_6");
let boxplotCheckboxRent = document.querySelector("#boxplot-checkbox_7");
let boxplotCheckboxApartment = document.querySelector("#boxplot-checkbox_8");
let boxplotCheckboxSalary = document.querySelector("#boxplot-checkbox_9");

let checkboxes = [boxplotCheckboxRestaurants, boxplotCheckboxMarkets, boxplotCheckboxTransportation, boxplotCheckboxUtilities, boxplotCheckboxLeisure, boxplotCheckboxChildcare, boxplotCheckboxClothing, boxplotCheckboxRent, boxplotCheckboxApartment, boxplotCheckboxSalary];

function getSelectedCategories() {
    let selected = [];
    let categories = {
        restaurants: false,
        markets: false,
        transportation: false,
        utilities: false,
        leisure: false,
        childcare: false,
        clothing: false,
        rent: false,
        apartment: false,
        salary: false
    };

    i = 0;
    for ( [categKey, value] of Object.entries(categories)) {
        // console.log(categKey + " -> " + categories[categKey]);
        if (checkboxes[i].checked) {
            // console.log(checkboxes[i].value + " is checked!")
            categories[checkboxes[i].value] = true;
            selected.push(categKey);
        }
        i++;
    }

    return selected;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function filterDataForBoxplot(selectedCategories, data) {

    let filteredData = {
        restaurants: [],
        markets: [],
        transportation: [],
        utilities: [],
        leisure: [],
        childcare: [],
        clothing: [],
        rent: [],
        apartment: [],
        salary: []
    };

    for (let [cityKey, city] of Object.entries(data)) {
        // console.log(data[cityKey].category.categSizeSum);

        for (let [categKey, categ] of Object.entries(data[cityKey].category)) {
            console.log(cityKey, categKey, categ.categSizeSum);
            console.log(containsObject(categKey, selectedCategories))
            if (containsObject(categKey, selectedCategories)) {
                console.log(categKey + " is in selected categs");
            }
        }

    }
}
filterDataForBoxplot(selectedCategories, finalData);

// adding event listeners to the checkboxes
for (i in checkboxes) {
    checkboxes[i].addEventListener('change', function() {
        selectedCategories = getSelectedCategories();
        console.log(selectedCategories);
    })
}

