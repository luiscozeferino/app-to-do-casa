import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: './app.component.html',
  template: `<router-outlet>teste</router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-to-do-casa';
}
