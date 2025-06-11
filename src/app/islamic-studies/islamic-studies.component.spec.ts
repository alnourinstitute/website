import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicStudiesComponent } from './islamic-studies.component';

describe('IslamicStudiesComponent', () => {
  let component: IslamicStudiesComponent;
  let fixture: ComponentFixture<IslamicStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslamicStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslamicStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
