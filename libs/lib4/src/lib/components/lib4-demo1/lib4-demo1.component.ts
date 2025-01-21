import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib4-demo1',
  templateUrl: './lib4-demo1.component.html',
  styleUrl: './lib4-demo1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib4Demo1Component {}
