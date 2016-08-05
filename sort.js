var arr = [];

function add() {
	arr.push(document.getElementById("textBox").value);
	arr.sort(
		function(a, b) {
			return a - b
		}
	);
//	document.getElementById("myArray").innerHTML = arr;
	document.getElementById("myArray").innerHTML = arrayToList(arr);
	emptyTextBox();
	document.getElementById("textBox").focus();
};

function empty() {
	emptyArray();
	emptyTextBox();
};

function emptyArray() {
	arr = [];
	document.getElementById("myArray").innerHTML = arr;
};

function emptyTextBox() {
	document.getElementById("textBox").value = "";
};

function arrayToList(arr) {
	var retVal = "";
	retVal = "<ul>"
	for (i = 0; i < arr.length; i++) {
		retVal += "<li>" + arr[i] + "</li>"
	}
	retVal += "</ul>";
	return retVal;
};
