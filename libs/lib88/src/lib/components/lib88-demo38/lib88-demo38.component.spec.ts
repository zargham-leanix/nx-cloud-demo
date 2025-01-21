import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo38Component } from './lib88-demo38.component';

describe('Lib88Demo38Component', () => {
  let component: Lib88Demo38Component;
  let fixture: ComponentFixture<Lib88Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
