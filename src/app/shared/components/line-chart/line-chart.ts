import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  OnChanges,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  imports: [CommonModule],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChart implements OnInit, OnChanges {
  initData = input.required<Record<string, number>>();

  dataLine: Signal<{ data: number[]; labels: string[] }> = computed(() => {
    return {
      data: Object.values(this.initData()),
      labels: Object.keys(this.initData()).map((l, i) => (i % 2 === 0 ? l : '')),
    };
  });

  width = input<number>(310);
  height = input<number>(100);

  points: { x: number; y: number }[] = [];
  pathD = '';
  animateKey: WritableSignal<boolean> = signal(false);

  private paddingY = 15;
  private paddingX = 20;

  ngOnInit(): void {
    this.generateChart();
  }

  ngOnChanges(): void {
    this.generateChart();

    this.animateKey.set(false);

    setTimeout(() => {
      this.animateKey.set(true);
    }, 100);
  }

  generateChart(): void {
    const data = this.dataLine().data;
    const stepX =
      (this.width() - this.paddingX * 2) / (data.length - 1);
    const maxY = Math.max(...data);

    this.points = data.map((value, index) => {
      const x = this.paddingX + index * stepX;
      const y =
        this.height() -
        (value / maxY) * (this.height() - this.paddingY * 2) -
        this.paddingY;
      return { x, y };
    });

    this.pathD = this.generateSmoothPath(this.points);
  }

  generateSmoothPath(points: { x: number; y: number }[]): string {
    if (points.length < 2) return '';

    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      d += ` Q ${prev.x},${prev.y} ${midX},${(prev.y + curr.y) / 2}`;
      d += ` T ${curr.x},${curr.y}`;
    }

    return d;
  }

  get viewBox() {
    return `0 0 ${this.width()} ${this.height()}`;
  }
}
