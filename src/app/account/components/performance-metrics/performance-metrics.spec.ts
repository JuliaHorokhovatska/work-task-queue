import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMetrics } from './performance-metrics';

describe('PerformanceMetrics', () => {
  let component: PerformanceMetrics;
  let fixture: ComponentFixture<PerformanceMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
