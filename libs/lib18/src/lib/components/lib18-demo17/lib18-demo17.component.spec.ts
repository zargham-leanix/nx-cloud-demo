import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo17Component } from './lib18-demo17.component';

describe('Lib18Demo17Component', () => {
  let component: Lib18Demo17Component;
  let fixture: ComponentFixture<Lib18Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
