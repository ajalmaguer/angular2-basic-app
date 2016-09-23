import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-running',
  template: `
  	<router-outlet></router-outlet>
  `
})
export class RunningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
