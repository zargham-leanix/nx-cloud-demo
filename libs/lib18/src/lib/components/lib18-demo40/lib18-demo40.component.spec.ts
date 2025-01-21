import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo40Component } from './lib18-demo40.component';

describe('Lib18Demo40Component', () => {
  let component: Lib18Demo40Component;
  let fixture: ComponentFixture<Lib18Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
