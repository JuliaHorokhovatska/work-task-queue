import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Search implements OnInit {
  search = new FormControl('');

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(500))
      .subscribe((value) => {
        console.log(value);
      });
  }
}
