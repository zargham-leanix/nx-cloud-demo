import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib3-demo1',
  templateUrl: './lib3-demo1.component.html',
  styleUrl: './lib3-demo1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib3Demo1Component {}
