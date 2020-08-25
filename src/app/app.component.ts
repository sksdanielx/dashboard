import { Component } from '@angular/core';

declare var App: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-mtw-dashboard';

  constructor() {

  }

  ngOnInit(): void {
    //Load Scripts
    App.init();
  }
}
