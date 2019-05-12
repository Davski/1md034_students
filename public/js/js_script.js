function menuItem(name, kcal, gluten, lactose) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.info = function() {
	return this.name + ', weighing ' + this.kcal + ' kcal';
    };
}

var burger1 = new menuItem('Burger 1', 301, true, true);
var burger2 = new menuItem('Burger 2', 302, false, true);
var burger3 = new menuItem('Burger 3', 303, true, false);
var burger4 = new menuItem('Burger 4', 304, false, false);
var burger5 = new menuItem('Burger 5', 305, true, true);


var menus = [burger1, burger2, burger3, burger4, burger5];
console.log(menus[0].info());

var myElement = document.getElementById("burgerIDs");

for (var i = 0; i < food.length; i++) {
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(food[i].name);
    listItem.appendChild(listValue);
    if (food[i].lactose == true) {
	var lactose = document.createTextNode(" --> lactose");
	listItem.appendChild(lactose);
    }
    if (food[i].gluten == true) {
	var gluten = document.createTextNode(" --> gluten");
	listItem.appendChild(gluten);
    }
    myElement.appendChild(listItem);
}

function getInformation2() {
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var payment = document.getElementById("payment").value;
    var arr = [fullName, email, street, house, payment];
    for (var i = 0; i < 5; i++) {
	arr.push(document.forms['contacts']['rb'+i].checked);
    }
    console.log(arr);
    return arr;
}
function getInformation() {
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var payment = document.getElementById("payment").value;
    var arr = [fullName, email, street, house, payment];
    for (var i = 0; i < 5; i++) {
	arr.push(document.forms['contacts']['rb'+i].checked);
    }
    console.log(arr);
    return arr;
}

var socket = io.connect('http://localhost:3000');

var myButton = document.getElementById("heh");
//myButton.addEventListener("click", getInformation);
myButton.onclick = getInformation2;

// //function printResults() {
// var tmp = document.getElementById("results"); // WHY DOESNT THIS WORK
// console.log(tmp);
//     tmp.onclick = function() {
// 	var array = getInformation();
// 	console.log(array);	
//     };
// //}
