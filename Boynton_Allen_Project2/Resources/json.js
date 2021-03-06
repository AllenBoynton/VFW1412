// JSON data
var ships = {
	"cruise":{
		"shipList": [
			{
				"title"    : "Freedom",
				"features": "Enjoy all the revolutionary features that the Freedom has always been known for – a surf simulator, rock climbing wall, ice-skating rink, royal promenade, cantilevered whirlpools, mini golf course, water park, and much more."
			},
			{
				"title"    : "Liberty",
				"features": "On the Liberty, catch a first-run movie in the 3D theater or poolside under the stars on the outdoor movie screen. And finish the evening with a selection of reds or whites at the renovated, now-more-intimate Vintages wine bar."
			},
			{
				"title"    : "Independence",
				"features": "Meet Independence, a marvel of maritime engineering, packed with all the phenomenal onboard experiences you'd expect from this class of ships—including the surf simulator, a rock climbing wall, ice-skating rink, cantilevered whirlpools, royal promenade, mini golf course, and much more."
			}		
		]
	},
	"grand":{
		"shipList": [
			{
				"title"    : "Quantum",
				"features": "The first of all the Grand ships is our flagship, the Quantum! Packed with first-at-sea experiences: the oceanside aqua theater, Premier Coffee Shop, Broadway musical hits, 3D movie theater, zip line, designer shopping stores, and much more."
			},
			{	
				"title"    : "Anthem",
				"features": "There's only one word that can possibly sum up the second ship in our Grand class, the Anthem: WOW! Newly designed staterooms, game-changing technology, groundbreaking venues and the best dining ever are just the start of what you'll find onboard."
			},
			{
				"title"    : "Ovation",
				"features": "Climb the rock wall 200 feet above the ocean. Ice skate on the first-ever rink at sea. Or immerse yourself in the sights and sounds of the Main St. style courtyard, perfect for people watching, designer shopping, and a cold pint at the British-style pub. "
			}
		]
	}
};

// Function creating a new window
var getName = function(){
	var nameWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
	
	// New title bar
	var nameTitleBar = Ti.UI.createView({
		backgroundColor: "#00ffff",
		top: 20,
		height: 50
	});
	
	// New title bar text
	var nameTitleText = Ti.UI.createLabel({
		text: this.title,
		textAlign: "center",
		font: {fontFamily: "Didot", fontWeight: "bold", fontSize: 26}
	});
	
	// New border
	var nameBorder = Ti.UI.createView({
		backgroundColor: "blue",
		top: nameTitleBar.top + nameTitleBar.height,
		height: 2
	});
	
	// Features
	var featureText = Ti.UI.createLabel({
		text: this.feat,
		color: "blue",
		font: {fontSize: 16, fontFamily: "Didot", fontStyle: "italic"},
		top: 100,
		left:  20,
		right: 20
	});
	
	// Return button to main menu
	var returnButton = Ti.UI.createLabel({
		text: "Return",
		backgroundColor: "gray",
		height: 50,
		font: {fontSize: 22, fontFamily: "Didot", fontWeight: "bold"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	// New border
	var returnBorder = Ti.UI.createView({
		backgroundColor: "blue",
		bottom: 50,
		width: "100%",
		height: 2
	});

	// Remove newWindow
	var removeWindow = function(){
		nameWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	// Main secondary code
	returnButton.addEventListener("click", removeWindow);
	
	nameWindow.add(nameTitleBar, nameBorder, featureText, returnButton, returnBorder);
	nameTitleBar.add(nameTitleText);
	
	nameWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

// Loop through cruiseShipList objects
for (var i=0; i<ships.cruise.shipList.length; i++){
	var newRow = Ti.UI.createTableViewRow({
		title: ships.cruise.shipList[i].title,
		feat : ships.cruise.shipList[i].features,
		hasChild: true
	});
	cruiseSection.add(newRow);
	newRow.addEventListener("click", getName);
};

// Loop through grandShipList objects
for (var i=0; i<ships.grand.shipList.length; i++){
	var newRow = Ti.UI.createTableViewRow({
		title: ships.grand.shipList[i].title,
		feat : ships.grand.shipList[i].features,
		hasChild: true
	});
	grandSection.add(newRow);
	newRow.addEventListener("click", getName);
};
