import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo36Component } from './lib57-demo36.component';

describe('Lib57Demo36Component', () => {
  let component: Lib57Demo36Component;
  let fixture: ComponentFixture<Lib57Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
