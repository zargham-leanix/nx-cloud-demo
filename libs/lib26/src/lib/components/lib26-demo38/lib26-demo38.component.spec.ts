import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo38Component } from './lib26-demo38.component';

describe('Lib26Demo38Component', () => {
  let component: Lib26Demo38Component;
  let fixture: ComponentFixture<Lib26Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
