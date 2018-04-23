var dirchart = c3.generate({
    bindto: '#directorPopularityChart',
    data: {
        columns: [ ]
    },
    type : 'bar',
});



d3.csv("/Data/director_popularity.csv", function(error, data) {

    director1 = ["Art Wolff"];
    director2 = ["Tom Cherones"];
    director3 = ["David Steinberg"];
    director4 = ["Joshua White"];
    director5 = ["Jason Alexander"];
    director6 = ["Andy Ackerman"];
    director7 = ["David Owen Trainor"];
    box = [];
    box.push(director1);
    box.push(director2);
    box.push(director3);
    box.push(director4);
    box.push(director5);
    box.push(director6);
    box.push(director7);
    count = 0;

    data.forEach(function(row) {
        box[count].push(Number(row.Average));
        count+=1;
    });
    console.log(box);

    dirchart = c3.generate({
        bindto: '#directorPopularityChart',
        data: {
            columns: [
                director1,director2,director3,director4,director5,director6,director7
            ],
            type : 'bar',


        }

    });
});

