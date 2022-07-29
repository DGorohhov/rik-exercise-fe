import {Component, Input} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from '@angular/forms';

import {ErrorMessageConstant} from '../../core/constant/error-message-constant';

@Component({
  selector: 'rik-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss']
})
export class GenericErrorComponent {

  private static readonly errorMessages = {
    'required': () => ErrorMessageConstant.REQUIRED_FIELD_ERROR,
    'minlength': (params: { requiredLength: string; }) => ErrorMessageConstant.MIN_LENGTH_ERROR + params.requiredLength,
    'maxlength': (params: { requiredLength: string; }) => ErrorMessageConstant.MAX_LENGTH_ERROR + params.requiredLength,
    'pattern': () => ErrorMessageConstant.PATTERN_MISMATCH_ERROR,
  };

  @Input()
  public control?: AbstractControlDirective | AbstractControl;

  public shouldShowErrors(): boolean {
    // @ts-ignore
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  public listOfErrors(): string[] {
    // @ts-ignore
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }

  // tslint:disable-next-line:no-any
  private getMessage(type: string, params: any) {
    // @ts-ignore
    return GenericErrorComponent.errorMessages[type](params);
  }

}
