import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core';

@Component({
  selector: 'app-progress-bar-with-parts',
  imports: [],
  templateUrl: './progress-bar-with-parts.html',
  styleUrl: './progress-bar-with-parts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarWithParts {
  target = input.required<number>();
  current = input.required<number>();
  change = input.required<number>();

  // Widths of bar segments
  yellowWidth = 20;
  redWidth: Signal<number> = computed(() => 100 - this.yellowWidth - this.current());

  currentPosition: Signal<number> = computed(() => this.current() + this.change());
}
