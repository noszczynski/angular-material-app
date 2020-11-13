import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-toolbars-example',
    templateUrl: './toolbars-example.component.html',
    styleUrls: ['./toolbars-example.component.scss'],
})
export class ToolbarsExampleComponent implements OnInit {
    constructor() {}

    showBadge = true

    ngOnInit(): void {}
}
