import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib6-demo1',
    templateUrl: './lib6-demo1.component.html',
    styleUrl: './lib6-demo1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib6Demo1Component {}
