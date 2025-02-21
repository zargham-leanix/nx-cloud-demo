import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib4-demo2',
    templateUrl: './lib4-demo2.component.html',
    styleUrl: './lib4-demo2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib4Demo2Component {}
