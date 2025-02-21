import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib3-demo3',
    templateUrl: './lib3-demo3.component.html',
    styleUrl: './lib3-demo3.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib3Demo3Component {}
