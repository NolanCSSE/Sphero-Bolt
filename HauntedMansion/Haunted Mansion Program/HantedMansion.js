/*
Programer: Nolan Loukes
Team Member: Kyle
Date: 1.26.2022
Program: we will be making a program to go through a Haunted Mansion Maze with certain challenges and obstacles in Java Script
*/
async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('Start');
	await roll ((getHeading() + 90), 75,2);
}

