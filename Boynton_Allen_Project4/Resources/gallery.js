var	imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images1"),
	imageFiles = imagesFolder.getDirectoryListing()
;

var dogImages = Ti.UI.createImageView({
	image: "images1/" + imageFiles[0],
	bottom: 175
});

var dogView = function(){
	var lastDog = dogView;
	var randomDog = Math.floor(Math.random()*imageFiles.length);
	while(lastDog === randomDog){
		var randomDog = Math.floor(Math.random()*imageFiles.length);
	};
	dogImages.image = "images1/" + imageFiles(randomDog);
};

// Next button to change image
var nextView = Ti.UI.createView({
	backgroundColor: "gray",
	left: 30,
	right: 30,
	borderColor: "black",
	borderRadius: 10,
	borderWidth: 2,
	height: 60,
	bottom: 30
});

var nextViewText = Ti.UI.createLabel({	
	color: "white",
	text: "New Image",
	font: {fontSize: 20, fontFamily: customFont},
	textAlign: "center"
});

var mainWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "#ea148c"
	});
	
	var border = Ti.UI.createView({
		borderColor: "black",
		borderWidth: 2,
		top: 0,
		width: 350
	});
	nextView.add(nextViewText);
	galleryWindow.add(nextView, dogImages, border);
	navWindow.openWindow(galleryWindow);
};

nextView.add(nextViewText);
nextView.addEventListener("click", dogView);
topView.addEventListener("click", mainWindow);
