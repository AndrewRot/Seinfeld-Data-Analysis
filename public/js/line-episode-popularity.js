// Episode	Lines	Views
var numberOfLinesAll = ['Lines'];
var numberOfLinesElaine= ['Elaine Lines'];
var numberOfLinesGeorge= ['George Lines'];
var numberOfLinesJerry= ['Jerry Lines'];
var numberOfLinesKramer= ['Kramer Lines'];
var numberOfViews = ['Views'];


d3.csv("/Data/line-episide-popularity.csv", function(error, data) {
    console.log(data);
    data.forEach(function(row) {
      if (row["Views"] < 60) {
        numberOfLinesAll.push(Number(row["Lines"]));
        numberOfLinesElaine.push(Number(row["Elaine Lines"]));
        numberOfLinesGeorge.push(Number(row["George Lines"]));
        numberOfLinesJerry.push(Number(row["Elaine Lines"]));
        numberOfLinesKramer.push(Number(row["Elaine Lines"]));
        numberOfViews.push(Number(row["Views"]));
      }
        
    });

    allScatterplot = c3.generate({
        bindto: '#all-line-episode-pop-chart',
        data: {
            xs: {
                Lines: 'Views',
            },
            columns: [
                numberOfLinesAll, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Number of Lines',
            },
            min: 0,
            padding: 0,
          },
        },
        tooltip: {
            format: {
                title: function (title) { return 'Episode Views ' + title + ' Million'; }
            }
        },
    });

    c3.generate({
        bindto: '#elaine-line-episode-pop-chart',
        data: {
            xs: {
                'Elaine Lines': 'Views',
            },
            columns: [
                numberOfLinesElaine, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Number of Lines',
            },
            min: 0,
            padding: 0,
          },
        },
        tooltip: {
            format: {
                title: function (title) { return 'Episode Views ' + title + ' Million'; }
            }
        },
    });
    c3.generate({
        bindto: '#george-line-episode-pop-chart',
        data: {
            xs: {
                'George Lines': 'Views',
            },
            columns: [
                numberOfLinesGeorge, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Number of Lines',
            },
            min: 0,
            padding: 0,
          },
        },
        tooltip: {
            format: {
                title: function (title) { return 'Episode Views ' + title + ' Million'; }
            }
        },
    });
    c3.generate({
        bindto: '#jerry-line-episode-pop-chart',
        data: {
            xs: {
                'Jerry Lines': 'Views',
            },
            columns: [
                numberOfLinesJerry, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Number of Lines',
            },
            min: 0,
            padding: 0,
          },
        },
        tooltip: {
            format: {
                title: function (title) { return 'Episode Views ' + title + ' Million'; }
            }
        },
    });
    c3.generate({
        bindto: '#kramer-line-episode-pop-chart',
        data: {
            xs: {
                'Kramer Lines': 'Views',
            },
            columns: [
                numberOfLinesKramer, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Number of Lines',
            },
            min: 0,
            padding: 0,
          },
        },
        tooltip: {
            format: {
                title: function (title) { return 'Episode Views ' + title + ' Million'; }
            }
        },
    });
    // chart.hide(['Rating RT', 'Rank [Nielsen]', 'Rating  [Nielsen]']);
});

