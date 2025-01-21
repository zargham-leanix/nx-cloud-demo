import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-lib1-demo11',
  templateUrl: './lib1-demo11.component.html',
  styleUrl: './lib1-demo11.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib1Demo11Component {}
