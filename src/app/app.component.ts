import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showRecipes: Boolean = true;

  onNavigate(feature: string) {
    if (feature === 'recipe') {
        this.showRecipes = true;
    }
    else {
      this.showRecipes = false;
    }
  }

}
