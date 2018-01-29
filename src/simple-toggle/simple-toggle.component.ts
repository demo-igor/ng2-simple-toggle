import { Component, ViewEncapsulation, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SimpleToggleSettings } from './simple-toggle.model';

export const SIMPLE_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleToggleComponent),
  multi: true
};

@Component({
  selector: 'simple-toggle',
  templateUrl: './simple-toggle.component.html',
  styleUrls: ['./simple-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [SIMPLE_TOGGLE_VALUE_ACCESSOR]
})
export class SimpleToggleComponent implements ControlValueAccessor, OnInit {
  public disabled = false;
  public checked = false;

  @Input() settings: SimpleToggleSettings;

  private defaultSettings: SimpleToggleSettings = {
    isRounded: true,
    extraClass: ''
  };

  private onTouchedCallback: Function = () => {};
  private onChangeCallback: Function = () => {};

  constructor() {}

  ngOnInit() {
    this.settings = this.settings ? Object.assign(this.defaultSettings, this.settings) : this.defaultSettings;
  }

  writeValue(value: any): void {
    if (value) {
      this.checked = true;
    }
  }

  onChange($event: any): void {
    this.checked = $event.target.checked;
    this.onChangeCallback(this.checked);
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
