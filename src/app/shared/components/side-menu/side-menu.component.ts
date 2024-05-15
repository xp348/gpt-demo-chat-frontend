import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { ICON_PATH, IconPathType } from '../../../core/tokens/icon-path.token';
import { MapperPipe } from '../../pipes/mapper.pipe';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { SVG_PATH, SvgPathType } from '../../../core/tokens/svg-path.token';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapperPipe, RouterModule, NgClass, MatButtonModule],
})
export class SideMenuComponent {
  @Input() listOfTitles: string[] = ['Чат 1', 'Чат 1'];
  @Input() selectedIndex: number = 0;
  @Output()
  newSelectedIndex = new EventEmitter<number>();
  constructor(@Inject(SVG_PATH) public svgPathMapper: SvgPathType) {}
}
