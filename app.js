d3.json("http://localhost:5000/api/v1.0/shooting").then(function(jsonData) {  
  //console.log(jsonData);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {


      var jsonData = [
        {"State":"California","Shootings":26,"Victims Killed":179},
        {"State":"Texas","Shootings":18,"Victims Killed":154},
        {"State":"Florida","Shootings":13,"Victims Killed":130},
        {"State":"Nevada","Shootings":3,"Victims Killed":66},
        {"State":"Pennsylvania","Shootings":10,"Victims Killed":53}
      ];

      //var jsonData = shooting; 
    
    //  console.log(jsonData);
      var gglData = [];
      if (jsonData.length > 0) {
        // load column headings
        var colHead = [];
        Object.keys(jsonData[0]).forEach(function (key) {
          colHead.push(key);
        });
        gglData.push(colHead);
        
      //  console.log(gglData);

        // load data rows
        jsonData.forEach(function (row) {
          var gglRow = [];
          Object.keys(row).forEach(function (key) {
            gglRow.push(row[key]);
          });
        gglData.push(gglRow);

        //console.log(gglRow);
        });
      }
     // console.log(gglData);
      var data = google.visualization.arrayToDataTable(gglData);

      var options = {
        //colorAxis: {colors: ['yellow', 'red']},
        title: 'Correlation between Shootings and Victims Killed ' +
               'for the top 5 states',
        hAxis: {title: 'Shootings'},
        vAxis: {title: 'Victims Killed'},
        bubble: {textStyle: {
          fontSize: 12,
          fontName: 'Times-Roman',
          color: 'green',
          bold: true,
          italic: true}}      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
}).catch(function(error) {
  console.log(error);
}); 
  




// Load data from hours-of-tv-watched.csv
// start test code for d3.JSON to work
  // d3.json("http://localhost:5000/api/v1.0/tobs").then(function(tvData) {  
  //   console.log(tvData);
  // }).catch(function(error) {
  //   console.log(error);
  // });
// end test code for d3.JSON to work


