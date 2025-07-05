import { HttpClient } from '@angular/common/http';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-sprite',
  imports: [],
  templateUrl: './svg-sprite.html',
  styleUrl: './svg-sprite.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSprite {
  icons: SafeHtml = '';

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.http
        .get('/assets/symbol/sprites.svg', { responseType: 'text' })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((res) => {
          this.icons = this.sanitizer.bypassSecurityTrustHtml(res);
          this.cdr.markForCheck();
        });
    });
  }
}
