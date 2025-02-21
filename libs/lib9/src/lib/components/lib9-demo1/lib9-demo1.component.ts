import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib9-demo1',
    templateUrl: './lib9-demo1.component.html',
    styleUrl: './lib9-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib9Demo1Component {}
