import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCenters } from './training-centers';

describe('TrainingCenters', () => {
  let component: TrainingCenters;
  let fixture: ComponentFixture<TrainingCenters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingCenters],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingCenters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
