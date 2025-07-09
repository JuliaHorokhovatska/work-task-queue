import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';

import { ProgressGradient } from '../../../shared/components/progress-gradient/progress-gradient';

@Component({
  selector: 'app-performance-metrics',
  imports: [ProgressGradient],
  templateUrl: './performance-metrics.html',
  styleUrl: './performance-metrics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceMetrics implements OnInit {
  progressVisible: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.progressVisible.set(true);
    }, 200)
  }
}
