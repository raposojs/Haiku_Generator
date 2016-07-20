var fs = require('fs')

//fetch dictionary
var dictionary = fs.readFileSync("CMUDICT.txt").toString().split("\n");

//Arrays that will receive wordData's depending on number of syllables
var more = [],
	seven = [],
	six = [],
	five = [],
	four = [],
	three = [],
	two = [],
	one = [];

// temporary array used to drive info into correct arrays
var tempArr = [];


// Placing word inside right (one, two ... more) array depending on number of syallables
function arraysBySylabNumber (){

	//loop through each dictionary array
	for(var i = 0; i < dictionary.length; i++){

		// each array (wordData's) of the dictionary containing word and pronounciation
		var wordData = dictionary[i];

		// extracting word from wordData array and placing inside 
		// tempArr array

		var word = wordData.split(" ")[0];


		// remove "(#)" from word if existant
		if(word.indexOf("(") >= 0){
			word = word.slice(0,-3)
		} else {
			word
		}

		// place formatted word inside tempArr as index[0]
		tempArr.push(word);

		// extracting # of sylabs
		if(wordData.split(" ").slice(1).join("").match(/\d/g) !== null){
			tempArr.push(wordData.split(" ").slice(1).join("").match(/\d/g).length)
		}

		//place word data in correct array depending on the number of syallables


		switch (tempArr[1]){
			case 7: seven.push(tempArr)
			break;
			case 6: six.push(tempArr)
			break;
			case 5: five.push(tempArr)
			break;
			case 4: four.push(tempArr)
			break;
			case 3: three.push(tempArr)
			break;
			case 2: two.push(tempArr)
			break;
			case 1: one.push(tempArr)
			break;
			default: more.push(tempArr)
		}

		// after pushing tempArr contents into their correct array, reset tempArr
		tempArr = []	
	}

}

//invoke function to place infos in their correct arrays

arraysBySylabNumber()

// create object to facilitate createHaiku function using numbers

var obj = {
	"1" : one,
	"2" : two,
	"3" : three,
	"4" : four,
	"5" : five,
	"6" : six,
	"7" : seven,
}



// function to randomize which word will be selected inside the array
function randomGen(arr){
	return arr[Math.ceil(Math.random()*arr.length-1)]
}

// function to concat strings into Haiku form
function createHaiku (arr){

	// string where haiku will be formed
	var retStr = ""

//Loop through array index's
for(var y = 0; y < arr.length;y++){

	//Loop through array of array's
	for(var i = 0; i < arr[y].length; i++){
		retStr += randomGen(obj[arr[y][i]]).slice(0,-1) + " "
	}
	
	//skip a line after looping through array of array's
	retStr += "\n"

}
	// return final string exluding extra "skip line"
	return retStr.slice(0,-1)
}


//invoke createHaiku function using [[#],[#],[#]] format. # being the number of syllables
//in each word for each line

console.log(createHaiku([[2,2,1],[1,5,1],[1,3,1]]))