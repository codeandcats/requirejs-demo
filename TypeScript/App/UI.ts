import * as $ from 'jquery';

export type MessageType = 'info' | 'success' | 'warning' | 'danger';

export function showMessage(message: string, type: MessageType = 'success') {
	const $message = $(`<div class="alert alert-${type}" role="alert"></div>`);
	
	$message.text(message);
	
	const $close = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
	
	$close.click(() => $message.remove());
	
	$message.append($close);
	
	$('#message-list').append($message);
}
