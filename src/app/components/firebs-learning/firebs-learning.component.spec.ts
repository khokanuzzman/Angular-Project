import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebsLearningComponent } from './firebs-learning.component';

describe('FirebsLearningComponent', () => {
  let component: FirebsLearningComponent;
  let fixture: ComponentFixture<FirebsLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebsLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebsLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
