import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib1-demo2',
  templateUrl: './lib1-demo2.component.html',
  styleUrl: './lib1-demo2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib1Demo2Component {}
