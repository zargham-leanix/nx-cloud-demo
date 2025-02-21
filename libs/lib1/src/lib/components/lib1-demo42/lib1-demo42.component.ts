import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo42',
    templateUrl: './lib1-demo42.component.html',
    styleUrl: './lib1-demo42.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo42Component {}
