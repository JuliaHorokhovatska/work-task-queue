import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeneralInfo } from '../../components/general-info/general-info';

@Component({
  selector: 'app-account',
  imports: [GeneralInfo],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Account {

}
