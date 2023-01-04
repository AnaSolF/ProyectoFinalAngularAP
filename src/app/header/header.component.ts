import { Component, OnInit } from '@angular/core';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
	templateUrl: './header.component.html',
	// add NgbOffcanvasConfig and NgbOffcanvas to the component providers
	providers: [NgbOffcanvasConfig, NgbOffcanvas],
})

export class HeaderComponent {
	constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;

	}

	open(content : any) {
		this.offcanvasService.open(content);
	}

	ngOnInit() {
	}
}




