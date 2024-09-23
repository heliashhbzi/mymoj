import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsearchComponent } from './authorsearch.component';

describe('AuthorsearchComponent', () => {
  let component: AuthorsearchComponent;
  let fixture: ComponentFixture<AuthorsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
