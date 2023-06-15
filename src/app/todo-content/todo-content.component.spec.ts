import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContentComponent } from './todo-content.component';

describe('TodoContentComponent', () => {
  let component: TodoContentComponent;
  let fixture: ComponentFixture<TodoContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoContentComponent]
    });
    fixture = TestBed.createComponent(TodoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
