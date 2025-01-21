import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo38Component } from './lib100-demo38.component';

describe('Lib100Demo38Component', () => {
  let component: Lib100Demo38Component;
  let fixture: ComponentFixture<Lib100Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
