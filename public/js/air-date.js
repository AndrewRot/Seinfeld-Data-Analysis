

d3.csv("/Data/seriesoverview-months.csv", function(error, data) {
  
	
	season = []
	seasons = []
	
	data.forEach(function(row) {
		seasonList = ['Season ' + row.Season]
		season.push('Season ' + row.Season)
		seasonList.push(Number(row.January));
		seasonList.push(Number(row.February));
		seasonList.push(Number(row.March));
		seasonList.push(Number(row.April));
		seasonList.push(Number(row.May));
		seasonList.push(Number(row.June));
		seasonList.push(Number(row.July));
		seasonList.push(Number(row.August));
		seasonList.push(Number(row.September));
		seasonList.push(Number(row.October));
		seasonList.push(Number(row.November));
		seasonList.push(Number(row.December));
		seasons.push(seasonList)

	});
	c3.generate({
		bindto: '#air-date-chart',
		data: {
			columns: seasons,
			type: 'area-step'
    },
    tooltip: {
      format: {
        value: function (value, ratio, id, index) { return value + " Episodes"; }
      }
    },
    groups: [season],
    axis: {
      x: {
          categories: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          label: {
              position: 'outer-center',
              text: 'Months',
          } ,
          type: 'category',
      },
      y: {
        label: {
          position: 'outer-middle',
          text: 'Number of Episodes',
        },
        min: 0,
        padding: 0,
      },
  }
	});
});
  