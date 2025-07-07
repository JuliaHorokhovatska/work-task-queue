import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressGradient } from './progress-gradient';

describe('ProgressGradient', () => {
  let component: ProgressGradient;
  let fixture: ComponentFixture<ProgressGradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressGradient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressGradient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
