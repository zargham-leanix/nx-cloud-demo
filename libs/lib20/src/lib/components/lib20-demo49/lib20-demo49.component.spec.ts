import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo49Component } from './lib20-demo49.component';

describe('Lib20Demo49Component', () => {
  let component: Lib20Demo49Component;
  let fixture: ComponentFixture<Lib20Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
