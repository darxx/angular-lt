import { Component } from '@angular/core';
import {StateService} from '../state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public stateService: StateService
  ) {

  }

}
