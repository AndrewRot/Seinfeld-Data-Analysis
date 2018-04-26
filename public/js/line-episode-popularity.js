var scatterplot = c3.generate({
    bindto: '#line-episode-pop-chart',
    data: {
        columns: [ ]
    },
});
// Episode	Lines	Views
var numberOfLines = ['Lines'];
var numberOfViews = ['Views'];

d3.csv("/Data/line-episide-popularity.csv", function(error, data) {
    console.log(data);
    data.forEach(function(row) {
        numberOfLines.push(Number(row["Lines"]));
        numberOfViews.push(parseInt(row["Views"]));
    });

    scatterplot = c3.generate({
        bindto: '#line-episode-pop-chart',
        data: {
            xs: {
                Lines: 'Views',
            },
            columns: [
                numberOfLines, numberOfViews
            ],
            type: 'scatter'
        },
        // tooltip: {
        //     format: {
        //         title: function (title) { return 'Season ' + title; }
        //     }
        // },
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
    // chart.hide(['Rating RT', 'Rank [Nielsen]', 'Rating  [Nielsen]']);
});

