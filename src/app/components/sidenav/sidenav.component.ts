import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {getModeSidenav, getShowSidenav} from '../../redux/reducers/index';
import * as LayoutsActions from '../../redux/actions/layouts.actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showSidenav: Observable<boolean>;
  modeSidenav: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.showSidenav = this.store.select(getShowSidenav);
    this.modeSidenav = this.store.select(getModeSidenav);
  }
  setSidenav(event: boolean) {
    this.store.dispatch(new LayoutsActions.SetSidenav(event));
  }

}
