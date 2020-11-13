import { TaskListComponent } from './task-list.component'
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { FormsModule, NgModel } from '@angular/forms'

describe('TaskListComponent', () => {
    let component: TaskListComponent
    let fixture: ComponentFixture<TaskListComponent>

    beforeEach(async (done) => {
        const config = {
            declarations: [TaskListComponent],
            imports: [FormsModule],
            providers: [],
        }

        await TestBed.configureTestingModule(config).compileComponents()

        await done()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should render task message', () => {
        const task = fixture.debugElement.query(By.css('.task'))
        const correctMessage = 'Message works!'

        expect(task.nativeElement.innerText).toEqual(correctMessage)
    })

    it('should render updated task', () => {
        const task = fixture.debugElement.query(By.css('.task'))
        const correctMessage = 'Updated!'

        component.message = correctMessage
        fixture.detectChanges()

        expect(task.nativeElement.innerText).toEqual(correctMessage)
    })

    it('should switch to edit mode when edit button clicked', () => {
        const button = fixture.debugElement.query(By.css('.edit-button'))
        const editSpy = spyOn(component, 'edit').and.callThrough()

        button.triggerEventHandler('click', {})

        expect(editSpy).toHaveBeenCalled()
        expect(component.mode).toEqual(true)
    })

    it('should show task name inside input', async () => {
        const input = fixture.debugElement.query(By.directive(NgModel))

        await fixture.whenStable()

        expect(input.nativeElement.value).toEqual(component.message)
    })

    it('should update message when input value will change', async () => {
        const input = fixture.debugElement.query(By.directive(NgModel))
        const correctMessage = 'Updated!'

        input.nativeElement.value = correctMessage
        input.triggerEventHandler('input', {
            target: { value: correctMessage },
        })

        // alternative:
        // input.nativeElement.dispatchEvent(new Event('input'))

        expect(component.message).toEqual(correctMessage)
    })

    it('should show error message when input value is empty', async () => {
        const input = fixture.debugElement.query(By.directive(NgModel))
        const model = input.injector.get(NgModel)
        const error = fixture.debugElement.query(By.css('.error'))

        expect(model.valid).toBeFalsy()
        expect(error).not.toBeNull('Error message not found')
    })
})
