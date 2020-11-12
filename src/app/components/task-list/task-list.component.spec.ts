import { TaskListComponent } from './task-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async (done) => {
    const config = {
      declarations: [TaskListComponent],
      imports: [],
      providers: [],
    };

    await TestBed.configureTestingModule(config).compileComponents();

    await done();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render task message', () => {
    const task = fixture.debugElement.query(By.css('.task'));
    const correctMessage = 'Message works!';

    expect(task.nativeElement.innerText).toEqual(correctMessage);
  });

  it('should render updated task', () => {
    const task = fixture.debugElement.query(By.css('.task'));
    const correctMessage = 'Updated!';

    component.message = correctMessage;
    fixture.detectChanges();

    expect(task.nativeElement.innerText).toEqual(correctMessage);
  });
});
