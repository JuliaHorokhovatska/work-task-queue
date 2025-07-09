import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Search } from '../../../shared/components/search/search';

@Component({
  selector: 'app-communication',
  imports: [Search],
  templateUrl: './communication.html',
  styleUrl: './communication.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Communication {}
