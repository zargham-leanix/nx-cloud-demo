import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nx-lib2-demo9',
    templateUrl: './lib2-demo9.component.html',
    styleUrl: './lib2-demo9.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Lib2Demo9Component {}
