import { TaskListComponent } from './task-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

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
});
