d3.csv("/Data/views_per_sentiment.csv", function(error, data) {

  
  elaine = "Elaine";
  george = "George";
  jerry = "Jerry";
  kramer = "Kramer";
  
  positive = ['Positive']
  neutral = ['Neutral']
  negative = ['Negative']
  
  data.forEach(function(row) {
    switch (row.Sentiment) {
      case '1':
        positive.push(Number(row['Average Views']));
        break;
      case '0':
        neutral.push(Number(row['Average Views']));
        break;
      case '-1':
        negative.push(Number(row['Average Views']));
        break;
    }
  });
  
  dirchart = c3.generate({
    bindto: '#viewSentimentChart',
    data: {
      columns: [
        positive,
        neutral,
        negative,
      ],
      type : 'bar',
    },
    tooltip: {
      format: {
        value: function (value, ratio, id, index) { return value.toFixed(2) + " Million"; }
      }
    },
    axis: {
      x: {
        categories: [elaine, george, jerry, kramer],
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
    },
  });
});

