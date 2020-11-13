import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TaskListComponent } from './components/task-list/task-list.component'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialExamplesModule } from './material-examples/material-examples.module'

@NgModule({
    declarations: [AppComponent, TaskListComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialExamplesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
