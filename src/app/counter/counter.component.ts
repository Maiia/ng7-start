import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CatService } from '../shared/services/cats.service';

@Component({
  selector: 'bb-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private catService: CatService,
  ) {
    console.log(123);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.catService.getAllCats().subscribe(data => console.log('data', data));
  }

}
