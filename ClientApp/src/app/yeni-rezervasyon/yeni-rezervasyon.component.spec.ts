import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniRezervasyonComponent } from './yeni-rezervasyon.component';

describe('YeniRezervasyonComponent', () => {
  let component: YeniRezervasyonComponent;
  let fixture: ComponentFixture<YeniRezervasyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeniRezervasyonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniRezervasyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
