var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [ ]
  },
});

ratingRT = ['Rating RT'];
episodes = ['Episodes'];
rank = ['Rank [Nielsen]'];
rating = ['Rating  [Nielsen]'];

d3.csv("/Data/season_data.csv", function(error, data) {
    data.forEach(function(row) {
        ratingRT.push(Number(row["Rating RT"]))
        episodes.push(parseInt(row["Episodes"]))
        rank.push(parseInt(row["Rank [Nielsen]"]))
        rating.push(Number(row["Rating  [Nielsen]"]))
    });

    chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ratingRT, episodes, rank, rating
            ]
        },
        tooltip: {
          format: {
            title: function (title) { return 'Season ' + title; }
          }
        },
        axis: {
            x: {
                categories: ['1','2', '3', '4', '5', '6', '7', '8', '9'],
                label: {
                    position: 'outer-center',
                    text: 'Season Number',
                } ,
                type: 'category',
            }
        }
    });
    chart.hide(['Rating RT', 'Rank [Nielsen]', 'Rating  [Nielsen]']);
});

function loadRating(dataToShow){
    chart.hide(['Episodes', 'Rating RT', 'Rank [Nielsen]', 'Rating  [Nielsen]']);
    chart.show([dataToShow]);

    //CSS manipulation
    document.getElementById("Episodes").classList.remove('active');
    document.getElementById("Rank [Nielsen]").classList.remove('active');
    document.getElementById("Rating  [Nielsen]").classList.remove('active');
    document.getElementById("Rating RT").classList.remove('active');

    document.getElementById(dataToShow).classList.add('active');

}
