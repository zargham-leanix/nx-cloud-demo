import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib2-demo2',
  templateUrl: './lib2-demo2.component.html',
  styleUrl: './lib2-demo2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib2Demo2Component {}
