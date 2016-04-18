
// creating our color wheel in javascript so we can run functions to append it to DOM
var colorWheel = [
	[
		{rgba: 'rgb(0, 51, 102)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(51, 102, 153)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(51, 102, 204)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 51, 153)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 0, 153)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 0, 204)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 0, 102)', subsets: ['blue', 'dark']}
	],
	[
		{rgba: 'rgb(0, 102, 102)', subsets: ['blue', 'green', 'dark']},
		{rgba: 'rgb(0, 102, 153)', subsets: ['blue']},
		{rgba: 'rgb(0, 153, 204)', subsets: ['blue']},
		{rgba: 'rgb(0, 102, 204)', subsets: ['blue']},
		{rgba: 'rgb(0, 51, 204)', subsets: ['blue']},
		{rgba: 'rgb(0, 0, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 51, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 51, 153)', subsets: ['blue', 'dark']}
	],
	[
		{rgba: 'rgb(102, 153, 153)', subsets: ['green']},
		{rgba: 'rgb(0, 153, 153)', subsets: ['green']},
		{rgba: 'rgb(51, 204, 204)', subsets: ['green']},
		{rgba: 'rgb(0, 204, 255)', subsets: ['blue']},
		{rgba: 'rgb(0, 153, 255)', subsets: ['blue']},
		{rgba: 'rgb(0, 102, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 102, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 51, 204)', subsets: ['blue']},
		{rgba: 'rgb(102, 102, 153)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'rgb(51, 153, 102)', subsets: ['green']},
		{rgba: 'rgb(0, 204, 153)', subsets: ['green']},
		{rgba: 'rgb(0, 255, 204)', subsets: ['green', 'light']},
		{rgba: 'rgb(0, 255, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(51, 204, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(51, 153, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(102, 153, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(102, 102, 255)', subsets: ['blue', 'purple', 'light']},
		{rgba: 'rgb(102, 0, 255)', subsets: ['blue', 'purple']},
		{rgba: 'rgb(102, 0, 204)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'rgb(51, 153, 51)', subsets: ['green']},
		{rgba: 'rgb(0, 204, 102)', subsets: ['green']},
		{rgba: 'rgb(0, 255, 153)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 204)', subsets: ['green', 'blue', 'light']},
		{rgba: 'rgb(102, 255, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(102, 204, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(153, 204, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(153, 153, 255)', subsets: ['blue', 'purple', 'light']},
		{rgba: 'rgb(153, 102, 255)', subsets: ['blue', 'purple']},
		{rgba: 'rgb(153, 51, 255)', subsets: ['blue', 'purple']},
		{rgba: 'rgb(153, 0, 255)', subsets: ['purple']},
	],
	[
		{rgba: 'rgb(0, 102, 0)', subsets: ['green', 'dark']},
		{rgba: 'rgb(0, 204, 0)', subsets: ['green']},
		{rgba: 'rgb(0, 255, 0)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 153)', subsets: ['green', 'light']},
		{rgba: 'rgb(153, 255, 204)', subsets: ['green', 'light']},
		{rgba: 'rgb(204, 255, 255)', subsets: ['blue', 'pastel', 'light']},
		{rgba: 'rgb(204, 204, 255)', subsets: ['blue', 'purple', 'pastel', 'light']},
		{rgba: 'rgb(204, 153, 255)', subsets: ['purple', 'light']},
		{rgba: 'rgb(204, 102, 255)', subsets: ['purple', 'pink', 'light']},
		{rgba: 'rgb(204, 51, 255)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(204, 0, 255)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(153, 0, 204)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'rgb(0, 51, 0)', subsets: ['green', 'dark']},
		{rgba: 'rgb(0, 153, 51)', subsets: ['green']},
		{rgba: 'rgb(51, 204, 51)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 102)', subsets: ['green', 'light']},
		{rgba: 'rgb(153, 255, 153)', subsets: ['green', 'light']},
		{rgba: 'rgb(204, 255, 204)', subsets: ['green', 'pastel', 'light']},
		{rgba: 'rgb(255, 255, 255)', subsets: ['white', 'light']},
		{rgba: 'rgb(255, 204, 255)', subsets: ['pink', 'pastel', 'light']},
		{rgba: 'rgb(255, 153, 255)', subsets: ['pink', 'light']},
		{rgba: 'rgb(255, 102, 255)', subsets: ['pink', 'light']},
		{rgba: 'rgb(255, 0, 255)', subsets: ['pink']},
		{rgba: 'rgb(204, 0, 204)', subsets: ['pink', 'purple']},
		{rgba: 'rgb(102, 0, 102)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'rgb(51, 102, 0)', subsets: ['green', 'dark']},
		{rgba: 'rgb(0, 153, 0)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 51)', subsets: ['green']},
		{rgba: 'rgb(153, 255, 102)', subsets: ['green', 'light']},
		{rgba: 'rgb(204, 255, 153)', subsets: ['green', 'light']},
		{rgba: 'rgb(255, 255, 204)', subsets: ['yellow', 'pastel', 'light']},
		{rgba: 'rgb(255, 204, 204)', subsets: ['pink', 'pastel', 'light']},
		{rgba: 'rgb(255, 153, 204)', subsets: ['pink', 'light']},
		{rgba: 'rgb(255, 102, 204)', subsets: ['pink', 'red', 'light']},
		{rgba: 'rgb(255, 51, 204)', subsets: ['pink']},
		{rgba: 'rgb(204, 0, 153)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(153, 51, 153)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'rgb(51, 51, 0)', subsets: ['green', 'brown']},
		{rgba: 'rgb(102, 153, 0)', subsets: ['green']},
		{rgba: 'rgb(153, 255, 51)', subsets: ['green']},
		{rgba: 'rgb(204, 255, 102)', subsets: ['green', 'light']},
		{rgba: 'rgb(255, 255, 153)', subsets: ['yellow', 'light']},
		{rgba: 'rgb(255, 204, 153)', subsets: ['orange', 'light']},
		{rgba: 'rgb(255, 153, 153)', subsets: ['orange', 'pink', 'light']},
		{rgba: 'rgb(255, 102, 153)', subsets: ['pink', 'red', 'light']},
		{rgba: 'rgb(255, 51, 153)', subsets: ['pink', 'red']},
		{rgba: 'rgb(204, 51, 153)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(153, 0, 153)', subsets: ['purple']},
	],
	[
		{rgba: 'rgb(102, 102, 51)', subsets: ['brown', 'green']},
		{rgba: 'rgb(153, 204, 0)', subsets: ['green']},
		{rgba: 'rgb(204, 255, 51)', subsets: ['green', 'light']},
		{rgba: 'rgb(255, 255, 102)', subsets: ['yellow', 'light']},
		{rgba: 'rgb(255, 204, 102)', subsets: ['orange', 'yellow', 'light']},
		{rgba: 'rgb(255, 153, 102)', subsets: ['orange', 'light']},
		{rgba: 'rgb(255, 102, 102)', subsets: ['orange', 'red', 'light']},
		{rgba: 'rgb(255, 0, 102)', subsets: ['red', 'light']},
		{rgba: 'rgb(204, 102, 153)', subsets: ['red', 'purple']},
		{rgba: 'rgb(153, 51, 102)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'rgb(153, 153, 102)', subsets: ['brown']},
		{rgba: 'rgb(204, 204, 0)', subsets: ['brown', 'yellow']},
		{rgba: 'rgb(255, 255, 0)', subsets: ['yellow']},
		{rgba: 'rgb(255, 204, 0)', subsets: ['yellow', 'orange']},
		{rgba: 'rgb(255, 153, 51)', subsets: ['orange']},
		{rgba: 'rgb(255, 102, 0)', subsets: ['orange']},
		{rgba: 'rgb(255, 80, 80)', subsets: ['red', 'orange']},
		{rgba: 'rgb(204, 0, 102)', subsets: ['red']},
		{rgba: 'rgb(102, 0, 51)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'rgb(153, 102, 51)', subsets: ['brown', 'dark']},
		{rgba: 'rgb(204, 153, 0)', subsets: ['brown', 'yellow']},
		{rgba: 'rgb(255, 153, 0)', subsets: ['orange', 'yellow']},
		{rgba: 'rgb(204, 102, 0)', subsets: ['brown', 'yellow']},
		{rgba: 'rgb(255, 51, 0)', subsets: ['red', 'orange']},
		{rgba: 'rgb(255, 0, 0)', subsets: ['red']},
		{rgba: 'rgb(204, 0, 0)', subsets: ['red']},
		{rgba: 'rgb(153, 0, 51)', subsets: ['red', 'purple', 'dark']},
	],
	[
		{rgba: 'rgb(102, 51, 0)', subsets: ['brown', 'dark']},
		{rgba: 'rgb(153, 102, 0)', subsets: ['brown', 'dark']},
		{rgba: 'rgb(204, 51, 0)', subsets: ['orange', 'red', 'dark']},
		{rgba: 'rgb(153, 51, 0)', subsets: ['brown', 'red', 'dark']},
		{rgba: 'rgb(153, 0, 0)', subsets: ['red', 'dark']},
		{rgba: 'rgb(128, 0, 0)', subsets: ['red', 'brown', 'dark']},
		{rgba: 'rgb(153, 51, 51)', subsets: ['red', 'brown', 'dark']},
	]
]

$(document).ready(function(){

	// cycle through colors in collection
	// and construct our color wheel
	for(var i=0; i<colorWheel.length; i++){
		$('#color-wheel').append('<div class="color-row" id="row' + i + '"></div>');
		var row = $('#row' + i)
		// adding custom width to each row based on number of color circles
		row.css({
			width: colorWheel[i].length * 20 + colorWheel[i].length,
		})
		// adding the color circles
		for(var j=0; j<colorWheel[i].length; j++){
			// giving the circle a unique class based on index values
			row.append('<div class="color" id="color-' + i + '-' + j + '"></div>');
			var color = $('#color-' + i + '-' + j)
			// adding color to the circle
			color.css({
				backgroundColor: colorWheel[i][j].rgba
			});
			// adding this color's subsets as class names for later reference
			for(var k=0; k<colorWheel[i][j].subsets.length; k++){
				color.addClass(colorWheel[i][j].subsets[k]);
			}
		}
	}

	// main function to grab all colors of a subset and display them from outside the circumference towards the inside of the circle
	function showSubsetColors(subset){
		// update the text in our input box
		$('#input').attr("placeholder", 'enter subset (i.e. pastel)');
		// add a new container for each subset, colors will be added in here
		$('#colors-display').append('<div class="subset-display" id="' + subset + '"><br><div class="btn btn-default btn-block">' + subset + ' subset</div><div><br>')
		// cycle through the color wheel (starting with the first and last rows)
		for(var i=0; i<7; i++){
			$.each(colorWheel, function(index, row) {
				// if first or last row in current sequence
				if (index == i || index == (colorWheel.length-1-i)) {
					// cycle through each color in row
					for(var j=i; j<row.length-i; j++) {
						// if color's subsets include current subset append a new div into our subsets container 
						if ($.inArray(subset, row[j].subsets) >= 0) {
							var x = $('#' + subset).append('<div class="color-display" style="background: ' + row[j].rgba + '; width: ' + randomDivWidth() + 'px;"></div>');
						}
					}
				// now go through the other rows and check the first and last color of each row (outside - in)
				} else if (i < index && index < 6) {
					if ($.inArray(subset, row[i].subsets) >= 0) {
						var x = $('#' + subset).append('<div class="color-display" style="background: ' + row[i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>')
					}
				} else if (colorWheel.length-1-i > index && index > 6) {
					if ($.inArray(subset, row[row.length-1-i].subsets) >= 0) {
						var x = $('#' + subset).append('<div class="color-display" style="background: ' + row[row.length-1-i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>')
					}
				} else if (index == 6) {
					if ($.inArray(subset, row[i].subsets) >= 0) {
						var x = $('#' + subset).append('<div class="color-display" style="background: ' + row[i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>')
					}
					if ($.inArray(subset, row[row.length-1-i].subsets) >= 0) {
						var x = $('#' + subset).append('<div class="color-display" style="background: ' + row[row.length-1-i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>')
					}
				}
			})
		}
	}

	// event handler for choosing a color directly from the wheel
	$('#color-wheel').on('click', function(e){
		// select the div that was clicked on
		var color = e.target;
		var rgb = $(color).css('backgroundColor');
		console.log(rgb);
		if (rgb != 'rgba(0, 0, 0, 0)'){
			// clear the inner html of our subset display
			$('#colors-display').html('');
			displayColor(rgb);
			// grab the subsets from that color
			var subsets = color.getAttribute('class').replace("color ", "");
			var subsetArray = subsets.split(" ");
			// print to screen the values of each color that is in the subsets
			$.each(subsetArray, function(index,obj){
				showSubsetColors(obj);
			})
		}
	})

	// event handler for choosing a color directly from the subset group (or the subset button itself)
	$('#colors-display').on('click', function(e){
		var evt = e.target;
		// check to see if the div clicked was the subset title button
		if (evt.getAttribute('class') == "btn btn-default btn-block") {
			$('#input').val($(evt).text().replace(' subset', ''))
			$('#button').trigger('click');
		} else {
			// grabbing background color value from target
			var rgb = $(evt).css('backgroundColor');
			// updating display color with above color
			displayColor(rgb);
		}
	})

	// event handler for submitting user subset search
	$('#button').on('click', function(e){
		// clearing the subsets containters
		$('#colors-display').html('');
		e.preventDefault();
		// checking for valid input
		var validSubsets = ['red', 'blue', 'green', 'white', 'light', 'dark', 'pastel', 'brown', 'pink', 'purple', 'orange']
		$.each(validSubsets, function(index, subset){
			// if valid update the screen
			if ($('#input').val() == subset) {
				showSubsetColors($('#input').val());
				$('#input').attr("placeholder", subset);
			}
		})
		// clear our input 
		$('#input').val('');
	})

	// updates the color displaying in box with logo
	function displayColor(rgb){
		$('#color-selected').css({
			display: 'block',
			backgroundColor: rgb
		})
		$('#color-selected p').text(rgb);
	}

	// simple random width [ my algorith ;-) ]
	function randomDivWidth(){
		return Math.floor(Math.random()*(101)+20);
	}
})
