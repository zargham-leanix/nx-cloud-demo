import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib5-demo1',
    templateUrl: './lib5-demo1.component.html',
    styleUrl: './lib5-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib5Demo1Component {}
