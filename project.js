var button = document.getElementById('mainButton');

var openForm = function() {
	button.className = 'active';
};

var checkInput = function(input) {
	if (input.value.length > 0) {
		input.className = 'active';
	} else {
		input.className = '';
	}
};

