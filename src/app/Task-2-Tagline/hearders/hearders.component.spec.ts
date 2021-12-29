import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeardersComponent } from './hearders.component';

describe('HeardersComponent', () => {
  let component: HeardersComponent;
  let fixture: ComponentFixture<HeardersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeardersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeardersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
