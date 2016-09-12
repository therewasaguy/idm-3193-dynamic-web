// Add some students to the Array of Objects
var students = [
					{
						firstName: 'Jason',
						lastName: 'Sigal',
						present: true
					}
];

/**
 * Turns student attendance into a string,
 * then passes that string to a callback function.
 * 
 * @param {String} firstName
 * @param {String} lastName
 * @param {Boolean} present   
 * @param {Function} callback
 */
function takeAttendance(firstName, lastName, present, callback) {

	var presentOrAbsent;
	if (present) {
		presentOrAbsent = 'present';
	} else {
		presentOrAbsent = 'absent';
	}

	var name = firstName + ' ' + lastName;
	
	var str = name + ' is ' + presentOrAbsent;

	callback(str);
}

// loop through every student and call takeAttendance with a callback function
// ...


// write one callback function that logs to the console
// ...


// write another callback function that appends to the DOM
// ...