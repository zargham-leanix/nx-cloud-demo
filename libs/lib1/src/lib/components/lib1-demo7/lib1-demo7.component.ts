import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo7',
    templateUrl: './lib1-demo7.component.html',
    styleUrl: './lib1-demo7.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo7Component {}
