import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProgressGradient } from '../../../shared/components/progress-gradient/progress-gradient';

@Component({
  selector: 'app-performance-metrics',
  imports: [ProgressGradient],
  templateUrl: './performance-metrics.html',
  styleUrl: './performance-metrics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceMetrics {}
