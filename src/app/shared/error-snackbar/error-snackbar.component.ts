import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';

import {ErrorSnackbarDto} from '../../core/model/error-snackbar-dto.model';

@Component({
  selector: 'rik-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss']
})
export class ErrorSnackbarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public readonly data: ErrorSnackbarDto,
    public readonly snackbar: MatSnackBar
  ) { }

}
