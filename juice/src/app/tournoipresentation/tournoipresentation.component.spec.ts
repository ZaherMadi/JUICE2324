import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoipresentationComponent } from './tournoipresentation.component';

describe('TournoipresentationComponent', () => {
  let component: TournoipresentationComponent;
  let fixture: ComponentFixture<TournoipresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournoipresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournoipresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
