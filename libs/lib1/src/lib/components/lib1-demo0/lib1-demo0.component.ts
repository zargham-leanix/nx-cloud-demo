import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo0',
    templateUrl: './lib1-demo0.component.html',
    styleUrl: './lib1-demo0.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo0Component {}
