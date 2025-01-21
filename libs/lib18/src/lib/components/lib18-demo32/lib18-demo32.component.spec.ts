import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo32Component } from './lib18-demo32.component';

describe('Lib18Demo32Component', () => {
  let component: Lib18Demo32Component;
  let fixture: ComponentFixture<Lib18Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
