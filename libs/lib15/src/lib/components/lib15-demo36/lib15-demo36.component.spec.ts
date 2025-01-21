import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo36Component } from './lib15-demo36.component';

describe('Lib15Demo36Component', () => {
  let component: Lib15Demo36Component;
  let fixture: ComponentFixture<Lib15Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
