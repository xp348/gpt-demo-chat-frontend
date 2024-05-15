import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  OnInit,
  forwardRef,
} from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseNgModelComponent } from '../base';
@Component({
  selector: 'app-input-period',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPeriodComponent),
      multi: true,
    },
    provideNativeDateAdapter(),
  ],
  templateUrl: './input-period.component.html',
  styleUrl: './input-period.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPeriodComponent
  extends BaseNgModelComponent<
    Partial<{
      start: Date | null;
      end: Date | null;
    }>
  >
  implements OnInit
{
  @Input() required: boolean = false;
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined = new Date();

  range = new FormGroup({
    start: new FormControl<Date | null>(this.value?.start || null),
    end: new FormControl<Date | null>(this.value?.end || null),
  });

  constructor(public override injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.range.valueChanges.subscribe((res) => {
      this.value = res;
    });
  }
}
