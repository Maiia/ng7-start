import { Component, Input, OnChanges } from '@angular/core';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'bb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],

  animations: [
    trigger('lineAnimation', [
      transition(
        'true <=> false',
        animate(
          '1s ease-in',
          keyframes([
            style({ transform: 'translateX(-100%)', offset: 0 }),
            style({ transform: 'translateX(0px)', offset: 1.0 })
          ])
        )
      )
    ])
  ]
})
export class BreadcrumbsComponent implements OnChanges {
  @Input() pagesNames: string[];
  @Input() currentPage: number;
  @Input() breadcrumbsLineState: boolean;

  constructor() {}

  ngOnChanges() {
    console.log('aaa', this.breadcrumbsLineState);
  }
}
