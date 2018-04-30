popularityBrushDomainTooLarge = true
d3.csv("/Data/writers_popularity_T.csv", function(error, data) {
  
  COLORS = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f'];

	writers = []
	averages = ['Average Views']
	
	data.forEach(function(row) {
		writers.push(row.Writer);
	  averages.push(Number(row.Average));
	});
	
	dirchart = c3.generate({
	  bindto: '#writerPopularityChart',
	  data: {
			columns: [averages],
      type : 'bar',
      color: function (color, d) {
        return COLORS[d.x%COLORS.length];
      },
    },
    legend: {
      hide: true,
    },
		subchart: {
      show: true,
      onbrush: function (domain) {
        // Check to see if the X-Axis will get squished
        if (domain[1] - domain[0] > 15) {
          popularityBrushDomainTooLarge = true;
        } else {
          popularityBrushDomainTooLarge = false;
        }
       }
    },
    onrendered: function() {
      // Removes the tick marks on the X-Axis if they are being squished
      if (popularityBrushDomainTooLarge) {
        this.selectChart.selectAll('.c3-axis-x .tick').style('visibility', 'hidden');
      } else {
        this.selectChart.selectAll('.c3-axis-x .tick').style('visibility', 'visible');
      }
      // Removes the tick marks on the X-Axis of the small chart (they are always squished)
      this.selectChart.selectAll('.c3-axis-x').nodes()[1].style.display = 'none';
    },
	  tooltip: {
			format: {
				value: function (value, ratio, id, index) { return value.toFixed(2) + " Million"; }
			}
	  },
	  axis: {
			x: {
				categories: writers,
				type: 'category',
			},
			y: {
				label: {
				position: 'outer-middle',
				text: 'Views in Millions',
				},
				min: 0,
				padding: 0,
			},
	  }
	  
		});
  });
  
  