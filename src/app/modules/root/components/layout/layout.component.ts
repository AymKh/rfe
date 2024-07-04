import { Component, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'diva-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild(SideBarComponent) SideBarComponent!: SideBarComponent;

  toggleSidenav() {
    this.SideBarComponent.sidenav.toggle();
  }

}
