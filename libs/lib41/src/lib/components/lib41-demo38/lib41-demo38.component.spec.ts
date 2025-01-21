import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo38Component } from './lib41-demo38.component';

describe('Lib41Demo38Component', () => {
  let component: Lib41Demo38Component;
  let fixture: ComponentFixture<Lib41Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
