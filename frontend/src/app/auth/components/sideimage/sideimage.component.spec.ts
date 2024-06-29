import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideimageComponent } from './sideimage.component';

describe('SideimageComponent', () => {
  let component: SideimageComponent;
  let fixture: ComponentFixture<SideimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
