import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo12',
    templateUrl: './lib1-demo12.component.html',
    styleUrl: './lib1-demo12.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo12Component {}
