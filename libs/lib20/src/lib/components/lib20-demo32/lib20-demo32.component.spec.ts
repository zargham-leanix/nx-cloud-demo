import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo32Component } from './lib20-demo32.component';

describe('Lib20Demo32Component', () => {
  let component: Lib20Demo32Component;
  let fixture: ComponentFixture<Lib20Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
