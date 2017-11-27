import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';

import * as LayoutsActions from './redux/actions/layouts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<any>,
    breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(
      Breakpoints.Handset
    ).subscribe(result => {
      this.store.dispatch(new LayoutsActions.SetSidenav(!result.matches));
      if (result.matches) {
        this.store.dispatch(new LayoutsActions.SetModeSidenav('over'));
      } else {
        this.store.dispatch(new LayoutsActions.SetModeSidenav('side'));
      }
    }
    );
  }
}
