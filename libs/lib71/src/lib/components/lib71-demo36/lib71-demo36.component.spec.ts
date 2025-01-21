import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo36Component } from './lib71-demo36.component';

describe('Lib71Demo36Component', () => {
  let component: Lib71Demo36Component;
  let fixture: ComponentFixture<Lib71Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
