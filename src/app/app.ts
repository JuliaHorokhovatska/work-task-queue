import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/components/header/header';
import { NavBar } from './shared/components/nav-bar/nav-bar';
import { SvgSprite } from './shared/svg-sprite/svg-sprite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SvgSprite, Header, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'work-task-queue';
}
