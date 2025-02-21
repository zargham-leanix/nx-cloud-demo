import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib8-demo1',
    templateUrl: './lib8-demo1.component.html',
    styleUrl: './lib8-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib8Demo1Component {}
