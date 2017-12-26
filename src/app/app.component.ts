import { Component } from '@angular/core';
import {Constant} from "./common/constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  total = 1000;

  public Constant = Constant;
}
