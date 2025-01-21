import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib2-demo1',
  templateUrl: './lib2-demo1.component.html',
  styleUrl: './lib2-demo1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib2Demo1Component {}
