// JSON data
var ships = {
	"cruiseShips":{
		"cruiseShipList": [
			{
				"name"    : "Freedom",
				"features": "Enjoy all the revolutionary features that the Freedom has always been known for – a surf simulator, rock climbing wall, ice-skating rink, royal promenade, cantilevered whirlpools, mini golf course, water park, and much more."
			},
			{
				"name"    : "Liberty",
				"features": "On the Liberty, catch a first-run movie in the 3D theater or poolside under the stars on the outdoor movie screen. And finish the evening with a selection of reds or whites at the renovated, now-more-intimate Vintages wine bar."
			},
			{
				"name"    : "Independence",
				"features": "Meet Independence, a marvel of maritime engineering, packed with all the phenomenal onboard experiences you'd expect from this class of ships—including the surf simulator, a rock climbing wall, ice-skating rink, cantilevered whirlpools, royal promenade, mini golf course, and much more."
			}
		
		]
	},
	"grandShips":{
		"cruiseShipList": [
			{
				"name"    : "Quantum",
				"features": "The first of all the Grand ships is our flagship, the Quantum! Packed with first-at-sea experiences: the oceanside aqua theater, Premier Coffee Shop, Broadway musical hits, 3D movie theater, zip line, designer shopping stores, and much more."
			},
			{	"name"    : "Anthem",
				"features": "There's only one word that can possibly sum up the second ship in our Grand class, the Anthem: WOW! Newly designed staterooms, game-changing technology, groundbreaking venues and the best dining ever are just the start of what you'll find onboard."
			},
			{
				"name"    : "Ovation",
				"features": "Climb the rock wall 200 feet above the ocean. Ice skate on the first-ever rink at sea. Or immerse yourself in the sights and sounds of the Main St. style courtyard, perfect for people watching, designer shopping, and a cold pint at the British-style pub. "
			}
		]
	}
};

// Function creating a new window
var seeName = function(){
	var nameWindow = Ti.UI.createWindow({
		backgroundColor: "red"
	});
	
	// New title bar
	var nameTitleBar = Ti.UI.createView({
		backgroundColor: "red",
		top: 20,
		height: 50
	});
	
	// New title bar text
	var nameTitleText = Ti.UI.createLabel({
		text: this.title,
		textAlign: "center",
		font: {fontWeight: "bold", fontSize: 18}
	});
	
	// New border
	var nameBorderLine = Ti.UI.createView({
		backgroundColor: "black",
		top: nameTitleBar.top + nameTitleBar.height,
		height: 2
	});
	
	// Features
	var featureText = Ti.UI.createLabel({
		text: this.feat,
		color: "blue",
		font: {fontSize: 22, fontFamily: "Didot", fontStyle: italic},
		top: nameBorderLine.height + nameBorderLine.top + 50,
		left: 10,
		right: 10
	});
	
	// Return button to main menu
	var returnButton = Ti.UI.createLabel({
		text: "Return",
		backgroundColor: "#333",
		color: "#fff",
		font: {fontSize: 18, fontFamily: "Didot", fontStyle: "bold"},
		textAlign: "center",
		width: "100%",
		bottom: 0,
		height: 50
	});
	
	// Remove newWindow
	var removeWindow = function(){
		nameWindow.close();
	};
	
	// Main secondary code
	returnButton.addEventListener("click", removeWindow);
	
	nameTitleBar.add(nameTitleText);
	nameWindow.add(nameTitleBar, nameBorderLine, nameText, returnButton);
	nameWindow.open();
};

// Loop through cruiseShipList objects
for (var i=0; i<ships.cruiseShips.cruiseShipList.length; i++){
	var newRow = Ti.UI.createTableViewRow({
		name: ships.cruiseShips.cruiseShipList[i].name,
		feat: ships.cruiseShips.cruiseShipList[i].features,
		hasChild: true
	});
	cruiseShipSection.add(newRow);
	newRow.addEventListener("click", seeName);
};

// Loop through grandShipList objects
for (var i=0; i<ships.grandShips.cruiseShipList.length; i++){
	var newRow = Ti.UI.createTableViewRow({
		name: ships.grandShips.cruiseShipList[i].name,
		feat: ships.grandShips.cruiseShipList[i].features,
		hasChild: true
	});
	cruiseShipSection.add(newRow);
	newRow.addEventListener("click", seeName);
};
