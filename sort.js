var arr = [];

function add() {
	arr.push(document.getElementById("textBox").value);
	arr.sort(
		function(a, b) {
			return a - b
		}
	);
	document.getElementById("myArray").innerHTML = arr;
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