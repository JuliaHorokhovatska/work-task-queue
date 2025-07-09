import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusCompliance } from './account-status-compliance';

describe('AccountStatusCompliance', () => {
  let component: AccountStatusCompliance;
  let fixture: ComponentFixture<AccountStatusCompliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountStatusCompliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountStatusCompliance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
