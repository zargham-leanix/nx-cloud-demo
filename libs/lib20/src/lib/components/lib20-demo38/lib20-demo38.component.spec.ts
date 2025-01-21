import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo38Component } from './lib20-demo38.component';

describe('Lib20Demo38Component', () => {
  let component: Lib20Demo38Component;
  let fixture: ComponentFixture<Lib20Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
