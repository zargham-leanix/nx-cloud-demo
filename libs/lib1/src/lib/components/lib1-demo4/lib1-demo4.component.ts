import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo4',
    templateUrl: './lib1-demo4.component.html',
    styleUrl: './lib1-demo4.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo4Component {}
