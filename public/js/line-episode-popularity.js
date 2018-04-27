var allScatterplot = c3.generate({
    bindto: '#all-line-episode-pop-chart',
    data: {
        columns: [ ]
    },
});

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
        numberOfLinesAll.push(Number(row["Lines"]));
        numberOfLinesElaine.push(Number(row["Elaine Lines"]));
        numberOfLinesGeorge.push(Number(row["George Lines"]));
        numberOfLinesJerry.push(Number(row["Elaine Lines"]));
        numberOfLinesKramer.push(Number(row["Elaine Lines"]));
        numberOfViews.push(parseInt(row["Views"]));
        
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
        tooltip: {
            format: {
                title: function (title) { return 'Lines Count ' + title; }
            }
        },
        // axis: {
        //     x: {
        //         categories: ['1','2', '3', '4', '5', '6', '7', '8', '9'],
        //         label: {
        //             position: 'outer-center',
        //             text: 'Season Number',
        //         } ,
        //         type: 'scatter',
        //     }
        // }
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
        tooltip: {
            format: {
                title: function (title) { return 'Lines Count ' + title; }
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
        tooltip: {
            format: {
                title: function (title) { return 'Lines Count ' + title; }
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
        tooltip: {
            format: {
                title: function (title) { return 'Lines Count ' + title; }
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
        tooltip: {
            format: {
                title: function (title) { return 'Lines Count ' + title; }
            }
        },
    });
    // chart.hide(['Rating RT', 'Rank [Nielsen]', 'Rating  [Nielsen]']);
});

