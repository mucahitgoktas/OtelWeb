import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaListComponent } from './fatura-list.component';

describe('FaturaListComponent', () => {
  let component: FaturaListComponent;
  let fixture: ComponentFixture<FaturaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
