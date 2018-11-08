import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cat, CatService } from '../shared/services/cats.service';
import { Store } from '@ngrx/store';
import * as CatsActions from './cats.actions';
import * as CatsOwnersGqlActions from './cats-owners-store/cats-owners.actions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CatsGqService } from '../shared/services/cats.gq.service';


@Component({
  selector: 'bb-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})


export class CatsComponent implements OnInit {
  cats: Array<Cat>;
  cats$: any;
  initialized;
  initializedGql;

  catsReactiveForm: FormGroup;
  formControls: any;

  catsOwners: any;
  catsOwners$: any;

  constructor(
    private store: Store<any>,
    private translate: TranslateService,
    private catService: CatService,
    private catGqService: CatsGqService,
    private fb: FormBuilder
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.initialized = false;

    // from store
    this.store
      .subscribe((p: any) => {
        this.cats$ = p['catsState']['cats'];

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(new CatsActions.LoadCats());
        }
      });

    // from store gql
    this.store
      .subscribe((p: any) => {
        this.catsOwners$ = p['catsOwnersState']['cats_owners'];
        console.log('cats owners ', this.catsOwners$);

        if (!this.initializedGql) {
          this.initializedGql = true;
          this.store.dispatch(new CatsOwnersGqlActions.LoadCatsOwnersGql());
        }
      });

    // form
    this.initFormData();

    this.catGqService.getAllCatsGql().subscribe(
      data => {
        console.log('arr?', data);
        this.catsOwners = data.data
      }
    );
  }

  removeItem(item) {
    console.log('item', item);
    this.store.dispatch(new CatsActions.RemoveCat(item));
  }


  // test method
  getCats() {
    this.store.dispatch(new CatsActions.LoadCats());
  }

  onSubmit() {
    console.log('invalid', this.catsReactiveForm.controls.catName.value);
    console.log('invalid', this.catsReactiveForm.valid);

    if (this.catsReactiveForm.valid) {
      this.store.dispatch(new CatsActions.AddCat(this.catsReactiveForm.value));
      this.initFormData();
    } else {
      console.log('123');
      this.formControls = Object.assign({}, this.catsReactiveForm.controls);
      Object.keys(this.formControls)
        .forEach(controlName => this.formControls[controlName].markAsTouched());
      return;
    }
  }

  initFormData() {
    this.catsReactiveForm = this.fb.group({
      catName: new FormControl('', [Validators.required]),
      catColor: new FormControl(''),
      catAge: new FormControl(''),
      catHabits: new FormControl('')
    })
  }

}
