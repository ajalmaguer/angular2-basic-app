import { Component, OnInit } from '@angular/core';

declare var $

@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
	showVideo = false

	constructor() { }

	ngOnInit() {
		$('iframe').each(function(){
		       var url = $(this).attr("src");
		       $(this).attr("src",url+"?wmode=transparent");
		   });
	}

}
