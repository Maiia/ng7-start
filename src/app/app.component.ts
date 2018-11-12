import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'binck';

  constructor() // private loaderService: LoaderService
  {
    // this.loaderService.show();
  }

  ngOnInit() {}
}
