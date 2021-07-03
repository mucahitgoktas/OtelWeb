import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MevcutKonaklayanlarComponent } from './mevcut-konaklayanlar.component';

describe('MevcutKonaklayanlarComponent', () => {
  let component: MevcutKonaklayanlarComponent;
  let fixture: ComponentFixture<MevcutKonaklayanlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MevcutKonaklayanlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MevcutKonaklayanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
