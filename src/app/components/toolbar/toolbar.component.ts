import {Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {getShowSidenav} from '../../redux/reducers/index';
import * as LayoutsActions from '../../redux/actions/layouts.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'ICU-Expert';
  showSidenav: boolean;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(getShowSidenav).subscribe(res =>
    this.showSidenav = res
    );
  }
  toggleSidenav() {
    this.store.dispatch(new LayoutsActions.SetSidenav(!this.showSidenav));
  }

}
