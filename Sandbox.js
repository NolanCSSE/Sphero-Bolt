/*
Programmer: Mr. Lange
Date: 3.10.20
Program: this is a sandbox where I am learning multiple things with the Sphero Bolt.
*/
async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('Start');
	// Challenge 1
	await roll ((getHeading() + 90), 72,2);
	setMainLed ({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 90), 67, 2);
	//Chalenge 2
	await Sound.Animal.SeaLion.play(true);
	await roll((getHeading() + 90), 43, 2);
	//Chalenge 3
	await roll((getHeading() + 45), 39, 2);
	await roll((getHeading() + 270), 24, 2);
	setMainLed ({ r: 255, g: 0, b: 0});
	//Chalenge 4
	await roll((getHeading() + 270), 41, 2);
	await Sound.Animal.Donkey.play(true);
	await roll((getHeading() + 90), 43, 2);
	//Chalenge 5
	await roll((getHeading() + 315), 20, 2);
	setMainLed ({ r: 0, g: 255, b: 0});
	//Chalenge 6
	await roll((getHeading() + 	270), 35, 2);
	await roll((getHeading() + 	310), 32, 2);
	await Sound.Animal.Sheep.play(true);
	//Chalenge 7
	await roll((getHeading() + 	65), 25, 2);
	setMainLed ({ r: 255, g: 0, b: 255});
	await roll((getHeading() + 	0), 32, 2);
	await scrollMatrixText ('END', { r: 255, g: 0, b: 255},90,false);
	await roll((getHeading() + 	0), 1, 2);
}
}
