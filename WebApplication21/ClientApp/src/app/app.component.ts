import { Component } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';

import './shared/content/app.less';
import './shared/content/modal.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminconsole';

  constructor() {
    if (window !== undefined) {
      //(<any>window).$ = kendo.jQuery;
    }
  }
}
