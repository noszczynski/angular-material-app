import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
    constructor() {}

    message = 'Message works!'
    mode = false

    edit = () => {
        this.mode = true
    }

    enter = (e) => {
        this.message = e.target.value
    }

    ngOnInit(): void {}
}
