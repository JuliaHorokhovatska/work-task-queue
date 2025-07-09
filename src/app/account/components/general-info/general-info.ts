import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-general-info',
  imports: [],
  templateUrl: './general-info.html',
  styleUrl: './general-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralInfo {}
