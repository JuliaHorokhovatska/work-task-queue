import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';


import { WorkQueue } from '../../components/work-queue/work-queue';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, WorkQueue],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
