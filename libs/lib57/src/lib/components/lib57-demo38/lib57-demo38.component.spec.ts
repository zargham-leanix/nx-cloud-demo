import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo38Component } from './lib57-demo38.component';

describe('Lib57Demo38Component', () => {
  let component: Lib57Demo38Component;
  let fixture: ComponentFixture<Lib57Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
