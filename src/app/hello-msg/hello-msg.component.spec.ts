import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMsgComponent } from './hello-msg.component';

describe('HelloMsgComponent', () => {
  let component: HelloMsgComponent;
  let fixture: ComponentFixture<HelloMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloMsgComponent]
    });
    fixture = TestBed.createComponent(HelloMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
