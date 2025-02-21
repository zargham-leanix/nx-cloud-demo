import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib42-demo3',
    templateUrl: './lib42-demo3.component.html',
    styleUrl: './lib42-demo3.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib42Demo3Component {}
