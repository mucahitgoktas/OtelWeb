import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaDetailsComponent } from './fatura-details.component';

describe('FaturaDetailsComponent', () => {
  let component: FaturaDetailsComponent;
  let fixture: ComponentFixture<FaturaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
