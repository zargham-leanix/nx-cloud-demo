import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib3-demo2',
  templateUrl: './lib3-demo2.component.html',
  styleUrl: './lib3-demo2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib3Demo2Component {}
