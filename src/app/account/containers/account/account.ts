import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GeneralInfo } from '../../components/general-info/general-info';
import { PerformanceMetrics } from '../../components/performance-metrics/performance-metrics';
import { Policies } from '../../components/policies/policies';
import { AccountStatusCompliance } from '../../components/account-status-compliance/account-status-compliance';
import { AccountDetails } from '../../components/account-details/account-details';

@Component({
  selector: 'app-account',
  imports: [
    GeneralInfo,
    PerformanceMetrics,
    Policies,
    AccountStatusCompliance,
    AccountDetails,
  ],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Account {}
