import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib42-demo4',
    templateUrl: './lib42-demo4.component.html',
    styleUrl: './lib42-demo4.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib42Demo4Component {}
