import {Injectable, NgZone} from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

import {ErrorSnackbarComponent} from '../../shared/error-snackbar/error-snackbar.component';

import {ErrorSnackbarDto} from '../model/error-snackbar-dto.model';

@Injectable()
export class PopupService {

  constructor(
    private snackBar: MatSnackBar,
    private zone: NgZone,
  ) {
  }

  // tslint:disable-next-line:no-any
  public throwErrorPopup(errorMessage: string, originalError?: any): void {
    this.zone.run(() => {
      this.snackBar.openFromComponent(ErrorSnackbarComponent, {
        panelClass: ['mat-toolbar', 'red-snackbar'],
        duration: 5000,
        data: {
          errorMessage,
          originalError,
        } as ErrorSnackbarDto,
      });
    });
  }

  public throwSuccessPopup(successMessage: string): void {
    this.zone.run(() => {
      this.snackBar.open(successMessage, 'OK', {
        panelClass: ['mat-toolbar', 'blue-snackbar'],
        duration: 5000,
      });
    });
  }

}
