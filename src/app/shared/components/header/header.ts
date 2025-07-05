import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search } from '../search/search';

@Component({
  selector: 'app-header',
  imports: [Search],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

}
