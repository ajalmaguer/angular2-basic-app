import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

declare var $

@Component({
	selector: 'app-navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	    $(".button-collapse").sideNav();
	}

	goTo(page) {
		this.router.navigate(page)
	    $(".button-collapse").sideNav('hide');
	}

}
