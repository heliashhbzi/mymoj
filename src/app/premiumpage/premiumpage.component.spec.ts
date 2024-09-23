import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumpageComponent } from './premiumpage.component';

describe('PremiumpageComponent', () => {
  let component: PremiumpageComponent;
  let fixture: ComponentFixture<PremiumpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
