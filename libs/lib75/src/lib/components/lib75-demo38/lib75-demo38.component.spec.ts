import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo38Component } from './lib75-demo38.component';

describe('Lib75Demo38Component', () => {
  let component: Lib75Demo38Component;
  let fixture: ComponentFixture<Lib75Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
