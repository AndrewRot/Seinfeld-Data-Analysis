var episodePopularityChart = c3.generate({
  bindto: '#episodePopularityChart',
  data: {
    columns: [ ]
  },
});

// This lets us keep track of how many tick marks we show on the screen.
// If we show them all when brushed to all 180 items, its VERY ugly.
var brushDomainTooLarge = true;

viewCountColumn = 'U.S. viewers (millions)';
categoryColumn = 'No. overall';

categories = [];
viewerCount = [viewCountColumn];
// characterSentiment = {};
JerrySentiment = ['Jerry'];
GeorgeSentiment = ['George'];
KramerSentiment = ['Kramer'];
ElaineSentiment = ['Elaine'];

d3.queue()
.defer(d3.csv, "/Data/episode_popularity.csv")
.defer(d3.csv, "/Data/characterSentiment.csv")
.await(function(error, file1, file2) {
  file1.forEach(function(row) {
    categories.push(row[categoryColumn]);
    viewerCount.push(Number(row[viewCountColumn]));

    // Character Sentiments
    episodeSentiments = file2.filter((sentimentRow) => sentimentRow['SEID'] == row['SEID']);
    JerryEpisodeSentiment =  episodeSentiments.filter((sentimentRow) => sentimentRow['Character'] == 'JERRY');
    GeorgeEpisodeSentiment =  episodeSentiments.filter((sentimentRow) => sentimentRow['Character'] == 'GEORGE');
    KramerEpisodeSentiment =  episodeSentiments.filter((sentimentRow) => sentimentRow['Character'] == 'KRAMER');
    ElaineEpisodeSentiment =  episodeSentiments.filter((sentimentRow) => sentimentRow['Character'] == 'ELAINE');

    js = JerryEpisodeSentiment.length > 0 ? Number(JerryEpisodeSentiment[0].Sentiment) : 0;
    gs = GeorgeEpisodeSentiment.length > 0 ? Number(GeorgeEpisodeSentiment[0].Sentiment) : 0;
    ks = KramerEpisodeSentiment.length > 0 ? Number(KramerEpisodeSentiment[0].Sentiment) : 0;
    es = ElaineEpisodeSentiment.length > 0 ? Number(ElaineEpisodeSentiment[0].Sentiment) : 0;
    
    // Tried to force a POSITIVE and NEGATIVE with
    // > 0  -> POSITIVE
    // < 0  -> NEGATIVE
    // But its UGLY
    JerrySentiment.push(js > 0 ? 1 : (js < 0 ? -1 : 0));
    GeorgeSentiment.push(gs > 0 ? 1 : (gs < 0 ? -1 : 0));
    KramerSentiment.push(ks > 0 ? 1 : (ks < 0 ? -1 : 0));
    ElaineSentiment.push(es > 0 ? 1 : (es < 0 ? -1 : 0));
  });
  
  episodePopularityChart = c3.generate({
    bindto: '#episodePopularityChart',
    data: {
      columns: [
        viewerCount,
        JerrySentiment,
        GeorgeSentiment,
        KramerSentiment,
        ElaineSentiment,
      ],
      types: {
        [viewCountColumn]: 'bar',
        Jerry: 'line',
        George: 'line',
        Kramer: 'line',
        Elaine: 'line',
      },
      axes: {
        [viewCountColumn]: 'y',
        Jerry: 'y2',
        George: 'y2',
        Kramer: 'y2',
        Elaine: 'y2',
      }
    },
    tooltip: {
      format: {
        title: function (title) { return 'Episode Number ' + title; }
      }
    },
    axis: {
      x: {
        label: {
          position: 'outer-center',
          text: 'Episode Number',
        } ,
        type: 'category',
      },
      y2: {
        show: true
      }
    },
    subchart: {
      show: true,
      onbrush: function (domain) {
        // Check to see if the X-Axis will get squished
        if (domain[1] - domain[0] > 25) {
          brushDomainTooLarge = true;
        } else {
          brushDomainTooLarge = false;
        }
       }
    },
    onrendered: function() {
      // Removes the tick marks on the X-Axis if they are being squished
      if (brushDomainTooLarge) {
        this.selectChart.selectAll('.c3-axis-x .tick').style('visibility', 'hidden');
      } else {
        this.selectChart.selectAll('.c3-axis-x .tick').style('visibility', 'visible');
      }
      // Removes the tick marks on the X-Axis of the small chart (they are always squished)
      this.selectChart.selectAll('.c3-axis-x').nodes()[1].style.display = 'none';
    },
  });
  
  
});
