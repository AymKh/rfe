import { Component, Input } from '@angular/core';

@Component({
  selector: 'diva-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() iconName = '';

}
