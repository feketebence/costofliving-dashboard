function calcTotalScore(data) {

    let cities = [];

    for(let [cityKey, city] of Object.entries(data)) {

        let totalScore = 0;
        for (let [categKey, categ] of Object.entries(data[cityKey].category)) {
            totalScore += categ.categSizeSum;
        }

        cities.push({
            name: cityKey,
            value: totalScore
        });
    }

    // sort output array by values into reverse order
    cities.sort((a, b) => (a.value > b.value) ? -1 : 1);

    return cities;
}

citiesWithScores = calcTotalScore(finalData);

function getTopNcityAs2Arr(arrOfObj, n) {
    let cityNames = [];
    let cityScores = [];

    for(i = 0; i < n; i++) {
        cityNames.push(arrOfObj[i].name);
        cityScores.push(arrOfObj[i].value);
    }

    return {cityNames, cityScores};
}

// let  = getTopNcityAs2Arr(citiesWithScores, 30);

function drawBarChart(citiesWithScores, n) {

    let topNCity = getTopNcityAs2Arr(citiesWithScores, n);

    let dataForBarchart = [
        {
            x: topNCity.cityNames,
            y: topNCity.cityScores,
            type: 'bar'
        }
    ];

    let layout = {
        width: window.innerWidth
    }

    Plotly.newPlot('most_expensive_barchart', dataForBarchart, layout);
}
drawBarChart(citiesWithScores, 30);

