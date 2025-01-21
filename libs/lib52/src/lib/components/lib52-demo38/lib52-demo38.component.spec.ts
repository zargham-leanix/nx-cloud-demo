import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo38Component } from './lib52-demo38.component';

describe('Lib52Demo38Component', () => {
  let component: Lib52Demo38Component;
  let fixture: ComponentFixture<Lib52Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
