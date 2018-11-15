import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  permission: any;
  title = 'binck';

  constructor(
    private store: Store<any>,
    private loaderService: LoaderService,
    private permissionsService: NgxPermissionsService,
    private http: HttpClient
  ) {
    // this.loaderService.display(true);
  }

  ngOnInit() {
    const permission =
      this.permissionsService.getPermissions() ||
      localStorage.getItem('permission') ||
      'VIEWER';

    // console.log('AAA', permission);
    // this.store.dispatch(new AuthActions.LogOut() );
    this.store
      .select('AuthorizationState')
      .subscribe(data =>
        this.permissionsService.addPermission(data.permission)
      );
    // console.log('this.permission', this.permission);
    // const perm = ["ADMIN", "EDITOR", "VIEWER"];

    // this.permissionsService.loadPermissions(perm);
    // this.permissionsService.addPermission('changeSomething')

    // var permissions = this.permissionsService.getPermissions();

    this.permissionsService.permissions$.subscribe(permissions => {
      this.permission = permissions || localStorage.getItem('permission');
      console.log('permissions', permissions);
    });
  }
}
