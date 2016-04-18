var colorWheel = [
	[
		{rgba: 'RGBA(0, 51, 102, 1.00)', subsets: ['blue', 'dark']},
		{rgba: 'RGBA(51, 102, 153, 1.00)', subsets: ['blue', 'dark']},
		{rgba: 'RGBA(51, 102, 204, 1.00)', subsets: ['blue', 'dark']},
		{rgba: 'RGBA(0, 51, 153, 1.00)', subsets: ['blue', 'dark']},
		{rgba: 'RGBA(0, 0, 153, 1.00)', subsets: ['blue', 'dark']},
		{rgba: 'RGBA(0, 0, 204, 1.00)', subsets: ['blue', 'dark']},
		{rgba: 'RGBA(0, 0, 102, 1.00)', subsets: ['blue', 'dark']}
	],
	[
		{rgba: 'RGBA(0, 102, 102, 1.00)', subsets: ['blue', 'green', 'dark']},
		{rgba: 'RGBA(0, 102, 153, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 153, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 102, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 51, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 0, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 51, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 51, 153, 1.00)', subsets: ['blue', 'dark']}
	],
	[
		{rgba: 'RGBA(102, 153, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 153, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(51, 204, 204, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 153, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 102, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 102, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 51, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(102, 102, 153, 1.00)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'RGBA(51, 153, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 204, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(0, 255, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(51, 204, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(51, 153, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(102, 153, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(102, 102, 255, 1.00)', subsets: ['blue', 'purple', 'light']},
		{rgba: 'RGBA(102, 0, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(102, 0, 204, 1.00)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'RGBA(51, 153, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 204, 1.00)', subsets: ['green', 'blue', 'light']},
		{rgba: 'RGBA(102, 255, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(102, 204, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(153, 204, 255, 1.00)', subsets: ['blue', 'light']},
		{rgba: 'RGBA(153, 153, 255, 1.00)', subsets: ['blue', 'purple', 'light']},
		{rgba: 'RGBA(153, 102, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(153, 51, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(153, 0, 255, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(0, 102, 0, 1.00)', subsets: ['green', 'dark']},
		{rgba: 'RGBA(0, 204, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 153, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(153, 255, 204, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(204, 255, 255, 1.00)', subsets: ['blue', 'pastel', 'light']},
		{rgba: 'RGBA(204, 204, 255, 1.00)', subsets: ['blue', 'purple', 'pastel', 'light']},
		{rgba: 'RGBA(204, 153, 255, 1.00)', subsets: ['purple', 'light']},
		{rgba: 'RGBA(204, 102, 255, 1.00)', subsets: ['purple', 'pink', 'light']},
		{rgba: 'RGBA(204, 51, 255, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(204, 0, 255, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(153, 0, 204, 1.00)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'RGBA(0, 51, 0, 1.00)', subsets: ['green', 'dark']},
		{rgba: 'RGBA(0, 153, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(51, 204, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 102, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(153, 255, 153, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(204, 255, 204, 1.00)', subsets: ['green', 'pastel', 'light']},
		{rgba: 'RGBA(255, 255, 255, 1.00)', subsets: ['white', 'light']},
		{rgba: 'RGBA(255, 204, 255, 1.00)', subsets: ['pink', 'pastel', 'light']},
		{rgba: 'RGBA(255, 153, 255, 1.00)', subsets: ['pink', 'light']},
		{rgba: 'RGBA(255, 102, 255, 1.00)', subsets: ['pink', 'light']},
		{rgba: 'RGBA(255, 0, 255, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(204, 0, 204, 1.00)', subsets: ['pink', 'purple']},
		{rgba: 'RGBA(102, 0, 102, 1.00)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'RGBA(51, 102, 0, 1.00)', subsets: ['green', 'dark']},
		{rgba: 'RGBA(0, 153, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(153, 255, 102, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(204, 255, 153, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(255, 255, 204, 1.00)', subsets: ['yellow', 'pastel', 'light']},
		{rgba: 'RGBA(255, 204, 204, 1.00)', subsets: ['pink', 'pastel', 'light']},
		{rgba: 'RGBA(255, 153, 204, 1.00)', subsets: ['pink', 'light']},
		{rgba: 'RGBA(255, 102, 204, 1.00)', subsets: ['pink', 'red', 'light']},
		{rgba: 'RGBA(255, 51, 204, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(204, 0, 153, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(153, 51, 153, 1.00)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'RGBA(51, 51, 0, 1.00)', subsets: ['green', 'brown']},
		{rgba: 'RGBA(102, 153, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(153, 255, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 102, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(255, 255, 153, 1.00)', subsets: ['yellow', 'light']},
		{rgba: 'RGBA(255, 204, 153, 1.00)', subsets: ['orange', 'light']},
		{rgba: 'RGBA(255, 153, 153, 1.00)', subsets: ['orange', 'pink', 'light']},
		{rgba: 'RGBA(255, 102, 153, 1.00)', subsets: ['pink', 'red', 'light']},
		{rgba: 'RGBA(255, 51, 153, 1.00)', subsets: ['pink', 'red']},
		{rgba: 'RGBA(204, 51, 153, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(153, 0, 153, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(102, 102, 51, 1.00)', subsets: ['brown', 'green']},
		{rgba: 'RGBA(153, 204, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 51, 1.00)', subsets: ['green', 'light']},
		{rgba: 'RGBA(255, 255, 102, 1.00)', subsets: ['yellow', 'light']},
		{rgba: 'RGBA(255, 204, 102, 1.00)', subsets: ['orange', 'yellow', 'light']},
		{rgba: 'RGBA(255, 153, 102, 1.00)', subsets: ['orange', 'light']},
		{rgba: 'RGBA(255, 102, 102, 1.00)', subsets: ['orange', 'red', 'light']},
		{rgba: 'RGBA(255, 0, 102, 1.00)', subsets: ['red', 'light']},
		{rgba: 'RGBA(204, 102, 153, 1.00)', subsets: ['red', 'purple']},
		{rgba: 'RGBA(153, 51, 102, 1.00)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'RGBA(153, 153, 102, 1.00)', subsets: ['brown']},
		{rgba: 'RGBA(204, 204, 0, 1.00)', subsets: ['brown', 'yellow']},
		{rgba: 'RGBA(255, 255, 0, 1.00)', subsets: ['yellow']},
		{rgba: 'RGBA(255, 204, 0, 1.00)', subsets: ['yellow', 'orange']},
		{rgba: 'RGBA(255, 153, 51, 1.00)', subsets: ['orange']},
		{rgba: 'RGBA(255, 102, 0, 1.00)', subsets: ['orange']},
		{rgba: 'RGBA(255, 80, 80, 1.00)', subsets: ['red', 'orange']},
		{rgba: 'RGBA(204, 0, 102, 1.00)', subsets: ['red']},
		{rgba: 'RGBA(102, 0, 51, 1.00)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'RGBA(153, 102, 51, 1.00)', subsets: ['brown', 'dark']},
		{rgba: 'RGBA(204, 153, 0, 1.00)', subsets: ['brown', 'yellow']},
		{rgba: 'RGBA(255, 153, 0, 1.00)', subsets: ['orange', 'yellow']},
		{rgba: 'RGBA(204, 102, 0, 1.00)', subsets: ['brown', 'yellow']},
		{rgba: 'RGBA(255, 51, 0, 1.00)', subsets: ['red', 'orange']},
		{rgba: 'RGBA(255, 0, 0, 1.00)', subsets: ['red']},
		{rgba: 'RGBA(204, 0, 0, 1.00)', subsets: ['red']},
		{rgba: 'RGBA(153, 0, 51, 1.00)', subsets: ['red', 'purple', 'dark']},
	],
	[
		{rgba: 'RGBA(102, 51, 0, 1.00)', subsets: ['brown', 'dark']},
		{rgba: 'RGBA(153, 102, 0, 1.00)', subsets: ['brown', 'dark']},
		{rgba: 'RGBA(204, 51, 0, 1.00)', subsets: ['orange', 'red', 'dark']},
		{rgba: 'RGBA(153, 51, 0, 1.00)', subsets: ['brown', 'red', 'dark']},
		{rgba: 'RGBA(153, 0, 0, 1.00)', subsets: ['red', 'dark']},
		{rgba: 'RGBA(128, 0, 0, 1.00)', subsets: ['red', 'brown', 'dark']},
		{rgba: 'RGBA(153, 51, 51, 1.00)', subsets: ['red', 'brown', 'dark']},
	]
]

$(document).ready(function(){

	// cycle through colors in collection
	// and construct our color wheel
	for(var i=0; i<colorWheel.length; i++){
		$('#color-wheel').append('<div class="color-row" id="row' + i + '"></div>');
		var row = $('#row' + i)
		row.css({
			width: colorWheel[i].length * 20 + colorWheel[i].length,
		})
		for(var j=0; j<colorWheel[i].length; j++){
			row.append('<div class="color" id="color-' + i + '-' + j + '"></div>');
			var color = $('#color-' + i + '-' + j)
			color.css({
				backgroundColor: colorWheel[i][j].rgba
			});
			for(var k=0; k<colorWheel[i][j].subsets.length; k++){
				color.addClass(colorWheel[i][j].subsets[k]);
			}
		}
	}

	function showSubsetColors(subset){
		$('#input').attr("placeholder", subset);
		$('#colors-display').append('<div class="subset-display" id="' + subset + '"><br><div class="btn btn-default btn-block">' + subset + ' subset</div><div><br>')
		var colors = []
		for(var i=0; i<7; i++){
			$.each(colorWheel, function(index, row) {
				if (index == i || index == (colorWheel.length-1-i)) {
					for(var j=i; j<row.length-i; j++) {
						if ($.inArray(subset, row[j].subsets) >= 0) {
							var x = $('#' + subset).append('<div class="color-display" style="background: ' + row[j].rgba + '; width: ' + randomDivWidth() + 'px;"></div>');
						}
					}
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

	$('#colors-display').on('click', function(e){
		var evt = e.target;
		if (evt.getAttribute('class') == "btn btn-default btn-block") {
			$('#input').val($(evt).text().replace(' subset', ''))
			$('#button').trigger('click');
		} else {
			var rgb = $(evt).css('backgroundColor');
			displayColor(rgb);
		}
	})

	$('#button').on('click', function(e){
		$('#colors-display').html('');
		e.preventDefault();
		showSubsetColors($('#input').val());
		$('#input').val('');
	})

	function displayColor(rgb){
		$('#color-selected').css({
			display: 'block',
			backgroundColor: rgb
		})
		$('#color-selected p').text(rgb);
	}

	function randomDivWidth(){
		return Math.floor(Math.random()*(101)+20);
	}
})
