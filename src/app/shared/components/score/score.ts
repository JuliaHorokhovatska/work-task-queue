import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Signal,
} from '@angular/core';
import { AccountWinnability } from '../../models/models';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Score {
  score = input.required<AccountWinnability>();

  scoreWithPointArray: Signal<{ name: string; points: number[] }> = computed(
    () => {
      return {
        name: this.score(),
        points:
          this.score() === AccountWinnability.veryStrong
            ? Array(4)
            : this.score() === AccountWinnability.strong
            ? Array(3)
            : this.score() === AccountWinnability.medium
            ? Array(2)
            : Array(1),
      };
    }
  );
}
