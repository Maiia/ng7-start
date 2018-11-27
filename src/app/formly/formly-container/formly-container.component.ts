import {
  Component,
  Input,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Converter } from 'showdown';

@Component({
  selector: 'bb-formly',
  templateUrl: './formly-container.component.html',
  styleUrls: ['./formly-container.component.scss']
})
export class FormlyContainerComponent implements OnChanges, AfterViewInit {
  public form = new FormGroup({});
  public model = {};
  public fields: FormlyFieldConfig[] = [];
  public options: FormlyFormOptions = {
    formState: {}
  };

  @ViewChild('formContainer') formContainer: ElementRef;
  @Input() json: any;

  constructor() {}

  ngOnChanges() {
    this.fields = this.json;
  }

  ngAfterViewInit() {
    const converter = new Converter();
    const jsonToChange = this.fields.filter(
      item =>
        item.type === 'radio' ||
        item.type === 'multicheckbox' ||
        item.type === 'checkbox'
    );

    const imagesArr = jsonToChange.reduce((total: Array<object>, item: any) => {
      item.templateOptions['options'].forEach((optionItem: any) => {
        total.push({ type: optionItem.type, label: optionItem.label });
      });
      return total;
    }, []);

    this.formContainer.nativeElement
      .querySelectorAll('.mat-radio-label-content, .mat-checkbox-label')
      .forEach((item, index) => {
        if (imagesArr[index]['type'] === 'image') {
          item.innerHTML = converter.makeHtml(
            `![Alt text](${imagesArr[index]['label']})`
          );
        }
      });
  }

  submit() {
    console.log('aaa', this.form);
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
