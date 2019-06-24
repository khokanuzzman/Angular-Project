import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPrjComponent } from './random-prj.component';

describe('RandomPrjComponent', () => {
  let component: RandomPrjComponent;
  let fixture: ComponentFixture<RandomPrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
