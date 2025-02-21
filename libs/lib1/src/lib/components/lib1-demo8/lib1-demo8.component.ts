import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo8',
    templateUrl: './lib1-demo8.component.html',
    styleUrl: './lib1-demo8.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo8Component {}
