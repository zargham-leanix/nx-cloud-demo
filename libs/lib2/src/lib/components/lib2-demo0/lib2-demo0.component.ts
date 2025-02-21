import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib2-demo0',
    templateUrl: './lib2-demo0.component.html',
    styleUrl: './lib2-demo0.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib2Demo0Component {}
