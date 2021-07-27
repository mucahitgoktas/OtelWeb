import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniFaturaComponent } from './yeni-fatura.component';

describe('YeniFaturaComponent', () => {
  let component: YeniFaturaComponent;
  let fixture: ComponentFixture<YeniFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeniFaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
