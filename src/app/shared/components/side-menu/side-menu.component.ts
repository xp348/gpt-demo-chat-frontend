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

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapperPipe, RouterModule, NgClass],
})
export class SideMenuComponent {
  @Input() listOfTitles: string[] = ['Чат 1', 'Чат 1'];
  @Input() selectedIndex: number = 0;
  @Output()
  newSelectedIndex = new EventEmitter<number>();
}
