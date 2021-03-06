// (bootstrap file) Only contains the necessary objects to open this application.

// Author: Allen Boynton
// VFW1412
// Project 1
// Due: December 2, 2014

Ti.UI.setBackgroundColor("#000");

// Main background
var mainBackground = Ti.UI.createWindow({
	// Reserved Properties
	backgroundColor: "#fff",
	backgroundImage: "beach.png"
});

// Main text window with size and color
var mainWindow = Ti.UI.createView({
	backgroundColor: "f6e2b7",
	borderColor: "black",
	borderRadius: 5,
	borderWidth: 1,
	height: 100,
	top: 50,
	left: 20,
	right: 20,
});

// Text with font set
var titleText = Ti.UI.createLabel({
	text: "USA Beaches",
	color: "blue",
	font: {fontSize: 24, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
	textAlign: "center",
	top: 37
});

// Button to reverse through array
var previousButton = Ti.UI.createView({
	backgroundColor: "00bff0",
	borderColor: "black",
	top: mainWindow.top + mainWindow.height + 250,
	left: 20,
	right: 175,
	borderRadius: 5,
	height: 75 
});

// Text for button
var previousLabel = Ti.UI.createLabel({
	text: "Previous",
	color: "white",
	font: {fontSize: 18, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
	top: 425,
	left: 45
});

// Button to move forward through array
var nextButton = Ti.UI.createView({
	backgroundColor: "00bff0",
	borderColor: "black",
	top: mainWindow.top + mainWindow.height + 250,
	left: 175,
	right: 20,
	borderRadius: 5,
	height: 75
});

// Text for button
var nextLabel = Ti.UI.createLabel({
	text: "Next",
	color: "white",
	font: {fontSize: 18, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
	top: 425,
	right: 65
});

// Calls secondary js file holding all specific info
var leadFile = require("beaches");

// Main calls
mainBackground.open();
mainBackground.add(mainWindow, previousButton, previousLabel, nextButton, nextLabel);
mainWindow.add(titleText);

