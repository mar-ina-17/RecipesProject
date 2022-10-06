import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationFeature: string = 'recipes';

  determineNavigation = (eventValue: string) => {
    this.navigationFeature = eventValue;
  };
}
