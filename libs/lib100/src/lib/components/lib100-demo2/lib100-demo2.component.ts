import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib100-demo2',
    templateUrl: './lib100-demo2.component.html',
    styleUrl: './lib100-demo2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib100Demo2Component {}
