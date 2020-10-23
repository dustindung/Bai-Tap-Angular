import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapAngularBuoi3Component } from './bai-tap-angular-buoi3.component';

describe('BaiTapAngularBuoi3Component', () => {
  let component: BaiTapAngularBuoi3Component;
  let fixture: ComponentFixture<BaiTapAngularBuoi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTapAngularBuoi3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapAngularBuoi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
