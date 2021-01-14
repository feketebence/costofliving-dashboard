// console.log("works")

let city1_col_span = document.querySelector("#city1-COL");
let city2_col_span = document.querySelector("#city2-COL");

function updateCOLdisplay() {
    city1_col_span.innerHTML = finalData[selectedCity1].attribute.COL_index;
    city2_col_span.innerHTML = finalData[selectedCity2].attribute.COL_index;
}