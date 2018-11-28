import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { tree } from '../formly/forms/tree';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bb-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  public currentPage = 0;
  currentPageRouting;
  public model = {};
  form;
  options;
  public fields: FormlyFieldConfig[] = [];

  pages;
  pagesNames: string[];

  breadcrumbsLineState = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentPageRouting = `question_${this.currentPage + 1}`;
    this.router.navigate(['documentation', this.currentPageRouting], {
      skipLocationChange: false
    });
    this.pages = tree.pages;
    this.pagesNames = this.pages.reduce((total: object[], item: any) => {
      total.push(item.label);
      return total;
    }, []);

    this.form = new FormArray(this.pages.map(() => new FormGroup({})));
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.options = this.pages.map(() => <FormlyFormOptions>{});
  }

  submit() {
    this.currentPage = ++this.currentPage;
    this.currentPageRouting = `question_${this.currentPage + 1}`;
    this.router.navigate(['documentation', this.currentPageRouting], {
      skipLocationChange: false
    });
    this.breadcrumbsLineState = this.breadcrumbsLineState !== true;
  }

  back() {
    this.currentPage = --this.currentPage;
    this.currentPageRouting = `question_${this.currentPage + 1}`;
    this.router.navigate(['documentation', this.currentPageRouting], {
      skipLocationChange: false
    });
    this.breadcrumbsLineState = this.breadcrumbsLineState !== true;
  }
}
