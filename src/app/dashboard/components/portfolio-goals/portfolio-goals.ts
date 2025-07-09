import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';

import { ProgressBarWithParts } from '../../../shared/components/progress-bar-with-parts/progress-bar-with-parts';
import { ProgressGradient } from '../../../shared/components/progress-gradient/progress-gradient';

@Component({
  selector: 'app-portfolio-goals',
  imports: [ProgressBarWithParts, ProgressGradient],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioGoals implements OnInit {
  progressVisible: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.progressVisible.set(true);
    }, 200)
  }
}
