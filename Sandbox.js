/*
Programmer: Mr. Lange
Date: 3.10.20
Program: this is a sandbox where I am learning multiple things with the Sphero Bolt.
*/
async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('Start');
	await roll ((getHeading() + 90), 75,2);
	await roll ((getHeading() + 90), 72,2);
	setMainLed ({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 90), 67, 2);
	await Sound.Animal.SeaLion.play(true);
	await roll((getHeading() + 90), 43, 2);
}
