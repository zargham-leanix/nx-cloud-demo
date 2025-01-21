import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo38Component } from './lib50-demo38.component';

describe('Lib50Demo38Component', () => {
  let component: Lib50Demo38Component;
  let fixture: ComponentFixture<Lib50Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
