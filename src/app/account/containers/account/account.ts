import { afterNextRender, ChangeDetectionStrategy, Component, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralInfo } from '../../components/general-info/general-info';
import { PerformanceMetrics } from '../../components/performance-metrics/performance-metrics';
import { Policies } from '../../components/policies/policies';
import { AccountStatusCompliance } from '../../components/account-status-compliance/account-status-compliance';
import { AccountDetails } from '../../components/account-details/account-details';
import { Communication } from '../../components/communication/communication';
import { PoliciesTable } from '../../components/policies-table/policies-table';
import { Intersection } from '../../../shared/directives/intersection';

enum Elements {
  policies = 'policies',
  accountStatusCompliance = 'accountStatusCompliance',
  accountDetails = 'accountDetails',
  communication = 'communication',
  policiesTable = 'policiesTable',
}

@Component({
  selector: 'app-account',
  imports: [
    CommonModule,
    GeneralInfo,
    PerformanceMetrics,
    Policies,
    AccountStatusCompliance,
    AccountDetails,
    Communication,
    PoliciesTable,
    Intersection,
  ],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Account {
  visibleElements: WritableSignal<{ [key in Elements]: boolean }> = signal({
    [Elements.policies]: false,
    [Elements.accountStatusCompliance]: false,
    [Elements.accountDetails]: false,
    [Elements.communication]: false,
    [Elements.policiesTable]: false,
  });

  public readonly elements = Elements;

  threshold: WritableSignal<number> = signal(0.5);
  rootMargin: WritableSignal<string> = signal('0px 0px 80% 0px');

  constructor() {
    afterNextRender(() => {
      if (window.innerWidth < 1400 && window.innerWidth > 1200) {
        this.threshold.set(0.2);
        this.rootMargin.set('0px 0px 150% 0px');
      } else if (window.innerWidth < 1200) {
        this.visibleElements.set({
          [Elements.policies]: true,
          [Elements.accountStatusCompliance]: true,
          [Elements.accountDetails]: true,
          [Elements.communication]: true,
          [Elements.policiesTable]: true
        })
      }
    });
  }

  onVisible(value: boolean, element: Elements): void {
    if (value) {
      this.visibleElements.update((prev) => ({
        ...prev,
        [element]: true,
      }));
    }
  }
}
