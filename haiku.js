var fs = require('fs')

//fetch dictionary
var dictionary = fs.readFileSync("CMUDICT.txt").toString().split("\n");

//Arrays that will receive wordData's depending on number of syllables
var more = [];
var seven = [];
var six = [];
var five = [];
var four = [];
var three = [];
var two = [];
var one = [];

// temporary array used to drive info into correct arrays
var tempArr = [];

// array used to store MSC wordData's
var idk = []


// Placing word inside right array depending on number of syallables
function arraysBySylabNumber (){

	for(var i = 0; i < dictionary.length; i++){

		// each array (wordData's) of the dictionary containing word and pronounciation
		var wordData = dictionary[i];

		// extracting word from wordData array and placing inside 
		// tempArr array

		var word = wordData.split(" ")[0];


		// remove (#) from word if existant
		if(word.indexOf("(") >= 0|| word.indexOf("(") >= 0){
			word = word.slice(0,-3)
		} else {
			word
		}

		// place formatted word inside tempArr
		tempArr.push(word);

		// extracting # of sylabs
		if(wordData.split(" ").slice(1).join("").match(/\d/g) !== null){
			tempArr.push(wordData.split(" ").slice(1).join("").match(/\d/g).length)
		}

		//place word data in correct array depending on the number of syallables

		if (tempArr[1] > 7){
			more.push(tempArr)
		} else if ( tempArr[1] === 7){
			seven.push(tempArr)
		} else if (tempArr[1] === 6){
			six.push(tempArr)
		} else if (tempArr[1] === 5){
			five.push(tempArr)
		} else if (tempArr[1] === 4){
			four.push(tempArr)
		} else if (tempArr[1] === 3){
			three.push(tempArr)
		} else if (tempArr[1] === 2){
			two.push(tempArr)
		} else if (tempArr[1] === 1){
			one.push(tempArr)
		} else {
			idk.push(tempArr)
		}

		//empty tempArr for next round in dictionary
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
	var str1 = "",
	str2 = "",
	str3 = "";

	for(var i = 0; i < arr[0].length; i++){
		str1 += randomGen(obj[arr[0][i]]).slice(0,-1) + " "
	}
	for(var x = 0; x < arr[1].length; x++){
		str2 += randomGen(obj[arr[1][x]]).slice(0,-1) + " "
	}
	for(var z = 0; z < arr[2].length; z++){
		str3 += randomGen(obj[arr[2][z]]).slice(0,-1) + " "
	}

	return str1 + "\n" + str2 + "\n" + str3

}



//invoke createHaiku function using [[#],[#],[#]] format. # being the number of syables
//in each word

console.log(createHaiku([[5],[7],[5]]))