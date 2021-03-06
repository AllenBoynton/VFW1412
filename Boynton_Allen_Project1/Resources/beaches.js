// global variables
var beachNames = ["Miami South Beach, FL", "Myrtle Beach, SC", 
				"Daytona Beach, FL", "Laguna Beach, CA", "Venice Beach, CA", 
				"Clearwater Beach, FL", "Long Beach, NJ"];
// Assign array order by use of variable
var i = 0;

var totalArray = beachNames.length;



// Function to move forward and cycle through beaches
var nextBeach = function(){
	if (i < totalArray){
		titleText.text = beachNames[i];
		i++;
	} else {
		titleText.text = beachNames[i];
		i = 0;
	}
};

// Function to move backwards and cycle through beaches
var previousBeach = function(){
	if (i === 0){
		titleText.text = beachNames[totalArray];
		i--;
	} else {
		titleText.text = beachNames[totalArray];
		i = totalArray;
	}
};
	
// Event listeners to give buttons a purpose
previousButton.addEventListener("click", previousBeach);
nextButton.addEventListener("click", nextBeach);