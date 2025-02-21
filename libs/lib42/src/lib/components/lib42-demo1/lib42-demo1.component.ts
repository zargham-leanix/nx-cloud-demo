import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib42-demo1',
    templateUrl: './lib42-demo1.component.html',
    styleUrl: './lib42-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib42Demo1Component {}
