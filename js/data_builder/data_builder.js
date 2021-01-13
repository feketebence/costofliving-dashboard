let dataq = dataAllCities;

let weightsOutput = {
    "name": "nm",
    "children": [
      {
        "name": "Restaurants",
        "category_size": 40,
        "children": [
          {
            "name": "Meal, Inexpensive Restaurant",
            "size": 50
          },
          {
            "name": "Three-course meal for 2 People",
            "size": 2
          },
          {
            "name": "Meal at McDonalds",
            "size": 5
          },
          {
            "name": "Domestic Beer (0.5l)",
            "size": 5
          },
          {
            "name": "Imported Beer (0.33l)",
            "size": 5
          },
          {
            "name": "Cappuccino",
            "size": 5
          },
          {
            "name": "Coke/Pepsi (0.33l)",
            "size": 5
          },
          {
            "name": "Water (0.33l)",
            "size": 5
          }
        ]
      },
      {
        "name": "Markets",
        "category_size": 95,
        "children": [
          {
            "name": "Milk",
            "size": 5
          },
          {
            "name": "White Bread",
            "size": 5
          },
          {
            "name": "Rice",
            "size": 5
          },
          {
            "name": "Eggs",
            "size": 5
          },
          {
            "name": "Local Cheese",
            "size": 5
          },
          {
            "name": "Chicken Fillets",
            "size": 5
          },
          {
            "name": "Beef Round",
            "size": 5
          },
          {
            "name": "Apples",
            "size": 5
          },
          {
            "name": "Banana",
            "size": 5
          },
          {
            "name": "Oranges",
            "size": 5
          },
          {
            "name": "Tomato",
            "size": 5
          },
          {
            "name": "Potato",
            "size": 5
          },
          {
            "name": "Onion",
            "size": 5
          },
          {
            "name": "Lettuce",
            "size": 5
          },
          {
            "name": "Water",
            "size": 5
          },
          {
            "name": "Bottle of Wine",
            "size": 5
          },
          {
            "name": "Domestic Beer",
            "size": 5
          },
          {
            "name": "Imported Beer",
            "size": 5
          },
          {
            "name": "Cigarettes",
            "size": 5
          }
        ]
      },
      {
        "name": "Transportation",
        "category_size": 40,
        "children": [
          {
            "name": "One-way Ticket",
            "size": 5
          },
          {
            "name": "Monthly Pass",
            "size": 5
          },
          {
            "name": "Taxi Start",
            "size": 5
          },
          {
            "name": "Taxi 1km",
            "size": 5
          },
          {
            "name": "Taxi 1hour waiting",
            "size": 5
          },
          {
            "name": "1l Gasoline",
            "size": 5
          },
          {
            "name": "Volkswagen Golf",
            "size": 0.1
          },
          {
            "name": "Toyota Corolla Sedan",
            "size": 0.01
          }
        ]
      },
      {
        "name": "Utilities",
        "category_size": 15,
        "children": [
          {
            "name": "Basics for 85m2 Ap",
            "size": 5
          },
          {
            "name": "1 min. of Prepaid Mobile",
            "size": 5
          },
          {
            "name": "Internet ( >60 Mbps)",
            "size": 5
          }
        ]
      },
      {
        "name": "Leisure",
        "category_size": 15,
        "children": [
          {
            "name": "Gym, monthly Fee",
            "size": 5
          },
          {
            "name": "Tennis Court Rent",
            "size": 5
          },
          {
            "name": "Cinema",
            "size": 5
          }
        ]
      },
      {
        "name": "Childcare",
        "category_size": 10,
        "children": [
          {
            "name": "Kindergarten",
            "size": 5
          },
          {
            "name": "International Primary School",
            "size": 5
          }
        ]
      },
      {
        "name": "Clothing",
        "category_size": 20,
        "children": [
          {
            "name": "Jeans (Levis 501 Or Similar)",
            "size": 5
          },
          {
            "name": "Summer Dress in a Chain Store",
            "size": 5
          },
          {
            "name": "Nike Running Shoes",
            "size": 5
          },
          {
            "name": "Men Leather Business Shoes",
            "size": 5
          }
        ]
      },
      {
        "name": "Rent",
        "category_size": 20,
        "children": [
          {
            "name": "Apartment (1 bedroom) in centre",
            "size": 5
          },
          {
            "name": "Apartment (1 bedroom) outside of centre",
            "size": 5
          },
          {
            "name": "Apartment (3 bedrooms) in centre",
            "size": 5
          },
          {
            "name": "Apartment (3 bedrooms) outside of centre",
            "size": 5
          }
        ]
      },
      {
        "name": "Apartment",
        "category_size": 10,
        "children": [
          {
            "name": "Price per m² to buy apartment in centre",
            "size": 5
          },
          {
            "name": "Price per m² to buy apartment outside of centre",
            "size": 5
          }
        ]
      },
      {
        "name": "Salary",
        "category_size": 10,
        "children": [
          {
            "name": "Avg. Monthly Net Salary",
            "size": 5
          },
          {
            "name": "Mortgage Interest Rate (%), Yearly, for 20 Years Fixed-Rate",
            "size": 5
          }
        ]
      }
    ]
};

let itemNames = {
    restaurants: {
        meal_inexpensive_restaurant: {
            nameLong: "Meal, Inexpensive Restaurant",
            nameShort: "Cheap meal"
        },
        meal_mid_range_restaurant: {
            nameLong: "Meal for 2 People, Mid-range Restaurant, Three-course",
            nameShort: "Three course, 2 people"
        },
        mcdonalds_combo: {
            nameLong: "McMeal at McDonalds (or Equivalent Combo Meal)",
            nameShort: "McDonalds Combo"
        },
        domestic_beer: {
            nameLong: "Domestic Beer (0.5 liter draught)",
            nameShort: "Domestic Beer"
        },
        imported_beer: {
            nameLong: "Imported Beer (0.33 liter bottle)",
            nameShort: "Imported Beer"
        },
        cappucino: {
            nameLong: "Cappuccino (regular)",
            nameShort: "Cappuccino"
        },
        coke_pepsi: {
            nameLong: "Coke/Pepsi (0.33 liter bottle)",
            nameShort: "Coke/Pepsi"
        },
        water: {
            nameLong: "Water (0.33 liter bottle)",
            nameShort: "Water"
        }
    },
    markets: {
        milk: {
            nameLong: "Milk (regular), (1 liter)",
            nameShort: "Milk"
        },
        bread: {
            nameLong: "Loaf of Fresh White Bread (500g)",
            nameShort: "Bread"
        },
        rice: {
            nameLong: "Rice (white), (1kg)",
            nameShort: "Rice"
        },
        eggs: {
            nameLong: "Eggs (regular) (12)",
            nameShort: "Eggs"
        },
        cheese: {
            nameLong: "Local Cheese (1kg)",
            nameShort: "Cheese"
        },
        chicken: {
            nameLong: "Chicken Fillets (1kg)",
            nameShort: "Chicken"
        },
        beef: {
            nameLong: "Beef Round (1kg) (or Equivalent Back Leg Red Meat)",
            nameShort: "Beef"
        },
        apple: {
            nameLong: "Apples (1kg)",
            nameShort: "Apples"
        },
        banana: {
            nameLong: "Banana (1kg)",
            nameShort: "Banana"
        },
        orange: {
            nameLong: "Oranges (1kg)",
            nameShort: "Oranges"
        },
        tomato: {
            nameLong: "Tomato (1kg)",
            nameShort: "Tomato"
        },
        potato: {
            nameLong: "Potato (1kg)",
            nameShort: "Potato"
        },
        onion: {
            nameLong: "Onion (1kg)",
            nameShort: "Onion"
        },
        lettuce: {
            nameLong: "Lettuce (1 head)",
            nameShort: "Lettuce"
        },
        water: {
            nameLong: "Water (1.5 liter bottle)",
            nameShort: "Water"
        },
        wine: {
            nameLong: "Bottle of Wine (Mid-Range)",
            nameShort: "Bottle of Wine"
        },
        beer: {
            nameLong: "Domestic Beer (0.5 liter bottle)",
            nameShort: "Domestic Beer"
        },
        imported_beer: {
            nameLong: "Imported Beer (0.33 liter bottle)",
            nameShort: "Imported Beer"
        },
        cigarettes: {
            nameLong: "Cigarettes 20 Pack (Marlboro)",
            nameShort: "Cigarettes"
        }
    },
    transportation: {
        one_way_ticket: {
            nameLong: "One-way Ticket (Local Transport)",
            nameShort: "One-way Ticket"
        },
        monthly_pass: {
            nameLong: "Monthly Pass (Regular Price)",
            nameShort: "Monthly Pass"
        },
        taxi_start: {
            nameLong: "Taxi Start (Normal Tariff)",
            nameShort: "Taxi Start"
        },
        taxi_1km: {
            nameLong: "Taxi 1km (Normal Tariff)",
            nameShort: "Taxi 1km"
        },
        taxi_1h: {
            nameLong: "Taxi 1hour Waiting (Normal Tariff)",
            nameShort: "Taxi 1h"
        },
        gasoline: {
            nameLong: "Gasoline (1 liter)",
            nameShort: "Gasoline"
        },
        volkswagen: {
            nameLong: "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)",
            nameShort: "Volkswagen Golf"
        },
        toyota: {
            nameLong: "Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)",
            nameShort: "Toyota Corolla"
        }
    },
    utilities: {
        basic: {
            nameLong: "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment	",
            nameShort: "Basic utilities"
        },
        prepaid_mobile: {
            nameLong: "1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)",
            nameShort: "Prepaid mobile"
        },
        internet: {
            nameLong: "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)",
            nameShort: "Internet"
        }
    },
    leisure: {
        fitness_club: {
            nameLong: "Fitness Club, Monthly Fee for 1 Adult",
            nameShort: "Gym, monthly fee"
        },
        tennis_court: {
            nameLong: "Tennis Court Rent (1 Hour on Weekend)",
            nameShort: "Tennis (1h)"
        },
        cinema: {
            nameLong: "Cinema, International Release, 1 Seat",
            nameShort: "Cinema"
        }
    },
    childcare: {
        preschool: {
            nameLong: "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child",
            nameShort: "Kindergarten"
        },
        primary_school: {
            nameLong: "International Primary School, Yearly for 1 Child",
            nameShort: "Primary school"
        }
    },
    clothing: {
        pair_of_jeans: {
            nameLong: "Pair of Jeans (Levis 501 Or Similar)",
            nameShort: "Jeans"
        },
        summer_dress: {
            nameLong: "Summer Dress in a Chain Store (Zara, H&M, ...)",
            nameShort: "Summer Dress"
        },
        running_shoes: {
            nameLong: "Pair of Nike Running Shoes (Mid-Range)",
            nameShort: "Nike shoes"
        },
        business_shoes: {
            nameLong: "Pair of Men Leather Business Shoes",
            nameShort: "Business shoes"
        }
    },
    rent: {
        ap_1bedroom_center: {
            nameLong: "Rent per month for Apartment (1 bedroom) in City Centre",
            nameShort: "Rent, small apartment, center"
        },
        ap_1bedroom_outside: {
            nameLong: "Rent per month for Apartment (1 bedroom) Outside of Centre",
            nameShort: "Rent, small apartment, outside"
        },
        ap_3bedroom_center: {
            nameLong: "Rent per month for Apartment (3 bedrooms) in City Centre",
            nameShort: "Rent, large apartment, center"
        },
        ap_3bedroom_outside: {
            nameLong: "Rent per month for Apartment (3 bedrooms) Outside of Centre",
            nameShort: "Rent, large apartment, outside"
        }
    },
    apartment: {
        buy_apartment_center: {
            nameLong: "Price per Square Meter to Buy Apartment in City Centre",
            nameShort: "Buy apartment center"
        },
        buy_apartment_outside: {
            nameLong: "Price per Square Meter to Buy Apartment Outside of Centre",
            nameShort: "Buy apartment outside"
        }
    },
    salary: {
        net_salary: {
            nameLong: "Average Monthly Net Salary (After Tax)",
            nameShort: "Net Salary"
        },
        mortgage_interest: {
            nameLong: "Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate",
            nameShort: "Mortgage (%)"
        }
    }
};

// itemNames.city.category.clothing.business_shoes['nameLong']

function buildData(dataq) {
    let nonCategKeys = ["name", "lat", "long", "country", "population", "score", "COL_index"];
    let builtData = {};

    for (let [cityKey, city] of Object.entries(dataq)) {
        builtData[cityKey] = {};

        let categories = {};
        let attributes = {};

        for (let [categoryKey, category] of Object.entries(dataq[cityKey])) {

            // if the key is non-category, then add it to an 'attributes' object
            if (nonCategKeys.indexOf(categoryKey) !== -1) {
                attributes[categoryKey] = category;
            } else {
                //fill up category with items
                let items = {
                    categWeightSum: 0,
                    categValueSum: 0,
                    categSizeSum: 0
                };

                for (let [itemKey, item] of Object.entries(dataq[cityKey][categoryKey])) {

                    let itemData = {
                        nameLong: "",
                        nameShort: "",
                        weight: 2,
                        value: 0,
                        size: 0
                    };

                    regex = /_weight/g;
                    if (itemKey.match(regex) == null) {  // if not matching
                        // fill up itemData
                    
                        itemData.value = item;
                        itemData.nameLong = itemNames[categoryKey][itemKey].nameLong;
                        itemData.nameShort = itemNames[categoryKey][itemKey].nameShort;

                        // set itemData as value to corresponding item 
                        items[itemKey] = itemData;
                    }
                }
                categories[categoryKey] = items;
            }
        }

        builtData[cityKey]['attribute'] = attributes;
        builtData[cityKey]['category'] = categories;
    }

    return builtData;
}

let rebuiltData = buildData(dataq);

function fillDataWithWeights(dataq, weightsOutput) {

    for (let [cityKey, city] of Object.entries(dataq)) {

        let categIdx = 0;
        for (let [categoryKey, category] of Object.entries(dataq[cityKey].category)) {

            let categoryWeightSum = 0;
            let categoryValueSum = 0;
            let categorySizeSum = 0;
            let itemIdx = 0;

            for (let [itemKey, item] of Object.entries(dataq[cityKey].category[categoryKey])) {
                let regex = /categ/g;
                if (itemKey.match(regex) == null) {

                    let currentValueFromData = dataq[cityKey].category[categoryKey][itemKey].value;
                    let currentWeightFromOutput = weightsOutput.children[categIdx].children[itemIdx].size;

                    dataq[cityKey].category[categoryKey][itemKey].weight = currentWeightFromOutput;
                    categoryWeightSum += currentWeightFromOutput;
                    categoryValueSum += currentValueFromData;

                    let currentSize = currentWeightFromOutput * currentValueFromData;
                    dataq[cityKey].category[categoryKey][itemKey].size = currentSize;

                    categorySizeSum += currentSize;

                    itemIdx++;
                }
            }

            dataq[cityKey].category[categoryKey].categWeightSum = categoryWeightSum;
            dataq[cityKey].category[categoryKey].categValueSum = categoryValueSum;
            dataq[cityKey].category[categoryKey].categSizeSum = categorySizeSum;
            categIdx++;
        }
    }

    return dataq;

}

let finalData = fillDataWithWeights(rebuiltData, weightsOutput);
rebuiltData = null;

// console.log(finalData);


