import { Component } from '@angular/core';
import { CardSkillComponent } from '../../components/card-skill/card-skill.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [CardSkillComponent, CommonModule, ButtonComponent, RouterModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  skills = [
    { imageUrl: '../../../assets/angular.svg', name: 'Angular' },
    { imageUrl: '../../../assets/JS.svg', name: 'JavaScript' },
    { imageUrl: '../../../assets/typescript1.svg', name: 'TypeScript' },
    { imageUrl: '../../../assets/git.svg', name: 'Git' },
    { imageUrl: '../../../assets/scss.svg', name: 'SCSS' },
    { imageUrl: '../../../assets/html.svg', name: 'HTML' },
    { imageUrl: '../../../assets/figma.svg', name: 'Figma' },
    { imageUrl: '../../../assets/bootstrap.svg', name: 'Boostrap' },
    { imageUrl: '../../../assets/tailwind1.svg', name: 'Tailwind CSS' },
    { imageUrl: '../../../assets/react.svg', name: 'React JS' },
  ];

}
