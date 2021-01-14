            //////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////
function showRadar(city1, city2){


			var margin = { top: 50, right: 80, bottom: 50, left: 80 },
				width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom);

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////
            
            var city_data_1 = [];
            var city_data_2 = [];
            function sum( obj ) {
                var sum = 0;
                for( var el in obj ) {
                  if( obj.hasOwnProperty( el ) ) {
                    sum += parseFloat( obj[el] );
                  }
                }
                return sum;
              }
            Object.keys(categories_data).forEach(function(key) {
                if(["markets", "restaurants", "leisure", "clothing", "transporation","utilities"].includes(key) == false){
                  return;
                }   
                    //items_children = items_children + categories_data[key][i] +"," + key + "," + json_data[city][key][categories_data[key][i]] + "\n";
                    cat_sum_1 = sum(json_data[city1][key]);
                    city_data_1.push({ axis : key, value: cat_sum_1})
                    cat_sum_2 = sum(json_data[city2][key]);
                    city_data_2.push({ axis : key, value: cat_sum_2})
                })

                var data = [
                    { name: city1,
                        axes: city_data_1
                    },
                    { name: city2,
                        axes: city_data_2
                    }
                ];

			//////////////////////////////////////////////////////////////
			////// First example /////////////////////////////////////////
            ///// (not so much options) //////////////////////////////////
			//////////////////////////////////////////////////////////////
			var radarChartOptions = {
			  w: 290,
			  h: 350,
			  margin: margin,
			  levels: 5,
			  roundStrokes: true,
				color: d3.scaleOrdinal().range(["#26AF32", "#762712"]),
				format: '.0f'
			};

			//////////////////////////////////////////////////////////////
			///// Second example /////////////////////////////////////////
			///// Chart legend, custom color, custom unit, etc. //////////
			//////////////////////////////////////////////////////////////
			var radarChartOptions2 = {
			  w: 440,
			  h: 500,
			  margin: margin,
			  maxValue: 60,
			  levels: 6,
			  roundStrokes: false,
			  color: d3.scaleOrdinal().range(["#AFC52F", "#ff6600"]),
				format: '.0f',
				legend: { title: '', translateX: 100, translateY: 40 },
				unit: '€'
			};

			// Draw the chart, get a reference the created svg element :
			let svg_radar2 = RadarChart(".radarChart2", data, radarChartOptions2);
		};