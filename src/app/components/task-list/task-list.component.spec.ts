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
        component.task = {
            id: 1,
            title: 'Test task works!',
        }
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should switch to edit mode when edit button clicked', () => {
        const button = fixture.debugElement.query(By.css('.edit-button'))
        const editSpy = spyOn(component, 'edit').and.callThrough()

        button.triggerEventHandler('click', {})

        expect(editSpy).toHaveBeenCalled()
        expect(component.mode).toEqual(true)
    })

    it('should render task message', () => {
        const task = fixture.debugElement.query(By.css('.task'))
        const correctMessage = 'Test task works!'

        expect(task.nativeElement.innerText).toEqual(correctMessage)
    })

    it('should render updated task', () => {
        const task = fixture.debugElement.query(By.css('.task'))
        const correctTitle = 'Updated title!'
        const updatedTask = { id: 1, title: 'Updated title!' }

        component.task = Object.assign({}, updatedTask)
        fixture.detectChanges()

        expect(task.nativeElement.innerText).toEqual(correctTitle)
    })

    describe('in edit mode', () => {
        beforeEach(() => {
            component.mode = true
            fixture.detectChanges()
        })

        it('should switch to edit mode off when save button clicked', () => {
            fixture.detectChanges()

            const editSpy = spyOn(component, 'save').and.callThrough()
            const button = fixture.debugElement.query(By.css('.save-button'))

            button.triggerEventHandler('click', {})

            expect(editSpy).toHaveBeenCalled()
            expect(component.mode).toEqual(false)
        })

        it('should show task name inside input', async () => {
            const input = fixture.debugElement.query(By.directive(NgModel))

            await fixture.whenStable()

            expect(input.nativeElement.value).toEqual(component.task.title)
        })

        it('should update message when input value will change', () => {
            const input = fixture.debugElement.query(By.directive(NgModel))
            const correctMessage = 'Updated!'

            input.nativeElement.value = correctMessage
            input.triggerEventHandler('input', {
                target: { value: correctMessage },
            })

            // alternative:
            // input.nativeElement.dispatchEvent(new Event('input'))

            expect(component.task.title).toEqual(correctMessage)
        })

        it('should show error message when input value is empty', () => {
            const input = fixture.debugElement.query(By.directive(NgModel))
            const model = input.injector.get(NgModel)
            const error = fixture.debugElement.query(By.css('.error'))

            expect(model.valid).toBeFalsy()
            expect(error).not.toBeNull('Error message not found')
        })

        it('should emit onSave() event then save button clicked', async (done) => {
            const button = fixture.debugElement.query(By.css('.save-button'))
            const saveSpy = spyOn(component, 'save').and.callThrough()
            const componentTask = component.task

            component.onSave.subscribe((task) => {
                expect(componentTask).toEqual(task)
                done()
            })

            button.triggerEventHandler('click', {})
            expect(saveSpy).toHaveBeenCalled()
        })
    })
})
