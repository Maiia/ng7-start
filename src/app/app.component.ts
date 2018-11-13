import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'binck';

  constructor(private loaderService: LoaderService) {
    // this.loaderService.display(true);
  }

  ngOnInit() {
    // const self = this;
    // setTimeout(
    //   function() {
    //     self.loaderService.display(false);
    //   }, 1000
    // )
  }
}
