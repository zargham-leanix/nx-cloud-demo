import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo17Component } from './lib20-demo17.component';

describe('Lib20Demo17Component', () => {
  let component: Lib20Demo17Component;
  let fixture: ComponentFixture<Lib20Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
