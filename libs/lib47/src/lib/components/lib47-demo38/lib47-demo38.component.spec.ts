import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo38Component } from './lib47-demo38.component';

describe('Lib47Demo38Component', () => {
  let component: Lib47Demo38Component;
  let fixture: ComponentFixture<Lib47Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
