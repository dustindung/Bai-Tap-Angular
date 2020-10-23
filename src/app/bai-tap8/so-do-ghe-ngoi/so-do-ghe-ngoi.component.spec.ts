import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoDoGheNgoiComponent } from './so-do-ghe-ngoi.component';

describe('SoDoGheNgoiComponent', () => {
  let component: SoDoGheNgoiComponent;
  let fixture: ComponentFixture<SoDoGheNgoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoDoGheNgoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoDoGheNgoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
