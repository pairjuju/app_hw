var personobj = {
	firstname: "Simon",
	fullname: "",
	age: 37,
	married: true,
	hasOwnHair: null,
	children: [{
		firstname: "Erica"
	}, {
		firstname: "Isobel"
	}]
};

var personjson = JSON.stringify(personobj);
console.log(personobj);
console.log(personjson);

var personjs=JSON.parse(personjson);
console.log(personobj);
console.log(personjson);
console.log(persojs);
