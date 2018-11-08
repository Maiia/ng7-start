import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binck';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');

  }
}
