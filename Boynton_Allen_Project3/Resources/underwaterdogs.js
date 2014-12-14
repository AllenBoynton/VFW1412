// Global variables
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
var galleryBar;

var pWidth = Ti.Platform.displayCaps.platformWidth,
	pHeight = Ti.Platform.displayCaps.platformHeight,
	itemCount = 30,
	rowCount = 4,
	margin = 5,
	canvasWidth = pWidth - margin * (rowCount),
	size = canvasWidth / rowCount
;

// Function for new gallery window
var getNewGallery = function(){
	var imageWindow = Ti.UI.createWindow({
		backgroundColor: "blue"
	});
	
	// Gallery bar
	var galleryBar = Ti.UI.createView({
		backgroundColor: "white",
		top: 20,
		height: 50
	});
	
	//Gallery bar text
	var galleryText = Ti.UI.createLabel({
		text: "Underwater Doggies",
		color: "gray",
		textAlign: "center",
		font: {fontFamily: "Chalkduster", fontSize: 16, fontWeight: "bold"}
	});
	
	// Border
	var border = Ti.UI.createView({
		backgroundColor: "blue",
		top: galleryBar.top + galleryBar.height,
		height: 2
	});
	
	// Exit button
	var returnButton = Ti.UI.createLabel({
		text: "Return to Gallery",
		backgroundColor: "gray",
		color: "white",
		height: 50,
		font: {fontFamily: "Chalkduster", fontSize: 16},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});

	// Container for images
	var viewContainer = Ti.UI.createScrollView({
		top: galleryBar.top + galleryBar.height + border.height, 
		width: pWidth,
		contentWidth: pWidth,
		height: pHeight - galleryBar.top - galleryBar.height - returnButton.height,
		showVerticalScrollIndicator: true,
		backgroundColor: "blue",
		layout: "horizontal"
	});

// For loop to cycle through images in master image file
	for(var i=0; i<imageFiles.length; i++){
		var view = Ti.UI.createView({
			backgroundColor: "#33CCFF",
			top: margin,
			left: margin,
			width: size,
			height: size,
			borderRadius: 5
		});
		
		var newPhotos = Ti.UI.createImageView({
			image: "images/" + imageFiles[i],
			top: 0,
			width: view.width*2,
			borderRadius: 5
		});
		view.add(newPhotos);
		viewContainer.add(view);
		
		// Event listener for images
		viewContainer.addEventListener("click", function(event){
			getPhoto(event.source.image);
		});
		
		// Exit window
		var returnWindow = function(){
			imageWindow.close();
		};
		
		// Main code to return
		returnButton.addEventListener("click", returnWindow);
		
		galleryBar.add(galleryText);
		imageWindow.add(galleryBar, border, viewContainer, returnButton);
		imageWindow.open();
	};
};

// Function to open gallery window
var getPhoto = function(dataSource){
	var photoWindow = Ti.UI.createWindow({
		backgroundColor: "#595959"
	});
	
	// Title bar
	var titleBar = Ti.UI.createView({
		backgroundColor: "#333333",
		top: 20,
		height: 50
	});
	
	// Title bar text
	var titleText = Ti.UI.createLabel({
		text: "Pictures",
		color: "#fff",
		textAlign: "center",
		font: {fontFamily: "Chalkduster", fontSize: 16, fontWeight: "bold"}
	});
	
	// Photo view
	var newPhoto = Ti.UI.createImageView({
		image: dataSource,
		top: 200,
		left:10,
		right: 10,
		borderRadius: 5
	});
	
	var photoLabel = Ti.UI.createLabel({
		text: dataSource,
		bottom: 100,
		textAlign: "center",
	});
	
	// Border
	var border = Ti.UI.createView({
		backgroundColor: "#000",
		top: titleBar.top + titleBar.height,
		height: 2,
	});
	
	// Close button
	var exitButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "gray",
		color: "#000",
		height: 50,
		font: {fontFamily: "Chalkduster", fontSize: 16},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	// Close window
	var exitWindow = function(){
		photoWindow.close();
	};
	
	// Main code for photos
	exitButton.addEventListener("click", exitWindow);
	titleBar.add(titleText);
	photoWindow.add(titleBar, border, exitButton, photoLabel, newPhoto);
	photoWindow.open();
};

menuButton.addEventListener("click", getNewGallery);
	