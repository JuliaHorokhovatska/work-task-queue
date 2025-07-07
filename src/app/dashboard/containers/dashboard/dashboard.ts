import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkQueue } from '../../components/work-queue/work-queue';
import { PortfolioGoals } from '../../components/portfolio-goals/portfolio-goals';
import { QuickActions } from '../../components/quick-actions/quick-actions';
import { MarketIntelligence } from '../../components/market-intelligence/market-intelligence';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, WorkQueue, PortfolioGoals, QuickActions, MarketIntelligence],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
