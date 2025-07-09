import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GeneralInfo } from '../../components/general-info/general-info';
import { PerformanceMetrics } from '../../components/performance-metrics/performance-metrics';

@Component({
  selector: 'app-account',
  imports: [GeneralInfo, PerformanceMetrics],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Account {

}
