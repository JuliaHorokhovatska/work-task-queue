import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, map, Observable } from 'rxjs';

import { DataService } from '../../../shared/services/data';
import { AccountStatistics } from '../../../shared/models/models';
import { Score } from '../../../shared/components/score/score';
import { LineChart } from '../../../shared/components/line-chart/line-chart';
import { ProgressGradient } from '../../../shared/components/progress-gradient/progress-gradient';
import { CalculateProgressWidthPipe } from '../../../shared/pipes/calculate-progress-width-pipe';

enum MenuSections {
  desicionSupport = 'Desicion Support',
  riskAssessment = 'Risk Assessment',
  documentsAndCompliance = 'Documents and Compliance',
}

enum MenuItem {
  winnability = 'winnability',
  review = 'review',
  portfolio = 'portfolio',
  broker = 'broker',
}

@Component({
  selector: 'app-account-details',
  imports: [CommonModule, Score, LineChart, ProgressGradient, CalculateProgressWidthPipe],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetails implements OnInit {
  accountDetails$!: Observable<AccountStatistics>;

  selectedMenuItem: WritableSignal<{
    section: MenuSections;
    item: MenuItem;
  }> = signal({
    section: MenuSections.desicionSupport,
    item: MenuItem.winnability,
  });

  public readonly menuSections = MenuSections;
  public readonly menuItem = MenuItem;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.accountDetails$ = this.dataService.getAccountDetails();
  }

  setSection(section: MenuSections) {
    this.selectedMenuItem.set({ section, item: MenuItem.winnability });
  }

  setItem(value: {
    section: MenuSections;
    item: MenuItem;
  }) {
    this.selectedMenuItem.set(value);
  }
}
