import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib6-demo2',
    templateUrl: './lib6-demo2.component.html',
    styleUrl: './lib6-demo2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib6Demo2Component {}
