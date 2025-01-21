import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  imports: [],
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.scss'
})
export class CardSkillComponent {
 @Input() imagemUrl = '';
 @Input() nome = ''
  
}
