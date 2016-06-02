import * as $ from 'jquery';
import { showMessage } from '../UI';

export class HomeHandler {
	constructor(private actionSelector: string) {
		$(() => this.init());
	}
	
	private init() {
		$(this.actionSelector).click(this.action.bind(this));
	}
	
	private action() {
		showMessage('Did The Thing!', 'success');
	}
};
