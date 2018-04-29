var sentimentAll = ['Average Sentiment'];
var sentimentElaine= ['Elaine Sentiment'];
var sentimentGeorge= ['George Sentiment'];
var sentimentJerry= ['Jerry Sentiment'];
var sentimentKramer= ['Kramer Sentiment'];
var numberOfViews = ['Views'];


d3.csv("/Data/sentiment_all.csv", function(error, data) {
    data.forEach(function(row) {
        sentimentAll.push(Number(row["Sentiment"]));
        sentimentElaine.push(Number(row["Elaine Sentiment"]));
        sentimentGeorge.push(Number(row["George Sentiment"]));
        sentimentJerry.push(Number(row["Jerry Sentiment"]));
        sentimentKramer.push(Number(row["Kramer Sentiment"]));
        numberOfViews.push(Number(row["Views"]));
        
    });

    c3.generate({
        bindto: '#all_sentiment_correlation',
        data: {
            xs: {
              'Average Sentiment': 'Views',
            },
            columns: [
                sentimentAll, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Sentiment',
            },
            min: -1,
            max: 1,
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
        bindto: '#elaine_sentiment_correlation',
        data: {
            xs: {
                'Elaine Sentiment': 'Views',
            },
            columns: [
                sentimentElaine, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Sentiment',
            },
            min: -1,
            max: 1,
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
        bindto: '#george_sentiment_correlation',
        data: {
            xs: {
                'George Sentiment': 'Views',
            },
            columns: [
                sentimentGeorge, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Sentiment',
            },
            min: -1,
            max: 1,
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
        bindto: '#jerry_sentiment_correlation',
        data: {
            xs: {
                'Jerry Sentiment': 'Views',
            },
            columns: [
                sentimentJerry, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Sentiment',
            },
            min: -1,
            max: 1,
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
        bindto: '#kramer_sentiment_correlation',
        data: {
            xs: {
                'Kramer Sentiment': 'Views',
            },
            columns: [
                sentimentKramer, numberOfViews
            ],
            type: 'scatter'
        },
        axis: {
          y: {
            label: {
              position: 'outer-middle',
              text: 'Sentiment',
            },
            min: -1,
            max: 1,
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

