import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo33Component } from './lib18-demo33.component';

describe('Lib18Demo33Component', () => {
  let component: Lib18Demo33Component;
  let fixture: ComponentFixture<Lib18Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
