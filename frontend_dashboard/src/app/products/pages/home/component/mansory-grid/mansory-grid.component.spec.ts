import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansoryGridComponent } from './mansory-grid.component';

describe('MansoryGridComponent', () => {
  let component: MansoryGridComponent;
  let fixture: ComponentFixture<MansoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MansoryGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MansoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
