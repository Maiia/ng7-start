import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loading = new Subject<{
    loading: boolean;
    hasError: boolean;
    hasMsg: string;
  }>();

  show() {
    this.loading.next({ loading: true, hasError: false, hasMsg: '' });
  }

  hide() {
    this.loading.next({ loading: false, hasError: false, hasMsg: '' });
  }

  get(): Observable<any> {
    return this.loading.asObservable();
  }
}
