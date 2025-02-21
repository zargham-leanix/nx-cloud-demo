import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib4-demo3',
    templateUrl: './lib4-demo3.component.html',
    styleUrl: './lib4-demo3.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib4Demo3Component {}
