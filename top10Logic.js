    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
      ['State', 'Shootings', 'Victims Killed'],
          ['California', 26,179],
          ['Texas', 18, 154],
          ['Florida', 13,130],
          ['Nevada', 3,66],
          ['Pennsylvania', 10,53],
          ['Colorado', 6,50],
          ['New York', 9,49],
          ['North Carolina', 8,45],
          ['Virgina', 2, 44],
          ['Connecticut', 3,39],
          // ['Washington', 8,38],
          // ['Tennessee', 3,34],
          // ['Kentucky', 5,28],
          // ['Illinois', 5,24],
          // ['Wisconsin', 4,23],
          // ['Oregon', 4,23],
          // ['Ohio', 3,20]
      ]);

      var options = {
        title: 'Correlation between Shootings and Victims Killed ' +
               'for top 10 states with the highest victim count between 1966 - 2019',
        hAxis: {title: 'Shootings'},
        vAxis: {title: 'Victims Killed'},
        bubble: {textStyle: {fontSize: 11}}      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }


// Load data from hours-of-tv-watched.csv
// start test code for d3.JSON to work
// d3.json("http://localhost:5000/api/v1.0/tobs").then(function(tvData) {
  
//   console.log(tvData);

//   // // log a list of names
//   // var names = tvData.map(data => data.name);
//   // console.log("names", names);

//   // // Cast each hours value in tvData as a number using the unary + operator
//   // tvData.forEach(function(data) {
//   //   data.hours = +data.hours;
//   //   console.log("Name:", data.name);
//   //   console.log("Hours:", data.hours);
//   // });
// }).catch(function(error) {
//   console.log(error);
// });
// end test code for d3.JSON to work


