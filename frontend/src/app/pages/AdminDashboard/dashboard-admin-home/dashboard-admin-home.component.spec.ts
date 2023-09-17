import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminHomeComponent } from './dashboard-admin-home.component';

describe('DashboardAdminHomeComponent', () => {
  let component: DashboardAdminHomeComponent;
  let fixture: ComponentFixture<DashboardAdminHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminHomeComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
