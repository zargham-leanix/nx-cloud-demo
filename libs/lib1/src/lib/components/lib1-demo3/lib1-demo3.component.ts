import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib1-demo3',
  templateUrl: './lib1-demo3.component.html',
  styleUrl: './lib1-demo3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib1Demo3Component {}
