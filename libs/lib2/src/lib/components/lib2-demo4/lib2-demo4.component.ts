import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib2-demo4',
    templateUrl: './lib2-demo4.component.html',
    styleUrl: './lib2-demo4.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib2Demo4Component {}
