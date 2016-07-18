var fs = require('fs')

var dictionary = fs.readFileSync("CMUDICT.txt").toString().split("\n");

//Number of sylabs
var more = [];
var seven = [];
var six = [];
var five = [];
var four = [];
var three = [];
var two = [];
var one = [];

var tempArr = [];

var idk = []

// word data placer
function arraysBySylabNumber (){

for(var i = 0; i < dictionary.length; i++){

	// each array of the dictionary containing word and pronounciation
	var wordData = dictionary[i];

	// extracting word from wordData array and placing inside 
	// tempArr array

	var word = wordData.split(" ")[0];

	if(word.indexOf("(") >= 0|| word.indexOf("(") >= 0){
		word = word.slice(0,-3)
	} else {
		word
	}

	tempArr.push(word);

	// extracting # of sylabs

	if(wordData.match(/\d/g) !== null){
		tempArr.push(wordData.match(/\d/g).length)
	}
	// // var sylabs = wordData.match(/\d/g).length;
	// tempArr.push(word)

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

	tempArr = []	
}

}

var obj = {
	"1" : one,
	"2" : two,
	"3" : three,
	"4" : four,
	"5" : five,
	"6" : six,
	"7" : seven,
}

arraysBySylabNumber()

var haikuStr = "";

function randomGen(arr){
	return arr[Math.ceil(Math.random()*arr.length-1)]
}

function createHaiku (arr){
	var str1 = "",
	str2 = "",
	str3 = "";

	for(var i = 0; i < arr[0].length; i++){
		str1 += randomGen(obj[arr[0][i]]).slice(0,-1) + " "
	}
	for(var x = 0; x < arr[0].length; x++){
		str2 += randomGen(obj[arr[0][x]]).slice(0,-1) + " "
	}
	for(var z = 0; z < arr[0].length; z++){
		str3 += randomGen(obj[arr[0][z]]).slice(0,-1) + " "
	}

	return str1 + "\n" + str2 + "\n" + str3

}




console.log(createHaiku([[5],[7],[5]]))




















