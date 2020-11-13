import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

interface Task {
    id: number
    title: string
}

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
    constructor() {}

    @Input() task: Task
    @Output() saved: EventEmitter<Task> = new EventEmitter<Task>()

    message = 'Message works!'
    mode = false

    edit = () => {
        this.mode = true
    }

    save = () => {
        this.mode = false
        this.saved.emit(this.task)
    }

    ngOnInit(): void {}
}
