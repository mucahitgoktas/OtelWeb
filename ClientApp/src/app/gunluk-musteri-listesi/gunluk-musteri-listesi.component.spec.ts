import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunlukMusteriListesiComponent } from './gunluk-musteri-listesi.component';

describe('GunlukMusteriListesiComponent', () => {
  let component: GunlukMusteriListesiComponent;
  let fixture: ComponentFixture<GunlukMusteriListesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunlukMusteriListesiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunlukMusteriListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
