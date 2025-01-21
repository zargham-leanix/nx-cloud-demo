import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo36Component } from './lib30-demo36.component';

describe('Lib30Demo36Component', () => {
  let component: Lib30Demo36Component;
  let fixture: ComponentFixture<Lib30Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
