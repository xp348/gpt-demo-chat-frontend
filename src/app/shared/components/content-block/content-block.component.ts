import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-content-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBlockComponent {
  @Input() title: string = '';
  @Input() width: string = '100%';
  @Input() gap: string = '10px';
  @Input() columns: number = 1;
}
