import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib20-demo1',
    templateUrl: './lib20-demo1.component.html',
    styleUrl: './lib20-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib20Demo1Component {}
