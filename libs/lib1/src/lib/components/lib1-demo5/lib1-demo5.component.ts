import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib1-demo5',
    templateUrl: './lib1-demo5.component.html',
    styleUrl: './lib1-demo5.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib1Demo5Component {}
