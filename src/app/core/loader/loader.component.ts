import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'bb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  subscription: Subscription = null;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.subscription = this.loaderService
      .get()
      .subscribe(loadingSubject => (this.loading = loadingSubject.loading));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
