import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo37Component } from './lib18-demo37.component';

describe('Lib18Demo37Component', () => {
  let component: Lib18Demo37Component;
  let fixture: ComponentFixture<Lib18Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
