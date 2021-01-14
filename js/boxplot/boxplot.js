let selectedCategories = ['restaurants', 'markets'];

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

let boxPlotDiv = document.querySelector("#boxplotdiv");
let boxPlotDivContainer = document.querySelector("#boxplotdiv-container");

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
            if (containsObject(categKey, selectedCategories)) {
                filteredData[categKey].push(data[cityKey].category[categKey].categSizeSum);
            }
        }
    }

    let returnArr = [];

    for(let [categKey, categ] of Object.entries(filteredData)) {
        if(categ.length > 0) {
            returnArr.push({
                x: filteredData[categKey],
                type: 'box',
                name: categKey
            });
        }
    }

    return returnArr;
}
filteredDataForBoxplot = filterDataForBoxplot(selectedCategories, finalData);

// adding event listeners to the checkboxes
for (i in checkboxes) {
    checkboxes[i].addEventListener('change', function() {
        selectedCategories = getSelectedCategories();
        console.log(selectedCategories);
        filteredDataForBoxplot = filterDataForBoxplot(selectedCategories, finalData);

        let heightScaler = selectedCategories.length;
        boxPlotDiv.style.height = heightScaler * 150 + "px";
        
        // drawing Plotly boxplot
        Plotly.newPlot('boxplotdiv', filteredDataForBoxplot, boxplotLayout);

    })
}

Plotly.newPlot('boxplotdiv', filteredDataForBoxplot);
let boxplotLayout = {
    // title: "Distibution of Cities by category (weighted)",
    width: boxPlotDivContainer.clientWidth
};

boxPlotDiv.style.height = "300px";


