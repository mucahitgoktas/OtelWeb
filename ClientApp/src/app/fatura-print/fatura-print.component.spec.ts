import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaPrintComponent } from './fatura-print.component';

describe('FaturaPrintComponent', () => {
  let component: FaturaPrintComponent;
  let fixture: ComponentFixture<FaturaPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
