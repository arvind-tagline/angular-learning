import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedreviewsComponent } from './verifiedreviews.component';

describe('VerifiedreviewsComponent', () => {
  let component: VerifiedreviewsComponent;
  let fixture: ComponentFixture<VerifiedreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
