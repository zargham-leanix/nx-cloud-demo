import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo45Component } from './lib18-demo45.component';

describe('Lib18Demo45Component', () => {
  let component: Lib18Demo45Component;
  let fixture: ComponentFixture<Lib18Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
