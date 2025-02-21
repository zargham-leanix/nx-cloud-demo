import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib2-demo7',
    templateUrl: './lib2-demo7.component.html',
    styleUrl: './lib2-demo7.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib2Demo7Component {}
