import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo38Component } from './lib48-demo38.component';

describe('Lib48Demo38Component', () => {
  let component: Lib48Demo38Component;
  let fixture: ComponentFixture<Lib48Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
