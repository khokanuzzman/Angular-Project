import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverHomepageComponent } from './cover-homepage.component';

describe('CoverHomepageComponent', () => {
  let component: CoverHomepageComponent;
  let fixture: ComponentFixture<CoverHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
