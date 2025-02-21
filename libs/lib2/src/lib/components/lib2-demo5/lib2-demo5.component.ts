import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib2-demo5',
    templateUrl: './lib2-demo5.component.html',
    styleUrl: './lib2-demo5.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib2Demo5Component {}
