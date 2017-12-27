import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  total = 1000;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  value = null;

  onWindowScroll() {
    console.log("scroll")
    //we'll do some stuff here when the window is scrolled
  }
  search() {

  }
}
