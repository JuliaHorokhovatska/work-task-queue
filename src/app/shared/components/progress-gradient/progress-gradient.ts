import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core';

@Component({
  selector: 'app-progress-gradient',
  imports: [CommonModule],
  templateUrl: './progress-gradient.html',
  styleUrl: './progress-gradient.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressGradient {
  actual = input.required<number>();
  target = input.required<number>();

  actualText = input<string>();
  targetText = input<string>();

  height = input<number>(25);
  width = input<number>(200);

  showBackground = input<boolean>(true);
  showPercentage = input<boolean>(true);

  progressColor = input<string>('primary');

  progressVisible = input<boolean>(false);

  percentage: Signal<number> = computed(() => Math.round((this.actual() / this.target()) * 100));
}
