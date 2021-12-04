/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
	 let unique = [...new Set(data)];
	 unique.sort();
	 return unique;

}

console.log(result(data));
