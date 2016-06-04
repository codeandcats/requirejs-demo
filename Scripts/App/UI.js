// This is a legacy script written in JavaScript that declares a UI service in the global scope

var UI = UI || {};

UI.showMessage = function(message, type) {
	if (type == undefined) {
		type = 'info';
	}
	
	if (['info', 'success', 'warning', 'danger'].indexOf(type) == -1) {
		throw new Error('Invalid message type: "' + type + '"');
	}
	
	var $message = $('<div class="alert alert-' + type + '" role="alert"></div>');
	
	$message.text(message);
	
	var $close = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
	
	$close.click(() => $message.remove());
	
	$message.append($close);
	
	$('#message-list').append($message);
};
