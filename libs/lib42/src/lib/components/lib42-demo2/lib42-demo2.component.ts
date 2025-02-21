import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib42-demo2',
    templateUrl: './lib42-demo2.component.html',
    styleUrl: './lib42-demo2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib42Demo2Component {}
