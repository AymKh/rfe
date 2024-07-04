import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'diva-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }

}
