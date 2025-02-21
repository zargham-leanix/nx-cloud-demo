import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib5-demo3',
    templateUrl: './lib5-demo3.component.html',
    styleUrl: './lib5-demo3.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib5Demo3Component {}
