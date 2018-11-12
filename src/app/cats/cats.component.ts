import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cat, CatService } from '../shared/services/cats.service';
import { Store } from '@ngrx/store';
import * as CatsActions from './cats.actions';
import * as CatsOwnersGqlActions from './cats-owners-store/cats-owners.actions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CatsGqService } from '../shared/services/cats.gq.service';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'bb-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})


export class CatsComponent implements OnInit {
  cats: Array<Cat>;
  initializedCats;
  initializedCatsOwnars;
  initializedForm;

  catsReactiveForm: FormGroup;
  catsOwnersReactiveForm: FormGroup;
  formControls: any;

  catsOwners: any;
  showAddOwner: boolean;
  catsOwnersReactiveFormInited: boolean;

  constructor(
    private store: Store<any>,
    private translate: TranslateService,
    private catService: CatService,
    private catGqService: CatsGqService,
    private fb: FormBuilder
  ) {
    this.translate.setDefaultLang('en');
    this.showAddOwner = false;
    this.catsOwnersReactiveFormInited = false;
  }

  ngOnInit() {
    this.initializedCats = false;
    this.initializedForm = false;
    this.initializedCatsOwnars = false;

    this.store.dispatch(new CatsActions.LoadCats());
    combineLatest([
      this.store.select('catsOwnersState'),
      this.store.select('catsState')]
    ).subscribe(
      data => data.map(item => {
        this[Object.keys(item).pop()] = item[Object.keys(item).pop()];
        if (this.catsOwners && this.catsOwners.length > 0) {
          this.initFormData()
        }
        }),
      err => console.log('err', err),
      () => console.log('off loader')
    )

    this.store.dispatch(new CatsOwnersGqlActions.LoadCatsOwnersGql());
  }

  removeItem(item) {
    this.store.dispatch(new CatsActions.RemoveCat(item));
  }


  // test method
  getCats() {
    this.store.dispatch(new CatsActions.LoadCats());
  }

  onSubmit() {
    console.log('valid', this.catsReactiveForm.controls.catName.value);
    console.log('valid', this.catsReactiveForm.valid);

    if (this.catsReactiveForm.valid) {
      this.store.dispatch(new CatsActions.AddCat(this.catsReactiveForm.value));
      this.initFormData();
    } else {
      this.formControls = Object.assign({}, this.catsReactiveForm.controls);
      Object.keys(this.formControls)
        .forEach(controlName => this.formControls[controlName].markAsTouched());
      return;
    }
  }

  onSubmitOwners() {
    if (this.catsOwnersReactiveForm.valid) {
      this.store.dispatch(new CatsActions.AddCat(this.catsOwnersReactiveForm.value));
      this.initFormData();
    } else {
      this.formControls = Object.assign({}, this.catsOwnersReactiveForm.controls);
      Object.keys(this.formControls)
        .forEach(controlName => this.formControls[controlName].markAsTouched());
      return;
    }
  }

  initFormData() {
    console.log('asd', this.catsOwners[0].name);
    this.initializedForm = true;
    this.catsReactiveForm = this.fb.group({
      catName: new FormControl('', [Validators.required]),
      catColor: new FormControl(''),
      catHabits: new FormControl(''),
      catOwner: new FormControl()
      // catOwner: new FormControl(this.catsOwners[0].name)
    })
  }

  initFormDataOwner() {
    this.catsOwnersReactiveForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('')
    })
  }

  onChange(value){
    this.showAddOwner = value === 'addOwner';
    if (this.showAddOwner && !this.catsOwnersReactiveFormInited) {
      this.catsOwnersReactiveFormInited = true;
      this.initFormDataOwner()
    }
  }

}
