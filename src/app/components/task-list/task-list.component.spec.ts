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
    const message = fixture.debugElement.query(By.css('.message'));
    const correctMessage = 'Message works!';

    expect(message.nativeElement.innerText).toEqual(correctMessage);
  });
});
