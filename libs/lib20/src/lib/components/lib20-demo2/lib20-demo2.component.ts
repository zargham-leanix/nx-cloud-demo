import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib20-demo2',
    templateUrl: './lib20-demo2.component.html',
    styleUrl: './lib20-demo2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib20Demo2Component {}
