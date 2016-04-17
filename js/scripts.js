var colorWheel = [
	[
		{rgba: 'RGBA(0, 51, 102, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 102, 153, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 102, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 51, 153, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 0, 153, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 0, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 0, 102, 1.00)', subsets: ['blue']}
	],
	[
		{rgba: 'RGBA(0, 102, 102, 1.00)', subsets: ['blue', 'green']},
		{rgba: 'RGBA(0, 102, 153, 1.00)', subsets: ['blue', 'grey']},
		{rgba: 'RGBA(0, 153, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 102, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 51, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 0, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 51, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 51, 153, 1.00)', subsets: ['blue']}
	],
	[
		{rgba: 'RGBA(102, 153, 153, 1.00)', subsets: ['grey', 'green']},
		{rgba: 'RGBA(0, 153, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(51, 204, 204, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 153, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(0, 102, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 102, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 51, 204, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(102, 102, 153, 1.00)', subsets: ['blue', 'grey', 'purple']},
	],
	[
		{rgba: 'RGBA(51, 153, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 204, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 255, 1.00)', subsets: ['green', 'blue']},
		{rgba: 'RGBA(51, 204, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(51, 153, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(102, 153, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(102, 102, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(102, 0, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(102, 0, 204, 1.00)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'RGBA(51, 153, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 204, 1.00)', subsets: ['green', 'blue']},
		{rgba: 'RGBA(102, 255, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(102, 204, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(153, 204, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(153, 153, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(153, 102, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(153, 51, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(153, 0, 255, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(0, 102, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 204, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 255, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(153, 255, 204, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 255, 1.00)', subsets: ['blue']},
		{rgba: 'RGBA(204, 204, 255, 1.00)', subsets: ['blue', 'purple']},
		{rgba: 'RGBA(204, 153, 255, 1.00)', subsets: ['purple']},
		{rgba: 'RGBA(204, 102, 255, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(204, 51, 255, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(204, 0, 255, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(153, 0, 204, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(0, 51, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 153, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(51, 204, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(153, 255, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 204, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(255, 255, 255, 1.00)', subsets: ['white']},
		{rgba: 'RGBA(255, 204, 255, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(255, 153, 255, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(255, 102, 255, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(255, 0, 255, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(204, 0, 204, 1.00)', subsets: ['pink', 'purple']},
		{rgba: 'RGBA(102, 0, 102, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(51, 102, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(0, 153, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(102, 255, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(153, 255, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 153, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(255, 255, 204, 1.00)', subsets: ['yellow']},
		{rgba: 'RGBA(255, 204, 204, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(255, 153, 204, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(255, 102, 204, 1.00)', subsets: ['pink', 'red']},
		{rgba: 'RGBA(255, 51, 204, 1.00)', subsets: ['pink']},
		{rgba: 'RGBA(204, 0, 153, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(153, 51, 153, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(51, 51, 0, 1.00)', subsets: ['green', 'brown']},
		{rgba: 'RGBA(102, 153, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(153, 255, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 102, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(255, 255, 153, 1.00)', subsets: ['yellow']},
		{rgba: 'RGBA(255, 204, 153, 1.00)', subsets: ['orange']},
		{rgba: 'RGBA(255, 153, 153, 1.00)', subsets: ['orange', 'pink']},
		{rgba: 'RGBA(255, 102, 153, 1.00)', subsets: ['pink', 'red']},
		{rgba: 'RGBA(255, 51, 153, 1.00)', subsets: ['pink', 'red']},
		{rgba: 'RGBA(204, 51, 153, 1.00)', subsets: ['purple', 'pink']},
		{rgba: 'RGBA(153, 0, 153, 1.00)', subsets: ['purple']},
	],
	[
		{rgba: 'RGBA(102, 102, 51, 1.00)', subsets: ['brown', 'green']},
		{rgba: 'RGBA(153, 204, 0, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(204, 255, 51, 1.00)', subsets: ['green']},
		{rgba: 'RGBA(255, 255, 102, 1.00)', subsets: ['yellow']},
		{rgba: 'RGBA(255, 204, 102, 1.00)', subsets: ['orange', 'yellow']},
		{rgba: 'RGBA(255, 153, 102, 1.00)', subsets: ['orange']},
		{rgba: 'RGBA(255, 102, 102, 1.00)', subsets: ['orange', 'red']},
		{rgba: 'RGBA(255, 0, 102, 1.00)', subsets: ['red']},
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
		{rgba: 'RGBA(153, 102, 51, 1.00)', subsets: ['brown']},
		{rgba: 'RGBA(204, 153, 0, 1.00)', subsets: ['brown', 'yellow']},
		{rgba: 'RGBA(255, 153, 0, 1.00)', subsets: ['orange', 'yellow']},
		{rgba: 'RGBA(204, 102, 0, 1.00)', subsets: ['brown', 'yellow']},
		{rgba: 'RGBA(255, 51, 0, 1.00)', subsets: ['red', 'orange']},
		{rgba: 'RGBA(255, 0, 0, 1.00)', subsets: ['red']},
		{rgba: 'RGBA(204, 0, 0, 1.00)', subsets: ['red']},
		{rgba: 'RGBA(153, 0, 51, 1.00)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'RGBA(102, 51, 0, 1.00)', subsets: ['brown']},
		{rgba: 'RGBA(153, 102, 0, 1.00)', subsets: ['brown']},
		{rgba: 'RGBA(204, 51, 0, 1.00)', subsets: ['orange', 'red']},
		{rgba: 'RGBA(153, 51, 0, 1.00)', subsets: ['brown', 'red']},
		{rgba: 'RGBA(153, 0, 0, 1.00)', subsets: ['red']},
		{rgba: 'RGBA(128, 0, 0, 1.00)', subsets: ['red', 'brown']},
		{rgba: 'RGBA(153, 51, 51, 1.00)', subsets: ['red', 'brown']},
	]
]

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
	$('#colors-display').append('<div class="subset-display" id="' + subset + '"><h4>' + subset + '</h4><div>')
	var colors = []
	$.each(colorWheel, function(index, row){
		$.each(row, function(i, color){
			if($.inArray(subset, color.subsets) >= 0){
				var x = $('#' + subset).append('<div class="color-display" style="background: ' + color.rgba + '"></div>');
			}
		})
	})
}

$('#color-wheel').on('click', function(e){
	// clear the inner html of our subset display
	$('#colors-display').html('');
	// select the div that was clicked on
	var color = e.target;
	var rgb = $(color).css('backgroundColor');
	displayColor(rgb);
	// grab the subsets from that color
	var subsets = color.getAttribute('class').replace("color ", "");
	var subsetArray = subsets.split(" ");
	// print to screen the values of each color that is in the subsets
	$.each(subsetArray, function(index,obj){
		showSubsetColors(obj);
	})
})

$('#colors-display').on('click', function(e){
	var color = e.target;
	var rgb = $(color).css('backgroundColor');
	displayColor(rgb);
})

$('#button').on('click', function(e){
	$('#colors-display').html('');
	e.preventDefault();
	showSubsetColors($('#input').val());
})

function displayColor(rgb){
	$('#color-selected').css({
		display: 'block',
		backgroundColor: rgb
	})
	$('#color-selected p').text(rgb);
}

function randomDivWidth(){

}
