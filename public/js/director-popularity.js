var dirchart = c3.generate({
  bindto: '#directorPopularityChart',
  data: {
    columns: [ ]
  },
  type : 'bar',
});



d3.csv("/Data/director_popularity.csv", function(error, data) {

  
  director1 = "Art Wolff";
  director2 = "Tom Cherones";
  director3 = "David Steinberg";
  director4 = "Joshua White";
  director5 = "Jason Alexander";
  director6 = "Andy Ackerman";
  director7 = "David Owen Trainor";
  
  averages = ['Average Views']
  
  data.forEach(function(row) {
    averages.push(Number(row.Average));
  });
  
  dirchart = c3.generate({
    bindto: '#directorPopularityChart',
    data: {
      columns: [averages],
      type : 'bar',
      color: function (color, d) {
        switch (d.x) {
          case 0 : return '#a6cee3';
          case 1 : return '#1f78b4';
          case 2 : return '#b2df8a';
          case 3 : return '#33a02c';
          case 4 : return '#fb9a99';
          case 5 : return '#e31a1c';
          case 6 : return '#fdbf6f';
        }
      },
    },
    tooltip: {
      format: {
        value: function (value, ratio, id, index) { return value.toFixed(2) + " Million"; }
      }
    },
    axis: {
      x: {
        categories: [director1, director2, director3, director4, director5, director6, director7],
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

