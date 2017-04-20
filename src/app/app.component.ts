import {Component} from '@angular/core';
import {ThingService} from './services/thing.service';
import {Thing} from "./thing/model/thing";


@Component({
  selector: 'my-app',
  template: `
<h1>{{title}}</h1>
<router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Things';
}
