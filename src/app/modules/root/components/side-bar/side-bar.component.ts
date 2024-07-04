import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NAVIGATION_CONST_CONTAINER } from 'src/app/common/constants';

@Component({
  selector: 'diva-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  protected navigationItems = NAVIGATION_CONST_CONTAINER.mainNavigation;
}
