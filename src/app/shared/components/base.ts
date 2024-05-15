import {
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  Type,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({ template: '' })
export class BaseNgModelComponent<T = any> implements ControlValueAccessor {
  @Input()
  disabled!: boolean;

  @Input()
  set value(value: T) {
    this._value = value;
    this.notifyValueChange();
  }

  get value(): T {
    return this._value;
  }

  onChange!: (value: T) => {};
  onTouched!: () => {};

  _value!: T;
  protected cdRef: ChangeDetectorRef;

  constructor(public injector: Injector) {
    this.cdRef = injector.get<ChangeDetectorRef>(
      ChangeDetectorRef as Type<ChangeDetectorRef>
    );
  }

  onModelChange(value: T) {
    this.writeValue(value);
    console.log(value);

    if (this.onChange) {
      this.onChange(value);
    }
  }

  notifyValueChange = () => {
    if (this.onChange) {
      this.onChange(this.value);
    }
  };

  writeValue(value: T): void {
    this._value = value;
    setTimeout(() => this.cdRef.detectChanges(), 0);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
