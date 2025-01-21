import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo38Component } from './lib55-demo38.component';

describe('Lib55Demo38Component', () => {
  let component: Lib55Demo38Component;
  let fixture: ComponentFixture<Lib55Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
