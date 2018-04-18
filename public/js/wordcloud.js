
var characters = createCharacter()
var characterNames = ["ELAINE", "GEORGE", "JERRY", "KRAMER"]
var characterCalculated = [false, false, false, false]
var frequencies

d3.csv("/Data/word_frequencies_main.csv", function(error, data) {
	var defaultChar = 0;
	frequencies = data
	createWordCloud(defaultChar);
});

function createWordCloud(charID){
	filteredData = frequencies.filter(getCharacterFromEpisode(characterNames[charID]))
	
	line = []
	for (i = 0; i < filteredData.length; i++) { 
		line.push([filteredData[i]['Word'],filteredData[i]['Frequency']])
	}
	WordCloud(characters[charID], { list: line } );
	
	characterCalculated[charID] = true
	document.getElementById('wordcloud').appendChild(characters[charID])
}
function createCharacter(){
	var elaine = document.createElement('canvas');
	var george = document.createElement('canvas');
	var jerry = document.createElement('canvas');
	var kramer = document.createElement('canvas');

	elaine.setAttribute("id","Elaine");
	elaine.setAttribute("width","800");
	elaine.setAttribute("height","600");

	george.setAttribute("id","George");
	george.setAttribute("width","800");
	george.setAttribute("height","600");

	jerry.setAttribute("id","Jerry");
	jerry.setAttribute("width","800");
	jerry.setAttribute("height","600");

	kramer.setAttribute("id","Kramer");
	kramer.setAttribute("width","800");
	kramer.setAttribute("height","600");

	return [elaine, george, jerry, kramer]
}


function getCharacterFromEpisode(character) {
	return function(row) {
		return row['Character'] == character;
	}
}

function loadWC(character) {
	var charID 
	switch(character) {
		case "George":
			charID = 1
			break;
		case "Jerry":
			charID = 2
			break;
		case "Kramer":
			charID = 3
			break;
		default:
			charID = 0
	}

	var wordcloud = document.getElementById('wordcloud')
	if (characterCalculated[charID]){
		wordcloud.removeChild( wordcloud.childNodes[0])
		wordcloud.appendChild(characters[charID])
	} else {
		wordcloud.removeChild(wordcloud.childNodes[0])
		createWordCloud(charID)
	}
}