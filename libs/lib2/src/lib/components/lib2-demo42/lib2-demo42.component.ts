import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib2-demo42',
    templateUrl: './lib2-demo42.component.html',
    styleUrl: './lib2-demo42.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib2Demo42Component {}
