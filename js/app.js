//years bar cahrt stacked
var svgTwo = dimple.newSvg("#chartBestYear", 600, 400);
      d3.csv("/js/data/ign.csv", function (data) {
        //data = dimple.filterData(data, "Date", "01/12/2012");
        var myChart = new dimple.chart(svgTwo, data);
        myChart.setBounds(30, 30, 550, 330)
        myChart.addCategoryAxis("x", "release_year");
        myChart.addMeasureAxis("y", "title");
        var x = myChart.addSeries("score_phrase", dimple.plot.bar);
				x.addOrderRule("score_phrase");
        myChart.addLegend(10, 1, 600, 50, "right");
        myChart.draw();
  });

//platforms bar chart
var svg = dimple.newSvg("#chartPlatforms", 600, 400);
d3.csv("/js/data/ign-filtered-platforms.csv", function (data) {
	var myChart = new dimple.chart(svg, data);
	myChart.setBounds(90, 50, 390, 305)
	myChart.addMeasureAxis("x", "title");
	var y = myChart.addCategoryAxis("y", "platform");
	var x = myChart.addSeries("score_phrase", dimple.plot.bar);
	x.addOrderRule("score_phrase");
	myChart.addLegend(10, 1, 600, 50, "left");
	myChart.draw();
});

	//genre dounut pie chart
	var svgOne = dimple.newSvg("#chartGenres", 590, 400);
	    d3.csv("js/data/ign.csv", function (data) {
	      var myChart = new dimple.chart(svgOne, data);
	      myChart.setBounds(50, 20, 460, 360)
	      myChart.addMeasureAxis("p", "title");
	      var ring = myChart.addSeries("score_phrase", dimple.plot.pie);
				ring.innerRadius = "50%";
				ring.addOrderRule("score_phrase");
	      myChart.addLegend(20, 1, 90, 300, "left");
	      myChart.draw();
	    });
