import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarWithParts } from './progress-bar-with-parts';

describe('ProgressBarWithParts', () => {
  let component: ProgressBarWithParts;
  let fixture: ComponentFixture<ProgressBarWithParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarWithParts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarWithParts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
