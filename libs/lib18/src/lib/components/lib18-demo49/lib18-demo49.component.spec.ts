import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo49Component } from './lib18-demo49.component';

describe('Lib18Demo49Component', () => {
  let component: Lib18Demo49Component;
  let fixture: ComponentFixture<Lib18Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
