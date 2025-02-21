import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib21-demo1',
    templateUrl: './lib21-demo1.component.html',
    styleUrl: './lib21-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib21Demo1Component {}
